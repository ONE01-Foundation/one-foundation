# ONE01 Foundation

Public website for ONE01 Foundation — the standards and governance layer for the ONE01 ecosystem.

## Structure

- `/` - Home page
- `/foundation` - Mission and principles
- `/dashboard` - Public transparency dashboard
- `/docs` - Documentation and governance
- `/contact` - Contact information

## Development

```bash
npm install
npm run dev
```

## Production Deployment

This project is configured to deploy to Vercel from the `main` branch.

### Deployment Process

1. Ensure all changes are committed and pushed to `main`:
   ```bash
   git checkout main
   git pull origin main
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Vercel will automatically trigger a production deployment when changes are pushed to `main`.

3. Verify deployment in Vercel dashboard:
   - Check that Production deployment is triggered
   - Verify domain assignment
   - Confirm build succeeds

### Vercel Configuration

- **Production Branch**: `main`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

If Vercel is not configured to deploy from `main`, update the production branch setting in the Vercel project settings.
