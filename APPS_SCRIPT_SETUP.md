# 🚀 Google Apps Script Setup (10 Minutes)

## Step 1: Create Google Sheet

1. Go to https://sheets.google.com
2. Create new sheet: "Nirvriksh Leads"
3. Add these headers in Row 1:

```
revenue | stockMatch | manualRegister | reconciliationTime | staffDependency | name | storeName | mobile | email | interested | stage | timestamp
```

---

## Step 2: Open Apps Script

1. In your Google Sheet, click: **Extensions → Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the data
    sheet.appendRow([
      data.revenue || '',
      data.stockMatch || '',
      data.manualRegister || '',
      data.reconciliationTime || '',
      data.staffDependency || '',
      data.name || '',
      data.storeName || '',
      data.mobile || '',
      data.email || '',
      data.interested || '',
      data.stage || '',
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'API is working!' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (💾 icon)
5. Name it: "Nirvriksh Lead Capture"

---

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Fill in:
   - **Description:** "Lead capture API"
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Nirvriksh Lead Capture (unsafe)**
9. Click **Allow**
10. **Copy the Web App URL** - it looks like:
    ```
    https://script.google.com/macros/s/LONG_ID_HERE/exec
    ```

---

## Step 4: Update Your React Code

Replace the SheetDB URL with your Apps Script URL:

```typescript
// In src/components/BookingModal.tsx
// Find this line:
const response = await fetch('https://sheetdb.io/api/v1/vxa04y3eo2icm', {

// Replace with:
const response = await fetch('YOUR_APPS_SCRIPT_URL_HERE', {
```

---

## Step 5: Test It

```bash
npm run dev
```

1. Visit: `http://localhost:5173/saas/rca/vsl`
2. Click "Take Free Stock Audit"
3. Complete all 4 steps
4. Click "Yes, Book Call"
5. Check your Google Sheet - new row should appear!

---

## 🧪 Test the API Directly

```bash
curl -X POST YOUR_APPS_SCRIPT_URL \
  -H "Content-Type: application/json" \
  -d '{
    "revenue": "₹50L – ₹80L",
    "stockMatch": "Noticeable gap (5–10%)",
    "manualRegister": "Yes, some manual backup",
    "reconciliationTime": "1–2 hours",
    "staffDependency": "Some disruption, but manageable",
    "name": "Test User",
    "storeName": "Test Store",
    "mobile": "9876543210",
    "email": "test@example.com",
    "interested": "Yes",
    "stage": "completed",
    "timestamp": "09/04/2026, 8:30 PM"
  }'
```

Expected response:
```json
{"success":true,"message":"Data saved successfully"}
```

---

## ✅ Advantages

- ✅ **100% Free** - No limits ever
- ✅ **Reliable** - Google infrastructure
- ✅ **Fast** - Direct to Google Sheets
- ✅ **Secure** - Your own script
- ✅ **No API keys** - No authentication needed
- ✅ **Works on Netlify** - No configuration

---

## 🔧 Troubleshooting

### **Issue: "Authorization required"**
**Solution:** Make sure "Who has access" is set to "Anyone"

### **Issue: "Script not found"**
**Solution:** Make sure you deployed the script (not just saved)

### **Issue: "Data not appearing in sheet"**
**Solution:** 
- Check if headers match exactly
- Check Apps Script logs: View → Logs

### **Issue: "CORS error"**
**Solution:** Apps Script handles CORS automatically, no action needed

---

## 📊 View Your Data

1. Open your Google Sheet
2. All submissions appear as new rows
3. Real-time updates!

---

## 🎯 Summary

1. ✅ Create Google Sheet with headers
2. ✅ Add Apps Script code
3. ✅ Deploy as web app
4. ✅ Copy URL
5. ✅ Update React code
6. ✅ Test and deploy!

**Total time: 10 minutes** ⏱️

---

## 🚀 Ready to Update?

Just give me your Apps Script URL and I'll update the code for you!
