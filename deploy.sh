#!/bin/bash

# Ask for commit message
read -p "Enter commit message: " COMMIT_MSG

# Remove node_modules from git (but keep locally)
git rm -r --cached node_modules 2>/dev/null

# Add .gitignore if not exists or append node_modules
if [ ! -f .gitignore ]; then
  echo "node_modules" >> .gitignore
  echo ".DS_Store" >> .gitignore
  echo ".env" >> .gitignore
else
  grep -qxF "node_modules" .gitignore || echo "node_modules" >> .gitignore
  grep -qxF ".DS_Store" .gitignore || echo ".DS_Store" >> .gitignore
  grep -qxF ".env" .gitignore || echo ".env" >> .gitignore
fi

# Clean node_modules from Git history using filter-repo if installed
if command -v git-filter-repo >/dev/null 2>&1; then
  echo "Cleaning old node_modules from Git history..."
  git filter-repo --path node_modules/ --invert-paths --force
else
  echo "git-filter-repo not found. Skipping Git history cleanup. Install it for a full cleanup: https://github.com/newren/git-filter-repo"
fi

# Stage all changes
git add .

# Commit changes
git commit -m "$COMMIT_MSG"

# Push to GitHub
git push origin main

# Deploy to Vercel production
vercel --prod

echo "✅ Deployment complete!"
