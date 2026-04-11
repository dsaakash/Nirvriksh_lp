# ✅ Google Forms Solution (Easiest Alternative)

## 🎯 Why Google Forms?

- ✅ **100% Free** - No limits
- ✅ **Direct to Google Sheets** - Automatic connection
- ✅ **No API issues** - Google's infrastructure
- ✅ **Easy setup** - 5 minutes
- ✅ **Reliable** - Never goes down

---

## 📋 Setup Steps

### **Step 1: Create Google Form**

1. Go to https://forms.google.com
2. Click "Blank Form"
3. Add these questions:

**Question 1:** What is your approximate annual revenue?
- Type: Multiple choice
- Options:
  - ₹30L – ₹50L
  - ₹50L – ₹80L
  - ₹80L – ₹1.2Cr
  - ₹1.2Cr+

**Question 2:** Does your system stock match physical stock?
- Type: Multiple choice
- Options:
  - Mostly matches (< 5% gap)
  - Noticeable gap (5–10%)
  - Significant gap (10–15%)
  - I honestly don't know

**Question 3:** Do you use manual registers alongside billing software?
- Type: Multiple choice
- Options:
  - No, fully digital
  - Yes, some manual backup
  - Yes, heavily rely on manual

**Question 4:** How long does daily reconciliation take?
- Type: Multiple choice
- Options:
  - Under 15 minutes
  - 30 minutes to 1 hour
  - 1–2 hours
  - We don't reconcile daily

**Question 5:** If your key staff member leaves tomorrow, what happens?
- Type: Multiple choice
- Options:
  - Systems continue smoothly
  - Some disruption, but manageable
  - Major chaos — they know everything

**Question 6:** Your Name
- Type: Short answer
- Required: Yes

**Question 7:** Store Name
- Type: Short answer
- Required: Yes

**Question 8:** Mobile Number
- Type: Short answer
- Required: Yes

**Question 9:** Email Address
- Type: Short answer
- Required: Yes

**Question 10:** Are you interested in booking a call?
- Type: Multiple choice
- Options:
  - Yes
  - No

### **Step 2: Get Form URL**

1. Click "Send" button (top right)
2. Click the link icon (<>)
3. Copy the form URL
4. It will look like: `https://docs.google.com/forms/d/e/FORM_ID/viewform`

### **Step 3: Get Pre-filled URL**

1. Click the three dots (⋮) in top right
2. Click "Get pre-filled link"
3. Fill in dummy data for all fields
4. Click "Get link"
5. Copy the URL - it will have all field IDs

Example:
```
https://docs.google.com/forms/d/e/FORM_ID/formResponse?
entry.123456789=revenue&
entry.987654321=name&
...
```

### **Step 4: Extract Entry IDs**

From the pre-filled URL, note down the entry IDs:
- `entry.123456789` = revenue field
- `entry.987654321` = name field
- etc.

---

## 💻 Update Your Code

Replace the SheetDB API call with Google Forms submission:

```typescript
const handleInterestSubmit = async (isInterested: boolean) => {
  setLoading(true);
  setError('');

  try {
    // Create form data
    const formData = new FormData();
    
    // Add all fields with their entry IDs (replace with your actual IDs)
    formData.append('entry.YOUR_REVENUE_ID', questions.revenue);
    formData.append('entry.YOUR_STOCKMATCH_ID', questions.stockMatch);
    formData.append('entry.YOUR_MANUAL_ID', questions.manualRegister);
    formData.append('entry.YOUR_RECON_ID', questions.reconciliationTime);
    formData.append('entry.YOUR_STAFF_ID', questions.staffDependency);
    formData.append('entry.YOUR_NAME_ID', ownerInfo.name);
    formData.append('entry.YOUR_STORE_ID', ownerInfo.storeName);
    formData.append('entry.YOUR_MOBILE_ID', ownerInfo.mobile);
    formData.append('entry.YOUR_EMAIL_ID', ownerInfo.email);
    formData.append('entry.YOUR_INTEREST_ID', isInterested ? 'Yes' : 'No');

    // Submit to Google Forms
    await fetch('https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse', {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Important!
    });

    // Success (no-cors means we can't check response, but it works)
    if (isInterested) {
      setStep('calendly');
    } else {
      alert('Thank you for your time!');
      onClose();
    }
  } catch (err) {
    setError('Something went wrong. Please try again.');
    console.error(err);
  } finally {
    setLoading(false);
  }
};
```

---

## 📊 View Responses

1. Open your Google Form
2. Click "Responses" tab
3. Click the Google Sheets icon
4. All submissions appear in real-time!

---

## ✅ Advantages

- **Free forever**
- **Unlimited submissions**
- **Auto-saves to Google Sheets**
- **No API limits**
- **No authentication needed**
- **Works on Netlify without config**

---

## 🎯 Next Steps

1. Create Google Form with 10 questions
2. Get pre-filled link
3. Extract entry IDs
4. Update code with your entry IDs
5. Test and deploy!

