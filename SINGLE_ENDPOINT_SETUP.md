# ✅ Single SheetDB Endpoint Setup

## 📊 Google Sheet Headers (Row 1)

Copy and paste these **12 column names** in Row 1 of your Google Sheet:

```
revenue	stockMatch	manualRegister	reconciliationTime	staffDependency	name	storeName	mobile	email	interested	stage	timestamp
```

---

## 📋 What Each Column Contains

| Column | From Step | Example Value |
|--------|-----------|---------------|
| revenue | Step 1 | "₹50L – ₹80L" |
| stockMatch | Step 1 | "Noticeable gap (5–10%)" |
| manualRegister | Step 1 | "Yes, some manual backup" |
| reconciliationTime | Step 1 | "1–2 hours" |
| staffDependency | Step 1 | "Some disruption, but manageable" |
| name | Step 2 | "Aakash Kumar" |
| storeName | Step 2 | "Fashion Hub" |
| mobile | Step 2 | "9353083597" |
| email | Step 2 | "aakash@example.com" |
| interested | Step 4 | "Yes" or "No" |
| stage | Auto | "completed" |
| timestamp | Auto | "09/04/2026, 8:30:00 PM" |

---

## 🔄 How It Works Now

### **Before (3 API calls):**
- Step 1 → Save questions
- Step 2 → Save contact info
- Step 4 → Save interest

### **Now (1 API call):**
- Steps 1-3 → Just collect data (no save)
- Step 4 → Save ALL data at once in ONE row

---

## 📝 Example Data Row

| revenue | stockMatch | manualRegister | reconciliationTime | staffDependency | name | storeName | mobile | email | interested | stage | timestamp |
|---------|------------|----------------|-------------------|-----------------|------|-----------|--------|-------|------------|-------|-----------|
| ₹50L – ₹80L | Noticeable gap (5–10%) | Yes, some manual backup | 1–2 hours | Some disruption, but manageable | Aakash Kumar | Fashion Hub | 9353083597 | aakash@example.com | Yes | completed | 09/04/2026, 8:30 PM |

---

## ✅ Benefits

1. **One Row Per Lead** - All data in one place
2. **One API Call** - Faster, more reliable
3. **Easy to Analyze** - All info together
4. **No Duplicates** - Single entry per submission

---

## 🧪 Test It

```bash
npm run dev
```

Visit: `http://localhost:5173/saas/rca/vsl`

1. Click "Take Free Stock Audit"
2. Complete all 4 steps
3. Click "Yes, Book Call"
4. Check your Google Sheet - ONE new row with ALL data!

---

## 🎯 Current Endpoint

**API:** `https://sheetdb.io/api/v1/vxa04y3eo2icm`

**Method:** POST

**Saves:** Only at Step 4 (when user clicks "Yes, Book Call" or "Not Now")

---

## ✨ Ready!

Just create the 12 columns in your Google Sheet and test the form! 🚀
