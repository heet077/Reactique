✨ About

Reactique is a lightweight, modular gallery that displays React projects in a visually appealing, filterable canvas. It’s built so you (or other developers) can quickly add new projects, enable routing, and keep the structure clean as the portfolio grows.

⸻

🛠 Technologies Used
	•	React (Vite)
	•	JavaScript
	•	CSS
	•	AOS (animation-on-scroll)
	•	EmailJS
	•	Netlify / Hostinger

⸻

🚩 Features
	•	Responsive grid / canvas layout
	•	Tab-based category filters
	•	Easy project onboarding
	•	Modular folder structure for scalability
	•	Dynamic routing for projects
	•	Clean, minimal UI


📁 Folder Structure

Reactique/
│
├── node_modules/
├── src/
│   ├── assets/            # project images & static assets
│   ├── Home/              # homepage & home components
│   ├── projects/          # each project gets its own folder
│   ├── routes/            # app routes (AppRoutes.jsx)
│   ├── components/        # reusable UI components
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

➕ How to Add a Project
	1.	Create a new folder inside src/projects/ and add your project files.
	2.	Add an entry for your project in src/Home/HomeComponents/HomeData.
	3.	Configure a <Route /> for it inside src/routes/AppRoutes.jsx.

Your project will now appear in the gallery and can be filtered.


🧪 Run Locally

git clone https://github.com/heetjivani/Reactique.git
cd Reactique
npm install
npm run dev

📬 Contact

Name: Heet Jivani
Email: heetjivani3456@gmail.com
