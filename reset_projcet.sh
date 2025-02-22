
#!/bin/bash

# Project configuration
NEW_PROJECT_NAME="EntropyUX"
GITHUB_USER="Irilone"
NEW_REPO_NAME="EntropyUX"
NEW_GITHUB_URL="https://github.com/$GITHUB_USER/$NEW_REPO_NAME.git"

echo "🔍 Removing Lovable.dev dependencies..."
npm uninstall lovable-tagger

echo "🔄 Updating project configurations..."
find . -type f -exec sed -i 's/lovableproject\.com/replit\.app/g' {} +
find . -type f -exec sed -i 's/entropy-assets/entropy-assets/g' {} +

echo "🔥 Removing old Git history..."
rm -rf .git

echo "📦 Creating fresh Git repository..."
git init
git branch -M main

echo "🎯 Making initial commit..."
git add .
git commit -m "Initial commit for EntropyUX: Migration from Lovable.dev"

echo "🔗 Setting up GitHub remote..."
git remote add origin "https://github.com/Irilone/EntropyUX.git"
git push -u origin main --force

echo "✅ Migration complete!"
