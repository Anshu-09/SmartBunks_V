
# 🧮 SmartBunks

**SmartBunks** is a smart attendance calculator that helps students or faculty easily compute subject-wise attendance requirements based on class schedules, holidays, and custom thresholds.

---

## 🚀 Features

- 📆 Input weekly subject-wise timetable
- 🎯 Set attendance threshold percentage
- 📁 Upload optional holiday Excel file or use the default list
- 📊 Get detailed report with:
  - Total working days
  - Required minimum attendance
  - Maximum number of classes you can bunk

---

## 📂 Folder Structure

```
SmartBunks_V/
│
├── api/                      # Express backend
│   ├── views/                # EJS templates
│   │   └── index.ejs
│   ├── public/               # Static files
│   │   └── styles.css
│   ├── static/               # Default holiday list
│   │   └── data/
│   │       └── holidays.xlsx
│   ├── app.js                # Main backend logic
│   └── ...
├── package.json
└── README.md
```

---

## 📌 Requirements

- Node.js (v18 or later)
- npm

---

## 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/Anshu-09/SmartBunks_V.git
cd SmartBunks_V/api

# Install dependencies
npm install

# Run the server
node app.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📥 Default Holiday File

You can view/download the default holiday list directly from the form interface or [here](http://localhost:3000/download-default-holidays).

---

## 🧠 How It Works

1. Enter your **subject schedule** for each weekday.
2. Set a **start date**, **end date**, and your **minimum attendance threshold** (e.g., 75%).
3. Upload a holiday file *(optional)* or use the default.
4. Click **Analyze** to get your smart attendance plan.

---

## 🧾 License

MIT License © 2025 [Anshuman Giri](https://github.com/Anshu-09)

---

## 🙌 Contributions

Open to contributions, bug reports, or feature suggestions. Fork the repo and create a pull request!
