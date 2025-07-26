# 🧠 SmartBunks

SmartBunks is a smart attendance analysis tool built with **Node.js**, **Express**, and **EJS**, designed to help students calculate how many classes they can safely bunk without falling below a specified attendance threshold.

---

## 🚀 Features

- 📅 Calculates attendance based on timetable and holidays
- 📁 Upload holiday Excel file (optional)
- 📊 Displays attendance status for each subject
- 💡 Suggests how many lectures you can miss
- 📦 Lightweight UI with Bootstrap and EJS templating
- ☁️ Hosted on Vercel (serverless-friendly)

---

## 📁 Folder Structure

```
SmartBunks_V/
├── api/                 # Express app and backend logic (serverless on Vercel)
│   ├── index.js
│   └── calculate.js
├── public/              # Static files (CSS)
│   └── style.css
├── static/data/         # Optional: default holiday Excel
│   └── holidays.xlsx
├── views/               # EJS frontend templates
│   └── index.ejs
├── package.json         # Project dependencies and scripts
├── vercel.json          # Vercel deployment config
└── README.md
```

---

## 🛠️ Tech Stack

- Node.js
- Express
- EJS
- Multer (file upload)
- XLSX (Excel parsing)
- Bootstrap (styling)
- Vercel (deployment)

---

## 🌐 Live Demo

Deployed on Vercel: [https://smartbunks.vercel.app](https://smartbunks.vercel.app) <!-- replace with actual URL -->

---

## 📦 Setup & Run Locally

1. Clone the repository:
```bash
git clone https://github.com/your-username/SmartBunks_V.git
cd SmartBunks_V
```

2. Install dependencies:
```bash
npm install
```

3. Run locally:
```bash
node api/index.js
```

4. Visit `http://localhost:3000` in your browser.

---

## 📤 Deployment on Vercel

This project is ready to deploy on Vercel:

- `api/index.js` serves as the main serverless function
- `vercel.json` maps all routes to this function
- Static files and templates are organized accordingly

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

## 🧑‍💻 Author

**Anshuman Giri**  
💼 [LinkedIn](www.linkedin.com/in/anshuman-giri)  
📧 anshumangiriofficial@gmail.com

## 🧾 License

MIT License © 2025 [Anshuman Giri](https://github.com/Anshu-09)

---

## 🙌 Contributions

Open to contributions, bug reports, or feature suggestions. Fork the repo and create a pull request!
