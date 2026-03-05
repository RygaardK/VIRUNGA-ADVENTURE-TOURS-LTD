# Virunga Adventure Tours

Tourism website for **Virunga Adventure Tours Ltd** — Kisoro, Uganda.

Gorilla trekking, volcano hiking, golden monkey tracking, cultural tours, and more around Bwindi Impenetrable National Park, Mgahinga Gorilla National Park, and Lake Mutanda.

## Tech Stack

- React 19 + TypeScript
- Bootstrap 5 / React-Bootstrap
- Vite
- React Router (client-side routing)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site locally.

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Steps

1. **Push your code** to the `main` branch on GitHub.

2. **Enable GitHub Pages** in your repository:
   - Go to **Settings → Pages**
   - Under **Source**, select **GitHub Actions**

3. The workflow at `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

4. Your site will be available at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

### Custom Domain (optional)

If you want to use a custom domain like `virungaadventuretours.com`:

1. In **Settings → Pages**, enter your custom domain.
2. Create a `CNAME` file in the `public/` folder with your domain:
   ```
   virungaadventuretours.com
   ```
3. Set up DNS records with your domain provider:
   - **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a **CNAME record** pointing `www` to `<your-username>.github.io`
4. Enable **Enforce HTTPS** in the Pages settings.

### Deploying to a Subdirectory

If your site is deployed to `https://<user>.github.io/<repo-name>/`, update the `base` in `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/<repo-name>/',
})
```

### SPA Routing

GitHub Pages doesn't natively support single-page app routing. This project includes a `404.html` redirect trick so that routes like `/experiences/gorilla-trekking` work correctly.

## Project Structure

```
src/
  components/   — Reusable UI components
  data/         — Static tourism data (experiences, accommodation, transport, packages)
  pages/        — Route-level page components
public/
  images/       — Static images
  404.html      — SPA routing fallback for GitHub Pages
```

## License

© Virunga Adventure Tours Ltd. All rights reserved.
