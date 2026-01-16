#!/bin/bash

# ColorQRCode Tools - Deployment Script
# This script helps you deploy your project to Vercel

echo "🚀 ColorQRCode Tools - Deployment Guide"
echo "========================================"
echo ""

# Step 1: Check if we're on the right branch
echo "📋 Step 1: Preparing Git Repository"
echo "Current branch: $(git branch --show-current)"
echo ""

# Step 2: Instructions for GitHub
echo "📦 Step 2: Push to GitHub"
echo ""
echo "Please follow these steps:"
echo ""
echo "1. Create a new GitHub repository:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: colorqrcode-tools"
echo "   - Don't initialize with README"
echo "   - Click 'Create repository'"
echo ""
echo "2. Add your GitHub username below, then run:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/colorqrcode-tools.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
read -p "Have you pushed to GitHub? (y/n): " pushed

if [ "$pushed" = "y" ]; then
    echo ""
    echo "✅ Great! Now let's deploy to Vercel."
    echo ""
    echo "🌐 Step 3: Deploy to Vercel"
    echo ""
    echo "Choose one of these options:"
    echo ""
    echo "Option A: Deploy via Vercel Website (Recommended - Easiest)"
    echo "  1. Go to https://vercel.com/new"
    echo "  2. Import your GitHub repository"
    echo "  3. Click 'Deploy'"
    echo "  4. Wait 2-3 minutes"
    echo "  5. Your site will be live!"
    echo ""
    echo "Option B: Deploy via Vercel CLI (Requires login)"
    echo "  Run: vercel"
    echo "  Follow the prompts to login and deploy"
    echo ""
    echo "✨ After deployment:"
    echo "  - Your site will be at: https://colorqrcode-tools.vercel.app"
    echo "  - You can add a custom domain in Vercel settings"
    echo "  - Don't forget to submit sitemap to Google Search Console!"
    echo ""
fi

echo "📚 For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "🎉 Good luck with your deployment!"
