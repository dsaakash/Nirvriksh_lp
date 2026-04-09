# Deploy to Netlify - 2 Minutes! 🚀

## ✅ Ready to Deploy

Your app is now configured to use **Google Sheets** (via SheetDB) instead of a database. This makes deployment super simple!

---

## 🎯 Quick Deploy

### Option 1: GitHub + Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Done!** Your site is live in 2-3 minutes! 🎉

---

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init
netlify deploy --prod
```

---

### Option 3: Drag & Drop

```bash
# Build locally
npm run build

# Go to https://app.netlify.com/drop
# Drag the 'dist' folder
# Done!
```

---

## 🌐 Your Live URLs

After deployment:
- **Homepage:** `https://your-site.netlify.app`
- **VSL Page:** `https://your-site.netlify.app/saas/rca/vsl`
- **Admin:** `https://your-site.netlify.app/admin` (optional, if you keep it)

---

## 📊 View Form Submissions

All form submissions go to your **Google Sheet**:
- Open your SheetDB dashboard: https://sheetdb.io/
- Or open your Google Sheet directly
- New submissions appear as new rows instantly!

---

## ✅ No Configuration Needed

- ❌ No environment variables
- ❌ No database setup
- ❌ No server configuration
- ❌ No API keys
- ✅ Just deploy and it works!

---

## 🧪 Test After Deployment

1. Visit your live VSL page
2. Click "Book Free Audit"
3. Fill the form
4. Submit
5. Check your Google Sheet - new row appears!

---

## 💰 Cost

**$0/month**

- Netlify Free: 100GB bandwidth, 300 build minutes
- SheetDB Free: 10,000 requests/month
- Google Sheets: Free

---

## 🔧 Optional: Custom Domain

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Netlify: Site settings → Domain management
3. Add custom domain
4. Update DNS records
5. Done! Your site on your domain

---

## 📱 What Works

✅ Booking form → Google Sheets
✅ Calendly integration
✅ Responsive design
✅ Fast loading (CDN)
✅ HTTPS by default
✅ Auto-deploys on git push

---

## 🎉 You're Live!

That's it! Your site is now live and collecting leads in Google Sheets.

**Next Steps:**
1. Share your live URL
2. Test the booking flow
3. Check Google Sheets for submissions
4. Set up Google Sheets notifications (optional)

---

## 📞 Support

If you need help:
- Netlify Docs: https://docs.netlify.com
- SheetDB Docs: https://docs.sheetdb.io
- Check browser console for errors

---

**Ready? Let's deploy!** 🚀

```bash
git add .
git commit -m "Ready for production"
git push origin main
```

Then connect to Netlify and you're done!
