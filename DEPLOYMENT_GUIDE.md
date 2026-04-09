# Netlify Deployment Guide with Turso (Serverless SQLite)

## Why Turso?
- **SQLite-compatible** - Same SQL syntax you're using
- **Serverless** - Works with Netlify Functions
- **Free tier** - 500 databases, 1GB storage
- **Fast** - Edge-hosted database

---

## Step 1: Setup Turso Database

### Install Turso CLI
```bash
# macOS
brew install tursodatabase/tap/turso

# Or using curl
curl -sSfL https://get.tur.so/install.sh | bash
```

### Create Database
```bash
# Login to Turso
turso auth login

# Create database
turso db create nirvriksh-leads

# Get database URL
turso db show nirvriksh-leads --url

# Create auth token
turso db tokens create nirvriksh-leads
```

### Create Table
```bash
# Connect to database
turso db shell nirvriksh-leads

# Run this SQL
CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  mobile TEXT,
  storeName TEXT,
  problems TEXT,
  stage TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

# Exit
.quit
```

---

## Step 2: Install Dependencies

```bash
npm install @libsql/client jsonwebtoken
```

---

## Step 3: Update API Calls in Frontend

Update `src/components/BookingModal.tsx`:

```typescript
// Change from:
const response = await fetch('http://localhost:3001/api/leads', {

// To:
const response = await fetch('/.netlify/functions/leads', {
```

Update `src/pages/AdminDashboard.tsx`:

```typescript
// Change API endpoints from:
'http://localhost:3001/api/login'
'http://localhost:3001/api/leads'

// To:
'/.netlify/functions/login'
'/.netlify/functions/leads'
```

---

## Step 4: Deploy to Netlify

### Option A: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Set environment variables
netlify env:set TURSO_DATABASE_URL "your-database-url"
netlify env:set TURSO_AUTH_TOKEN "your-auth-token"
netlify env:set JWT_SECRET "your-secret-key"
netlify env:set ADMIN_EMAIL "admin@nirvriksh.com"
netlify env:set ADMIN_PASSWORD "Aakash@9353"

# Deploy
netlify deploy --prod
```

### Option B: Deploy via GitHub

1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Add environment variables in Site settings → Environment variables:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
6. Deploy!

---

## Step 5: Update Environment Variables

Create `.env` file for local development:

```env
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-token-here
JWT_SECRET=super-secret-nirvriksh-key
ADMIN_EMAIL=admin@nirvriksh.com
ADMIN_PASSWORD=Aakash@9353
```

Add to `.gitignore`:
```
.env
```

---

## Alternative: Use Supabase (PostgreSQL)

If you prefer PostgreSQL over SQLite:

1. Go to [Supabase](https://supabase.com)
2. Create new project
3. Create table via SQL Editor:

```sql
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  mobile TEXT,
  store_name TEXT,
  problems JSONB,
  stage TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. Use Supabase client in Netlify Functions
5. Get API URL and anon key from project settings

---

## Files Created

- `netlify/functions/leads.js` - Handle lead submissions and retrieval
- `netlify/functions/login.js` - Admin authentication
- `netlify.toml` - Netlify configuration
- `DEPLOYMENT_GUIDE.md` - This guide

---

## Testing Locally

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run with Netlify Dev (simulates serverless functions)
netlify dev
```

---

## After Deployment

Your site will be available at:
- **Frontend:** `https://your-site.netlify.app`
- **Admin:** `https://your-site.netlify.app/admin`
- **API:** `https://your-site.netlify.app/.netlify/functions/leads`

---

## Troubleshooting

### Functions not working?
- Check Netlify function logs in dashboard
- Verify environment variables are set
- Check CORS headers

### Database connection issues?
- Verify Turso URL and token
- Check if table exists: `turso db shell nirvriksh-leads`
- Test connection locally first

### Build fails?
- Check build logs in Netlify dashboard
- Verify all dependencies in package.json
- Test build locally: `npm run build`

---

## Cost

- **Netlify:** Free tier (100GB bandwidth, 300 build minutes)
- **Turso:** Free tier (500 databases, 1GB storage, 1B row reads)
- **Total:** $0/month for small to medium traffic

---

## Next Steps

1. Setup Turso database
2. Update API endpoints in frontend
3. Deploy to Netlify
4. Test admin dashboard
5. Monitor leads in Turso dashboard or admin panel
