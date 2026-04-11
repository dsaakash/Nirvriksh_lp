# Google Sheet Structure for Multi-Step Booking Flow

## 📊 Required Column Headers

Your Google Sheet needs these **exact column names** in Row 1:

```
revenue | stockMatch | manualRegister | reconciliationTime | staffDependency | name | storeName | mobile | email | interested | stage | timestamp
```

---

## 📋 Column Details

### Step 1: Store Questions
1. **revenue** - Annual revenue range
2. **stockMatch** - Stock matching accuracy
3. **manualRegister** - Manual register usage
4. **reconciliationTime** - Daily reconciliation time
5. **staffDependency** - Staff dependency level

### Step 2: Owner Information
6. **name** - Owner's full name
7. **storeName** - Store name
8. **mobile** - Contact number
9. **email** - Email address

### Step 4: Interest
10. **interested** - Yes/No (if they want to book a call)

### Tracking
11. **stage** - Which step the data is from
12. **timestamp** - When the data was submitted (IST)

---

## 📝 Example Data

| revenue | stockMatch | manualRegister | reconciliationTime | staffDependency | name | storeName | mobile | email | interested | stage | timestamp |
|---------|------------|----------------|-------------------|-----------------|------|-----------|--------|-------|------------|-------|-----------|
| ₹50L – ₹80L | Noticeable gap (5–10%) | Yes, some manual backup | 30 minutes to 1 hour | Some disruption, but manageable | Aakash Kumar | Fashion Hub | 9353083597 | aakash@example.com | Yes | step4-interest | 09/04/2026, 8:30 PM |

---

## 🔄 Data Flow

### Step 1: Questions Submitted
```json
{
  "revenue": "₹50L – ₹80L",
  "stockMatch": "Noticeable gap (5–10%)",
  "manualRegister": "Yes, some manual backup",
  "reconciliationTime": "30 minutes to 1 hour",
  "staffDependency": "Some disruption, but manageable",
  "stage": "step1-questions",
  "timestamp": "09/04/2026, 8:30:00 PM"
}
```

### Step 2: Info Submitted
```json
{
  "name": "Aakash Kumar",
  "storeName": "Fashion Hub",
  "mobile": "9353083597",
  "email": "aakash@example.com",
  "stage": "step2-info",
  "timestamp": "09/04/2026, 8:31:00 PM"
}
```

### Step 4: Interest Submitted
```json
{
  "name": "Aakash Kumar",
  "storeName": "Fashion Hub",
  "mobile": "9353083597",
  "email": "aakash@example.com",
  "interested": "Yes",
  "stage": "step4-interest",
  "timestamp": "09/04/2026, 8:35:00 PM"
}
```

---

## 🎯 Stage Values

- `step1-questions` - Store assessment questions
- `step2-info` - Owner contact information
- `step4-interest` - Interest in booking call

---

## 💡 Pro Tips

1. **Format Mobile as Text** - Preserves leading zeros
2. **Freeze Row 1** - Keep headers visible while scrolling
3. **Add Data Validation** - Prevent manual entry errors
4. **Create Pivot Tables** - Analyze conversion rates
5. **Set up Notifications** - Get email alerts on new submissions

---

## 📊 Recommended Sheet Setup

### Sheet 1: Raw Data
- All submissions with all columns
- No filtering or sorting
- Pure data capture

### Sheet 2: Dashboard
- Pivot tables showing:
  - Total submissions by stage
  - Conversion rate (questions → interest)
  - Revenue distribution
  - Stock mismatch severity
- Charts and visualizations

### Sheet 3: Qualified Leads
- Filter: `interested = "Yes"`
- Only show complete lead information
- Ready for follow-up

---

## 🔍 Filtering & Analysis

### Find Qualified Leads
```
Filter: stage = "step4-interest" AND interested = "Yes"
```

### Find High-Value Leads
```
Filter: revenue = "₹1.2Cr+" AND interested = "Yes"
```

### Find Urgent Cases
```
Filter: stockMatch = "Significant gap (10–15%)" OR stockMatch = "I honestly don't know"
```

---

## 📈 Conversion Tracking

Track these metrics:
1. **Step 1 Completion** - How many complete questions
2. **Step 2 Completion** - How many provide contact info
3. **Step 3 Engagement** - Time spent on case study
4. **Step 4 Interest** - Yes vs No ratio
5. **Calendly Booking** - Final conversion

---

## 🚀 Setup Instructions

1. **Create Google Sheet**
   - Go to sheets.google.com
   - Create new sheet
   - Name it "Nirvriksh Leads"

2. **Add Headers**
   - Copy the 12 column names above
   - Paste in Row 1

3. **Format Columns**
   - Mobile: Format as Text
   - Timestamp: Format as Date/Time
   - All others: Plain text

4. **Connect to SheetDB**
   - Go to sheetdb.io
   - Connect your sheet
   - Use API: `https://sheetdb.io/api/v1/vxa04y3eo2icm`

5. **Test**
   - Submit test form
   - Check if data appears
   - Verify all columns populated

---

## ✅ Verification Checklist

- [ ] All 12 column headers added
- [ ] Headers match exactly (case-sensitive)
- [ ] Mobile column formatted as text
- [ ] Sheet connected to SheetDB
- [ ] Write permissions enabled
- [ ] Test submission successful
- [ ] Data appears in correct columns

---

## 🎉 You're Ready!

Once your sheet is set up with these columns, the multi-step booking flow will automatically save data at each step!
