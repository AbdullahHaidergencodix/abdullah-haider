#!/bin/bash

# =============================================================================
# PUSH TO LIVE — Final deployment
# =============================================================================

set -e
DIR="$HOME/Desktop/abdullah-haider"
cd "$DIR"

echo ""
echo "  🚀 Preparing to push changes live..."
echo ""

# ══════════════════════════════════════════════════════════════════════════
# 1. Check git status
# ══════════════════════════════════════════════════════════════════════════
echo "  📊 Current git status:"
git status --short

echo ""
echo "  📝 Files changed:"
git diff --stat

# ══════════════════════════════════════════════════════════════════════════
# 2. Build test (optional but recommended)
# ══════════════════════════════════════════════════════════════════════════
echo ""
echo "  🔨 Running build test..."
npm run build

if [ $? -eq 0 ]; then
  echo "  ✅ Build successful!"
else
  echo "  ❌ Build failed! Fix errors before deploying."
  exit 1
fi

# ══════════════════════════════════════════════════════════════════════════
# 3. Git add, commit, and push
# ══════════════════════════════════════════════════════════════════════════
echo ""
echo "  📤 Committing and pushing..."

# Add all changes
git add -A

# Create a detailed commit message
git commit -m "🎨 Major Update: Premium Aurora Background + Lapak Skincare Portfolio

Changes:
- ✨ New 3-layer aurora live background with depth system
- 🎨 Premium color scheme: indigo/purple/rose/sky palette  
- 📱 Enhanced mobile aurora with 5 gradient layers
- 🔧 Fixed z-index hierarchy for proper aurora visibility
- 💎 Glass cards now semi-transparent (aurora bleeds through)
- 🖼️ Added Lapak Skincare to portfolio
- ⚡ Optimized performance with WebP images
- 🐛 Fixed background transparency issues
- 🌈 Global hue rotation for dynamic colors
- 📊 Improved alpha values for better visibility"

# Push to main branch
git push origin main

echo ""
echo " ┌─────────────────────────────────────────────────────────────────┐"
echo " │                                                                 │"
echo " │  ✅ SUCCESSFULLY PUSHED TO GITHUB                              │"
echo " │                                                                 │"
echo " │  Vercel will auto-deploy in ~45 seconds                         │"
echo " │                                                                 │"
echo " │  Check deployment status:                                       │"
echo " │  https://vercel.com/dashboard                                   │"
echo " │                                                                 │"
echo " │  Your site will be live at:                                     │"
echo " │  https://abdullah-haider.vercel.app                             │"
echo " │                                                                 │"
echo " │  Changes included:                                              │"
echo " │    • Premium aurora background (3-layer system)                 │"
echo " │    • New color scheme (indigo/purple/rose)                      │"
echo " │    • Lapak Skincare in portfolio                                │"
echo " │    • Fixed transparency & z-index issues                        │"
echo " │    • Mobile aurora enhancements                                 │"
echo " │    • Performance optimizations                                  │"
echo " │                                                                 │"
echo " └─────────────────────────────────────────────────────────────────┘"
echo ""