# Quick Commit Script
# Usage: .\scripts\quick-commit.ps1 "commit message"
# Or: .\scripts\quick-commit.ps1 (auto message)

param(
    [string]$message = ""
)

$projectPath = "D:\work\isak"
Set-Location $projectPath

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

$status = git status --porcelain

if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Yellow
    exit 0
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Changed files:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
git status --short
Write-Host ""

if ([string]::IsNullOrEmpty($message)) {
    $message = "Update: $timestamp"
}

git add -A
git commit -m $message

Write-Host ""
Write-Host "Committed: $message" -ForegroundColor Green

$push = Read-Host "Push? (Y/N)"
if ($push -eq "Y" -or $push -eq "y") {
    git push
    Write-Host "Pushed!" -ForegroundColor Green
}
