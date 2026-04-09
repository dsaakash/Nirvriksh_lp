# SheetDB Integration - Google Sheets as Database

## ✅ What Changed

Your booking form now sends data directly to **Google Sheets** via SheetDB API instead of SQLite database.

**Benefits:**
- ✅ No database setup needed
- ✅ View data in Google Sheets instantly
- ✅ Easy to export and share
- ✅ Works on Netlify without any configuration
- ✅ No server needed!

---

## 📊 Your SheetDB API

**Endpoint:** `https://sheetdb.io/api/v1/vxa04y3eo2icm`

This endpoint is already configured in your booking form.

---

## 📋 Data Structure

Each form submission creates a new row with:

| Column | Description | Example |
|--------|-------------|---------|
| name | User's full name | "Aakash Kumar" |
| email | Email address | "aakash@example.com" |
| mobile | Phone number | "9353083597" |
| storeName | Store name | "Fashion Hub" |
| problem | Main problem description | "Stock mismatch issues" |
| stage | Lead stage | "audit-booking" |
| timestamp | Submission time (IST) | "09/04/2026, 8:30:00 PM" |

---

## 🔗 Access Your Google Sheet

1. Go to your SheetDB dashboard: https://sheetdb.io/
2. Login with your account
3. Find your sheet: `vxa04y3eo2icm`
4. Click "View Sheet" to open in Google Sheets

Or directly access your Google Sheet if you have the link.

---

## 🧪 Test the Integration

### Test via Form
1. Visit: `http://localhost:5173/saas/rca/vsl`
2. Click "Book Free Audit"
3. Fill the form
4. Submit
5. Check your Google Sheet - new row should appear!

### Test via API (Optional)
```bash
curl -X POST https://sheetdb.io/api/v1/vxa04y3eo2icm \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "name": "Test User",
      "email": "test@example.com",
      "mobile": "1234567890",
      "storeName": "Test Store",
      "problem": "Testing the API",
      "stage": "audit-booking",
      "timestamp": "09/04/2026, 8:00:00 PM"
    }
  }'
```

---

## 🚀 Deploy to Netlify

Now deployment is **super simple**:

```bash
# 1. Build your app
npm run build

# 2. Deploy to Netlify
# Just push to GitHub and connect to Netlify
# OR use Netlify CLI:
netlify deploy --prod
```

**No environment variables needed!**
**No database setup needed!**
**No server configuration needed!**

---

## 📱 After Deployment

Your live site will work immediately:
- Form submissions → Google Sheets
- No additional setup required
- View all leads in your Google Sheet

---

## 🔒 Security (Optional)

If you want to protect your SheetDB API:

1. Go to SheetDB dashboard
2. Enable authentication
3. Get your API key
4. Update the code to include auth header:

```typescript
const response = await fetch('https://sheetdb.io/api/v1/vxa04y3eo2icm', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({ data: { ... } })
});
```

---

## 📊 View Your Data

**Option 1: Google Sheets**
- Open your connected Google Sheet
- All submissions appear as rows
- Sort, filter, export as needed

**Option 2: SheetDB Dashboard**
- Login to https://sheetdb.io/
- View your sheet
- See API usage stats

---

## 💡 Tips

1. **Column Names:** Make sure your Google Sheet has these column headers:
   - name
   - email
   - mobile
   - storeName
   - problem
   - stage
   - timestamp

2. **Formatting:** You can format columns in Google Sheets:
   - Format mobile as text (to preserve leading zeros)
   - Format timestamp as date/time
   - Add conditional formatting for stages

3. **Notifications:** Set up Google Sheets notifications:
   - Tools → Notification rules
   - Get email when form is submitted

4. **Backup:** Google Sheets auto-saves, but you can:
   - File → Download → Excel/CSV for backup
   - File → Version history to see changes

---

## 🎉 Benefits Over SQLite

| Feature | SQLite | SheetDB + Google Sheets |
|---------|--------|------------------------|
| Setup | Complex | Simple |
| Deployment | Needs server | Works anywhere |
| View Data | Need admin panel | Open Google Sheets |
| Export | Need code | Built-in export |
| Share | Need to build feature | Share Google Sheet |
| Backup | Manual | Automatic |
| Cost | Server costs | Free tier available |

---

## 📈 SheetDB Free Tier

- **10,000 requests/month** - More than enough for most sites
- **Unlimited sheets**
- **Unlimited rows**

Perfect for your use case! 🚀

---

## ✅ You're Done!

Your booking form now saves directly to Google Sheets. No database, no server, no complexity!

Just deploy to Netlify and you're live! 🎉
