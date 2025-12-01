# File Watch Auto Commit Script
# Usage: .\scripts\watch-commit.ps1

$projectPath = "D:\work\isak"
$debounceSeconds = 10

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " File Watch Auto Commit" -ForegroundColor Cyan
Write-Host " Project: $projectPath" -ForegroundColor Cyan
Write-Host " Debounce: ${debounceSeconds}s" -ForegroundColor Cyan
Write-Host " Stop: Ctrl+C" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

Set-Location $projectPath

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $projectPath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

$excludePatterns = @('.git', 'node_modules', '.next', '.turbo')

$script:lastCommitTime = [DateTime]::MinValue

$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    
    foreach ($pattern in $excludePatterns) {
        if ($path -like "*\$pattern\*" -or $path -like "*\$pattern") {
            return
        }
    }
    
    $now = Get-Date
    $timeSinceLastCommit = ($now - $script:lastCommitTime).TotalSeconds
    
    if ($timeSinceLastCommit -lt $debounceSeconds) {
        return
    }
    
    Write-Host ""
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Change: $changeType - $path" -ForegroundColor Yellow
    
    Start-Sleep -Seconds $debounceSeconds
    
    $status = git status --porcelain
    
    if ($status) {
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        
        git add -A
        git commit -m "Auto: $timestamp"
        
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Auto committed" -ForegroundColor Green
        
        $script:lastCommitTime = Get-Date
    }
}

Register-ObjectEvent $watcher "Created" -Action $action | Out-Null
Register-ObjectEvent $watcher "Changed" -Action $action | Out-Null
Register-ObjectEvent $watcher "Deleted" -Action $action | Out-Null
Register-ObjectEvent $watcher "Renamed" -Action $action | Out-Null

Write-Host ""
Write-Host "Watching... (Ctrl+C to stop)" -ForegroundColor Green

try {
    while ($true) { 
        Start-Sleep -Seconds 1 
    }
} finally {
    Get-EventSubscriber | Unregister-Event
    $watcher.Dispose()
    Write-Host "Watch stopped" -ForegroundColor Yellow
}
