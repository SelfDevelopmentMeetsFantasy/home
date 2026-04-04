# Deploying to GitHub Pages

Follow these steps to make your website publicly available on GitHub:

### 1. Export to GitHub
- Click on the **Settings** (gear icon) in the top-right corner of the AI Studio interface.
- Select **Export to GitHub**.
- Follow the prompts to connect your GitHub account and create a new repository for this project.

### 2. Enable GitHub Pages
- In your GitHub repository, go to **Settings** > **Pages**.
- Under **Build and deployment**, set the **Source** to "GitHub Actions".
- The included `.github/workflows/deploy.yml` will automatically build and deploy your site whenever you push to the `main` branch.

### 3. Custom Domain (Optional)
- If you have a custom domain, add it in the GitHub Pages settings.
- Ensure your `vite.config.ts` has `base: '/'` for custom domains.

---

# Deploying to Vercel (Alternative)
... (rest of the file)
