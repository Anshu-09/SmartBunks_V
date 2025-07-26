const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const weekdays = ["mon", "tue", "wed", "thu", "fri","sat"];
  const schedule = {};

  weekdays.forEach(day => {
    const subjects = req.body[day]?.split(",").map(s => s.trim()).filter(Boolean) || [];
    schedule[day] = subjects;
  });

  const start = new Date(req.body.start_date);
  const end = new Date(req.body.end_date);
  const threshold = parseInt(req.body.threshold) || 75;

  // Load holiday file or use default
  let holidaysPath = path.join(__dirname, "../static/data/holidays.xlsx");
  if (req.file) holidaysPath = req.file.path;

  const workbook = XLSX.readFile(holidaysPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const holidays = XLSX.utils.sheet_to_json(sheet).map(row => new Date(row.Date).toDateString());

  const attendance = {};

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dayName = weekdays[d.getDay() - 1];
    if (!dayName) continue; // skip weekends

    if (holidays.includes(d.toDateString())) continue;

    for (const subject of schedule[dayName] || []) {
      if (!attendance[subject]) attendance[subject] = { total: 0 };
      attendance[subject].total += 1;
    }
  }

  // Add threshold requirement
  // Add threshold requirement
for (const sub in attendance) {
  attendance[sub].min_required = Math.ceil(attendance[sub].total * threshold / 100);
  attendance[sub].max_absents = attendance[sub].total - attendance[sub].min_required;
}


  res.render("index", { result: attendance });
};
