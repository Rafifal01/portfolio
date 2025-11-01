# 🌐 Personal Portfolio — Muhamad Rafif Al Hafizh

This repository contains the source code for my personal portfolio website.  
Built with **HTML, CSS, and JavaScript**, the website showcases my background, skills, and selected data-related projects.

🔗 **Live Website:** https://rafifal01.github.io/portfolio  
🔗 **LinkedIn:** https://www.linkedin.com/in/mrafif01  
🔗 **GitHub Profile:** https://github.com/Rafifal01

---

## 🧑‍💻 About Me

I am an undergraduate Data Science student with experience in data analytics, machine learning, and dashboard visualization.  
Passionate about turning data into insights and building end-to-end projects focused on real-world problems.

---

## 🚀 Features

✅ Responsive portfolio website  
✅ Auto-fetch GitHub repositories using GitHub API  
✅ Dynamic project section (name, description, stars, language, last update)  
✅ "View Code" & "Live Demo" buttons  
✅ No framework required (pure HTML/CSS/JS)  
✅ Easy to deploy via GitHub Pages, Vercel, or Netlify  

---

## 📌 Tech Stack

| Frontend | API | Deployment |
|----------|-----|------------|
| HTML | GitHub REST API | GitHub Pages |
| CSS (custom) | No backend required | (Optional: Vercel / Netlify) |
| JavaScript (Vanilla) |  |  |

---

## 📂 Project Structure
portfolio/
│── index.html # Main page
│── styles.css # Styling
│── script.js # Fetch GitHub API + dynamic project rendering
│── README.md # You're reading this file


---

## 🛠️ How It Works

The project section is generated dynamically using JavaScript:

1. Fetches selected repositories using the GitHub API  
2. Displays:
   - Repository name  
   - Description  
   - Main language  
   - ⭐ Star count  
   - ⏳ Last updated date  
3. Links are added automatically:
   - `View Code` → GitHub repository
   - `Live Demo` → Project URL (if exists)

To customize which repos get displayed, edit this array inside `script.js`:

```js
const reposToShow = [
  "bikesharing-SARIMA",
  "Transjakarta_Analysis",
  "studentapp",
  "Tokopedia-SentimentAnalysis",
  "portfolio"
];
