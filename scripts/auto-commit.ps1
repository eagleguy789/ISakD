# Auto Commit Script (runs every 5 minutes)
# Usage: .\scripts\auto-commit.ps1

$projectPath = "D:\work\isak"
$intervalMinutes = 5

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Git Auto Commit Started" -ForegroundColor Cyan
Write-Host " Project: $projectPath" -ForegroundColor Cyan
Write-Host " Interval: ${intervalMinutes} min" -ForegroundColor Cyan
Write-Host " Stop: Ctrl+C" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

Set-Location $projectPath

while ($true) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    
    $status = git status --porcelain
    
    if ($status) {
        Write-Host ""
        Write-Host "[$timestamp] Changes detected!" -ForegroundColor Green
        
        git add -A
        $commitMessage = "Auto commit: $timestamp"
        git commit -m $commitMessage
        
        Write-Host "[$timestamp] Committed: $commitMessage" -ForegroundColor Green
        
        try {
            git push 2>$null
            Write-Host "[$timestamp] Pushed" -ForegroundColor Green
        } catch {
            Write-Host "[$timestamp] Push failed" -ForegroundColor Yellow
        }
    } else {
        Write-Host "[$timestamp] No changes" -ForegroundColor Gray
    }
    
    Start-Sleep -Seconds ($intervalMinutes * 60)
}
