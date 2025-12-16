# WiseGave AI

AI-powered business intelligence and insights platform.

## Environment Setup

This project uses environment variables to manage credentials and configuration securely.

### Required Environment Variables

For Google Sheets integration:

**Option A: API Key (Recommended - simpler)**
```bash
GOOGLE_SHEETS_SPREADSHEET_ID=your_google_sheet_id
GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
```

**Option B: Service Account (More secure)**
```bash
GOOGLE_SHEETS_SPREADSHEET_ID=your_google_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
your_private_key_content_here
-----END PRIVATE KEY-----
```

### Local Development

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your environment variables in `.env.local`

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

### Production Deployment (Cloudflare Pages)

#### Step 1: Set Environment Variables

Set your secrets using wrangler CLI (recommended):

```bash
# For Service Account Authentication
npx wrangler pages secret put GOOGLE_SHEETS_SPREADSHEET_ID
npx wrangler pages secret put GOOGLE_SERVICE_ACCOUNT_EMAIL
npx wrangler pages secret put GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

# OR for API Key Authentication
npx wrangler pages secret put GOOGLE_SHEETS_SPREADSHEET_ID
npx wrangler pages secret put GOOGLE_SHEETS_API_KEY
```

Or via Cloudflare Dashboard:
1. Go to Pages → Your Site → Settings → Environment Variables
2. Add your production secrets

#### Step 2: Authenticate with Cloudflare

First time setup - authenticate with Cloudflare:

```bash
# Login to Cloudflare
npx wrangler login

# Verify authentication
npx wrangler whoami
```

#### Step 3: Deploy to Cloudflare Pages

```bash
# Deploy to production
npm run pages:deploy

# Deploy to preview environment
npm run pages:preview

# Or deploy manually with specific project name
npx wrangler pages deploy .vercel/output/static --project-name wisegave-ai
```

The deployment process automatically:
1. Builds the Next.js application
2. Optimizes for Cloudflare Pages Edge Runtime
3. Deploys static assets and functions to `.vercel/output/static`
4. Configures routes and edge functions
5. Uploads all necessary assets to Cloudflare Pages

#### Troubleshooting Deployment

If you get static assets errors:
1. Ensure you've run `npm run pages:build` first
2. Check that `.vercel/output/static` directory exists
3. Verify your `wrangler.toml` configuration
4. Make sure you're authenticated with `npx wrangler login`

### Google Sheets Setup

**For API Key approach:**
1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create an API key
4. Share your Google Sheet with "Anyone with the link"
5. Add the API key to your environment variables

**For Service Account approach:**
1. Create a service account in Google Cloud
2. Download the service account key JSON file
3. Extract the email and private key
4. Share your Google Sheet with the service account email
5. Add the credentials to your environment variables

### Build Commands

```bash
# Development build
npm run build

# Production build for Cloudflare Pages
npm run pages:build

# Start production server
npm start

# Lint code
npm run lint
```

### Project Structure

- `src/app/` - Next.js app router pages
- `src/lib/` - Utility libraries and integrations
- `src/components/` - Reusable React components
- `public/` - Static assets

### Security Notes

- Never commit `.env.local` or credentials files to version control
- Use environment variables for all sensitive data
- The `.credentials/` directory is automatically ignored by git
- Use Cloudflare Pages secrets for production environment variables