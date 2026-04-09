# Quick Deploy to Netlify - 5 Minutes ⚡

## Step 1: Setup Turso (2 minutes)

```bash
# Install Turso
curl -sSfL https://get.tur.so/install.sh | bash

# Login
turso auth login

# Create database
turso db create nirvriksh-leads

# Create table
turso db shell nirvriksh-leads
```

Paste this SQL:
```sql
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
```

Type `.quit` to exit.

Get your credentials:
```bash
# Get database URL
turso db show nirvriksh-leads --url

# Get auth token
turso db tokens create nirvriksh-leads
```

**Save these values!** You'll need them in Step 3.

---

## Step 2: Update Code (1 minute)

```bash
# Install dependencies
npm install

# Update API endpoints
./update-api-endpoints.sh
```

---

## Step 3: Deploy to Netlify (2 minutes)

### Option A: Via Netlify Dashboard (Easiest)

1. Push your code to GitHub
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Add environment variables":
   ```
   TURSO_DATABASE_URL = libsql://your-database.turso.io
   TURSO_AUTH_TOKEN = your-token-here
   JWT_SECRET = super-secret-nirvriksh-key
   ADMIN_EMAIL = admin@nirvriksh.com
   ADMIN_PASSWORD = Aakash@9353
   ```
7. Click "Deploy site"

### Option B: Via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init

# Set environment variables
netlify env:set TURSO_DATABASE_URL "your-url"
netlify env:set TURSO_AUTH_TOKEN "your-token"
netlify env:set JWT_SECRET "super-secret-key"
netlify env:set ADMIN_EMAIL "admin@nirvriksh.com"
netlify env:set ADMIN_PASSWORD "Aakash@9353"

# Deploy
netlify deploy --prod
```

---

## Done! 🎉

Your site is live at: `https://your-site.netlify.app`

**Access:**
- Homepage: `https://your-site.netlify.app`
- VSL Page: `https://your-site.netlify.app/saas/rca/vsl`
- Admin: `https://your-site.netlify.app/admin`

**Admin Login:**
- Email: `admin@nirvriksh.com`
- Password: `Aakash@9353`

---

## Test It

1. Visit your VSL page
2. Click "Book Free Audit"
3. Fill the form
4. Check admin dashboard to see the lead

---

## View Database

```bash
# View all leads
turso db shell nirvriksh-leads
SELECT * FROM leads;
.quit
```

Or use Turso dashboard: https://turso.tech/app

---

## Troubleshooting

**Functions not working?**
- Check Netlify function logs
- Verify environment variables are set
- Wait 1-2 minutes after deployment

**Can't login to admin?**
- Check ADMIN_EMAIL and ADMIN_PASSWORD env vars
- Clear browser cache
- Check browser console for errors

**Database errors?**
- Verify TURSO_DATABASE_URL and TURSO_AUTH_TOKEN
- Check if table exists: `turso db shell nirvriksh-leads`
- Run the CREATE TABLE SQL again

---

## Cost: $0/month

- Netlify Free: 100GB bandwidth, 300 build minutes
- Turso Free: 500 databases, 1GB storage, 1B row reads

Perfect for small to medium traffic! 🚀
