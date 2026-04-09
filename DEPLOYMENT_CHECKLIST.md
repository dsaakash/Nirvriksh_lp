# Netlify Deployment Checklist ✅

## Pre-Deployment

- [ ] Read **QUICK_DEPLOY.md**
- [ ] Install Turso CLI
- [ ] Create Turso account

## Database Setup

- [ ] Create Turso database: `turso db create nirvriksh-leads`
- [ ] Create leads table (SQL in QUICK_DEPLOY.md)
- [ ] Get database URL: `turso db show nirvriksh-leads --url`
- [ ] Create auth token: `turso db tokens create nirvriksh-leads`
- [ ] Save both values securely

## Code Updates

- [ ] Run `npm install`
- [ ] Run `./update-api-endpoints.sh`
- [ ] Test locally with `npm run dev`
- [ ] Commit changes to git
- [ ] Push to GitHub

## Netlify Setup

- [ ] Create Netlify account (if needed)
- [ ] Connect GitHub repository
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Add environment variables:
  - [ ] TURSO_DATABASE_URL
  - [ ] TURSO_AUTH_TOKEN
  - [ ] JWT_SECRET
  - [ ] ADMIN_EMAIL
  - [ ] ADMIN_PASSWORD
- [ ] Deploy site

## Post-Deployment Testing

- [ ] Visit homepage - loads correctly
- [ ] Visit `/saas/rca/vsl` - VSL page works
- [ ] Click "Book Free Audit" - modal opens
- [ ] Fill and submit form - success message shows
- [ ] Check Turso database - lead is saved
- [ ] Visit `/admin` - admin page loads
- [ ] Login with credentials - dashboard shows
- [ ] View leads in admin - submitted lead appears

## Optional

- [ ] Setup custom domain in Netlify
- [ ] Enable form notifications
- [ ] Setup Netlify Analytics
- [ ] Configure deploy previews

## Troubleshooting

If something doesn't work:

1. **Check Netlify function logs**
   - Go to Netlify dashboard
   - Click on your site
   - Go to "Functions" tab
   - Check logs for errors

2. **Verify environment variables**
   - Site settings → Environment variables
   - Make sure all 5 variables are set
   - No extra spaces or quotes

3. **Test database connection**
   ```bash
   turso db shell nirvriksh-leads
   SELECT * FROM leads;
   ```

4. **Check browser console**
   - Open DevTools (F12)
   - Look for API errors
   - Check Network tab

5. **Redeploy**
   - Sometimes a fresh deploy fixes issues
   - Deploys → Trigger deploy → Deploy site

## Success Criteria

✅ Site is live and accessible
✅ Booking form works
✅ Leads are saved to database
✅ Admin dashboard shows leads
✅ No console errors

## Next Steps After Deployment

1. Share your live URL
2. Test on mobile devices
3. Monitor leads in admin dashboard
4. Setup email notifications (optional)
5. Add Google Analytics (optional)

---

**Estimated Time:** 10-15 minutes
**Cost:** $0/month
**Difficulty:** Easy

Good luck! 🚀
