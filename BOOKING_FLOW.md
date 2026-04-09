# Booking Flow Implementation

## Overview
The booking flow now includes a two-step process:
1. **User Details Form** - Collects name, email, mobile, store name, and problem
2. **Calendly Booking** - Embedded Calendly for scheduling the call

## How It Works

### Step 1: User Clicks "Book Free Audit"
When users click any of the booking buttons on the page:
- "Take Free Stock Audit" (Hero section)
- "Book Free Store Audit Call" (After audit quiz results)
- "Book Your Free Call Now" (Final CTA)

A modal opens with a form.

### Step 2: User Fills Form
The form collects:
- **Name** (required)
- **Email** (required)
- **Mobile Number** (required)
- **Store Name** (required)
- **Main Problem** (required, textarea)

### Step 3: Data Saved to Database
When the form is submitted:
- Data is sent to `POST /api/leads` endpoint
- Saved to SQLite database with fields:
  - `name`
  - `email`
  - `mobile`
  - `storeName`
  - `problems` (JSON array)
  - `stage` (set to 'audit-booking')
  - `createdAt` (timestamp)

### Step 4: Calendly Booking
After successful form submission:
- Modal shows success message
- Calendly iframe is embedded in the same modal
- User can select a time slot
- User stays on the same page throughout

## Database Schema

```sql
CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  mobile TEXT,
  storeName TEXT,
  problems TEXT,  -- JSON array
  stage TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoint

**POST** `/api/leads`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "+91 98765 43210",
  "storeName": "Fashion Hub",
  "problems": ["Stock mismatch", "Manual tracking"],
  "stage": "audit-booking"
}
```

Response:
```json
{
  "success": true,
  "leadId": 123
}
```

## Testing

1. Start the backend server:
```bash
cd server
npm install
node index.js
```

2. Start the frontend:
```bash
npm run dev
```

3. Visit: `http://localhost:5173/saas/rca/vsl`

4. Click any "Book" button and test the flow

5. Check the database:
```bash
cd server
sqlite3 database.sqlite
SELECT * FROM leads;
```

## Components

- **BookingModal.tsx** - The modal component with form and Calendly embed
- **SaaSVslPage.tsx** - Main page with booking buttons

## Features

- ✅ Form validation (all fields required)
- ✅ Loading states
- ✅ Error handling
- ✅ Two-step flow (form → calendly)
- ✅ Data persistence in SQLite
- ✅ Responsive design
- ✅ Close modal functionality
- ✅ Success confirmation
