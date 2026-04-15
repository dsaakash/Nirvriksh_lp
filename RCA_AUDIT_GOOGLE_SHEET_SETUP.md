# RCA Audit - Google Sheet Integration

## ✅ What's Configured

The RCA Audit page (`/rca`) now saves all audit results directly to your Google Sheet via Sheety API.

---

## 📊 Google Sheet Structure for RCA Audit

Your Google Sheet needs these column headers in Row 1:

```
storeName | mobile | storeCount | problem1 | problem2 | stage | timestamp | source
```

### Column Details:

| Column | Description | Example |
|--------|-------------|---------|
| **storeName** | Store name/brand | "Trendy Wear" |
| **mobile** | Contact number | "9876543210" |
| **storeCount** | Number of stores | "Just 1" or "2-5 Stores" or "5+ Stores" |
| **problem1** | Biggest daily headache | "Inventory Mismatch / Dead Stock" |
| **problem2** | Manual error issues | "Yes, constantly" |
| **stage** | Lead stage | "rca-audit-completed" |
| **timestamp** | Submission time (IST) | "15/04/2026, 08:30:45 PM" |
| **source** | Traffic source | "RCA Audit Page" |

---

## 🔄 Data Flow

### User Journey:
1. User visits `/rca` page
2. Answers 3 questions:
   - Q1: How many stores? → `storeCount`
   - Q2: Biggest daily headache? → `problem1`
   - Q3: Losing money to manual errors? → `problem2`
3. Enters contact details:
   - Store Name → `storeName`
   - Mobile Number → `mobile`
4. Clicks "Show Audit Results & Book Call"
5. Data saved to Google Sheet instantly

### Example Submission:
```json
{
  "sheet1": {
    "storeName": "Fashion Hub",
    "mobile": "9353083597",
    "storeCount": "2-5 Stores",
    "problem1": "Inventory Mismatch / Dead Stock",
    "problem2": "Yes, constantly",
    "stage": "rca-audit-completed",
    "timestamp": "15/04/2026, 08:30:45 PM",
    "source": "RCA Audit Page"
  }
}
```

---

## 🎯 Sheety API Configuration

**API Endpoint:**
```
https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1
```

**Method:** POST
**Headers:** Content-Type: application/json
**Authentication:** None (add Bearer token if needed)

---

## 🧪 Testing

### Test the RCA Audit Flow:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Visit:** `http://localhost:5173/rca`

3. **Complete audit:**
   - Click "Start Retail Audit Now"
   - Answer Q1: Select "2-5 Stores"
   - Answer Q2: Select "Inventory Mismatch / Dead Stock"
   - Answer Q3: Select "Yes, constantly"
   - Enter Store Name: "Test Store"
   - Enter Mobile: "9876543210"
   - Click "Show Audit Results & Book Call"

4. **Verify:**
   - Check your Google Sheet
   - New row should appear with all 8 columns filled
   - Timestamp should be in IST format

---

## 📊 Google Sheet Setup

### Step 1: Create/Update Sheet

1. Open your Google Sheet: `leadsSheet`
2. Make sure you have a tab named `sheet1`
3. Add these column headers in Row 1:
   ```
   storeName | mobile | storeCount | problem1 | problem2 | stage | timestamp | source
   ```

### Step 2: Format Columns

- **mobile**: Format as Text (to preserve leading zeros)
- **timestamp**: Format as Date/Time
- All others: Plain text

### Step 3: Test Connection

Run this in browser console:
```javascript
fetch('https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    sheet1: {
      storeName: 'Test Store',
      mobile: '9876543210',
      storeCount: '2-5 Stores',
      problem1: 'Inventory Mismatch / Dead Stock',
      problem2: 'Yes, constantly',
      stage: 'rca-audit-completed',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      source: 'RCA Audit Page'
    }
  })
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
```

---

## 🎨 User Experience

### Success Flow:
1. User completes audit
2. Sees success message: "Audit Saved to CRM"
3. Shows their identified problems
4. Message: "Your dedicated Retail Control Architect expert will call you shortly"

### Error Handling:
- If API fails, shows alert with phone number
- User can still contact directly: +91 9353083597

---

## 📈 Lead Qualification

### High Priority Leads:
```
Filter: storeCount = "5+ Stores" 
AND problem1 = "Inventory Mismatch / Dead Stock"
AND problem2 = "Yes, constantly"
```

### Medium Priority Leads:
```
Filter: storeCount = "2-5 Stores"
AND (problem1 contains "Mismatch" OR problem1 contains "Pilferage")
```

### Follow-up Actions:
1. **Immediate** (within 2 hours): High priority leads
2. **Same day**: Medium priority leads
3. **Next day**: All other leads

---

## 🔒 Security (Optional)

To add authentication:

1. Go to Sheety dashboard
2. Enable Bearer Token authentication
3. Copy your token
4. Update the code:

```typescript
const response = await fetch('https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  },
  body: JSON.stringify(payload)
});
```

---

## 📊 Analytics & Tracking

### Track These Metrics:

1. **Completion Rate**
   - Started audit vs Completed audit
   - Drop-off at each question

2. **Problem Distribution**
   - Most common problem1 answers
   - Most common problem2 answers

3. **Store Size Distribution**
   - Single store vs Multi-store
   - Correlation with problems

4. **Response Time**
   - Time from submission to first call
   - Conversion rate by response time

---

## 🚀 Deployment

### Netlify Deployment:

1. **Build:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

3. **No environment variables needed!**
   - Sheety API is public (or add auth if needed)
   - No server configuration required
   - Works immediately after deployment

---

## 🆘 Troubleshooting

### Issue: Data not appearing in sheet

**Check:**
1. Column names match exactly (case-sensitive)
2. Sheet tab is named "sheet1"
3. Sheety project is published
4. Check browser console for errors

**Solution:**
```bash
# Test API directly
curl -X POST https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1 \
  -H "Content-Type: application/json" \
  -d '{"sheet1":{"storeName":"Test","mobile":"123","storeCount":"Just 1","problem1":"Test","problem2":"Test","stage":"test","timestamp":"15/04/2026","source":"Test"}}'
```

### Issue: "Failed to save data" alert

**Possible causes:**
1. Sheety API limit exceeded (200/month on free plan)
2. Network error
3. Invalid data format

**Solution:**
- Check Sheety dashboard for errors
- Verify monthly limit not exceeded
- Check browser network tab for error details

---

## 📞 Support

If users see error, they can contact directly:
- **Phone:** +91 9353083597
- **Email:** aakash@nirvriksh.com

---

## ✅ Checklist

- [x] RCA page updated to use Sheety API
- [x] Google Sheet structure documented
- [x] Error handling added
- [x] IST timestamp format
- [x] Success message configured
- [ ] Google Sheet created with correct columns
- [ ] Sheety API tested
- [ ] Test submission verified
- [ ] Deployed to production

---

## 🎉 Benefits

✅ **No Database** - Direct to Google Sheets
✅ **Real-time** - Instant data visibility
✅ **Simple** - No server setup needed
✅ **Reliable** - Google Sheets infrastructure
✅ **Accessible** - View/export data anytime
✅ **Shareable** - Share sheet with team

---

**Your RCA Audit is now connected to Google Sheets!** 🚀

Test it at: `http://localhost:5173/rca`
