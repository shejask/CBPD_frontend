$source = "d:\web\cbpd"
$dest = "d:\web\CBPD_frontend"

Write-Host "Cleaning destination directory, except .git..."
Get-ChildItem -Path $dest -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force

Write-Host "Copying files from source to destination..."
Get-ChildItem -Path $source -Force | Where-Object { 
    $_.Name -ne ".git" -and 
    $_.Name -ne "node_modules" -and 
    $_.Name -ne ".next" -and 
    $_.Name -ne "out" 
} | Copy-Item -Destination $dest -Recurse -Force

Write-Host "Committing and pushing changes..."
git --git-dir="$dest\.git" --work-tree="$dest" add .
git --git-dir="$dest\.git" --work-tree="$dest" commit -m "chore: migrate new codebase to frontend repo, including API alignment"
git --git-dir="$dest\.git" --work-tree="$dest" push

Write-Host "Migration completed successfully!"
