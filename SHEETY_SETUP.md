# 🚀 Sheety API Setup - Complete Guide

## ✅ What is Sheety?

Sheety turns your Google Sheet into a REST API instantly. It's:
- ✅ **Free** - Up to 200 requests/month on free plan
- ✅ **Simple** - No coding required
- ✅ **Reliable** - Direct Google Sheets integration
- ✅ **Fast** - Real-time updates

---

## 📊 Your Current Setup

**Sheety API Endpoint:**
```
https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1
```

**Google Sheet Name:** `leadsSheet`
**Sheet Tab Name:** `sheet1`

---

## 🔧 Google Sheet Structure

Your Google Sheet should have these column headers in Row 1:

| Column | Description |
|--------|-------------|
| revenue | Annual revenue range |
| stockMatch | Stock accuracy level |
| manualRegister | Manual register usage |
| reconciliationTime | Daily reconciliation time |
| staffDependency | Staff dependency level |
| name | Owner name |
| storeName | Store name |
| mobile | Mobile number |
| email | Email address |
| interested | Booking interest (Yes/No) |
| stage | Completion stage |
| timestamp | Submission timestamp |

**Important:** Column names must match exactly (case-sensitive)!

---

## 📝 How Sheety Works

### Request Format:
```json
{
  "sheet1": {
    "revenue": "₹50L – ₹80L",
    "stockMatch": "Noticeable gap (5–10%)",
    "manualRegister": "Yes, some manual backup",
    "reconciliationTime": "1–2 hours",
    "staffDependency": "Some disruption, but manageable",
    "name": "Rajesh Kumar",
    "storeName": "Kumar Garments",
    "mobile": "9876543210",
    "email": "rajesh@example.com",
    "interested": "Yes",
    "stage": "completed",
    "timestamp": "11/04/2026, 8:30 PM"
  }
}
```

### Response Format:
```json
{
  "sheet1": {
    "revenue": "₹50L – ₹80L",
    "stockMatch": "Noticeable gap (5–10%)",
    // ... all other fields
    "id": 2
  }
}
```

---

## 🧪 Test Your API

### Using cURL:
```bash
curl -X POST https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1 \
  -H "Content-Type: application/json" \
  -d '{
    "sheet1": {
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
      "timestamp": "11/04/2026, 8:30 PM"
    }
  }'
```

### Using Browser Console:
```javascript
fetch('https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    sheet1: {
      revenue: '₹50L – ₹80L',
      stockMatch: 'Noticeable gap (5–10%)',
      manualRegister: 'Yes, some manual backup',
      reconciliationTime: '1–2 hours',
      staffDependency: 'Some disruption, but manageable',
      name: 'Test User',
      storeName: 'Test Store',
      mobile: '9876543210',
      email: 'test@example.com',
      interested: 'Yes',
      stage: 'completed',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    }
  })
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
```

---

## 🔒 Security (Optional)

If you want to add authentication:

1. Go to Sheety dashboard
2. Click on your project
3. Enable "Bearer Token" authentication
4. Copy the token
5. Update your React code:

```typescript
const response = await fetch('YOUR_SHEETY_URL', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  },
  body: JSON.stringify({ sheet1: { ... } })
});
```

---

## 📈 Sheety Limits

**Free Plan:**
- ✅ 200 requests/month
- ✅ Unlimited sheets
- ✅ Real-time updates

**Paid Plans:**
- $10/month - 10,000 requests
- $49/month - 100,000 requests

For a small business, 200 requests/month should be enough initially.

---

## ✅ Current Implementation

Your `BookingModal.tsx` is now configured to:
1. Collect data in 4 steps
2. Send ALL data in ONE API call at Step 4
3. Save to Google Sheet via Sheety
4. Show Calendly if user is interested

---

## 🧪 Testing Steps

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Visit:** `http://localhost:5173/saas/rca/vsl`

3. **Test flow:**
   - Click "Take Free Stock Audit"
   - Complete Step 1 (5 questions)
   - Complete Step 2 (contact info)
   - View Step 3 (case study)
   - Click Step 4: "Yes, Book Call"

4. **Verify:**
   - Check your Google Sheet for new row
   - All 12 columns should be filled
   - Timestamp should be in IST

---

## 🆘 Troubleshooting

### Error: "Failed to save data"
**Possible causes:**
1. Column names don't match exactly
2. Sheet tab name is not "sheet1"
3. Sheety project is not published
4. Monthly limit exceeded

**Solution:**
- Check Google Sheet column headers (case-sensitive)
- Verify sheet tab name is "sheet1"
- Check Sheety dashboard for errors

### Error: "CORS policy"
**Solution:** Sheety handles CORS automatically, no action needed

### Data not appearing in sheet
**Solution:**
- Check if row was added (might be at bottom)
- Verify all column names match
- Check browser console for errors

---

## 🎯 Advantages of Sheety

✅ **vs SheetDB:** More reliable, better error handling
✅ **vs Apps Script:** No deployment issues, no CORS problems
✅ **vs Airtable:** Simpler, uses Google Sheets directly
✅ **vs Firebase:** No setup required, instant API

---

## 📚 Resources

- Sheety Dashboard: https://sheety.co/
- Sheety Docs: https://sheety.co/docs
- Your API: https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1

---

**Ready to test!** 🚀
