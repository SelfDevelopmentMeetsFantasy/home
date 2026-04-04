# Deploying to Vercel

Follow these steps to make your website publicly available:

### 1. Prepare your Repository
- Create a new repository on [GitHub](https://github.com).
- Push all project files to the repository.

### 2. Connect to Vercel
- Log in to your [Vercel](https://vercel.com) account.
- Click **"Add New"** > **"Project"**.
- Select your GitHub repository from the list and click **"Import"**.

### 3. Build and Deploy
- Vercel will automatically detect the **Vite** configuration.
- Ensure the **Framework Preset** is set to **Vite**.
- The **Build Command** should be `npm run build`.
- The **Output Directory** should be `dist`.
- Click **"Deploy"**.

### Important Note
- The project structure uses a standard `src/` layout for optimal compatibility with Vercel and other modern hosting platforms.
