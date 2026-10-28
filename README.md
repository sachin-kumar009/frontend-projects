# frontend-projects
# Student Productivity & Goal Tracker

A responsive web application designed to help students organize their daily activities, manage academic goals, track productivity, and develop consistent study habits.

## 📌 Project Overview

The **Student Productivity & Goal Tracker** is a frontend web application developed using HTML, CSS, and JavaScript. It provides a centralized dashboard where students can manage tasks, schedule study sessions, monitor goal completion, and track their daily productivity.

The application features a clean, modern interface that works across desktop, tablet, and mobile devices.

## 🎯 Objectives

- Help students organize daily academic tasks and activities.
- Set short-term and long-term goals.
- Track task completion and study progress.
- Improve time management using a Pomodoro timer.
- Monitor productivity through visual statistics.
- Encourage consistent study habits through daily streaks.

## ✨ Features

### 1. Dashboard
- Personalized welcome section.
- Overview of daily goals and completed tasks.
- Total study time and current productivity streak.
- Quick access to important sections.

### 2. Goal Management
- Create, edit, and delete goals.
- Set goal deadlines and priorities.
- Track goal completion using progress bars.
- Categorize goals by subject or activity.

### 3. Task Management
- Add, update, and delete tasks.
- Set task deadlines and priority levels.
- Mark tasks as completed or pending.
- Filter and search tasks by status or category.

### 4. Pomodoro Timer
- 25-minute focus sessions.
- 5-minute short breaks.
- Start, pause, and reset timer controls.
- Track completed focus sessions.

### 5. Daily Schedule
- Organize study sessions and other activities.
- Display task timings and completion statuses.
- View upcoming activities and daily priorities.

### 6. Progress Tracking
- Visualize weekly study time.
- Display goal completion percentages.
- Track completed tasks and productivity trends.
- Show progress through charts and progress bars.

### 7. Calendar
- View scheduled tasks and deadlines.
- Organize academic activities by date.
- Identify upcoming assignments and goals.

### 8. Responsive Design
- Mobile-friendly dashboard.
- Desktop sidebar and mobile navigation.
- Responsive cards, forms, and charts.
- Consistent interface across different screen sizes.

### 9. Data Persistence
- Use browser `localStorage` to save tasks, goals, and preferences.
- Restore saved information when the user reopens the application.
- Provide a way to clear stored application data.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic content |
| CSS3 | Styling, layouts, animations, and responsiveness |
| JavaScript | Application logic and interactive features |
| LocalStorage | Persisting data in the browser |
| Chart.js (optional) | Visualizing productivity statistics |
| Font Awesome (optional) | Icons and interface elements |

## 📂 Project Structure

```text
student-productivity-tracker/
│
├── index.html
├── goals.html
├── tasks.html
├── calendar.html
├── progress.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── components.css
│
├── js/
│   ├── app.js
│   ├── goals.js
│   ├── tasks.js
│   ├── pomodoro.js
│   ├── calendar.js
│   └── progress.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

*Note: This is a suggested structure. Files can be combined or reorganized during development.*

## 🚀 Getting Started

### Prerequisites

- A modern web browser such as Chrome, Firefox, or Edge.
- A code editor such as Visual Studio Code.
- The Live Server extension for Visual Studio Code (recommended).

### Installation

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server, or open it directly in a browser.
4. Start adding tasks, setting goals, and tracking your productivity.

### Run Locally

If Git is installed, run:

```bash
git clone <your-repository-url>
cd student-productivity-tracker
```

Then open the project in Visual Studio Code and launch `index.html` using Live Server.

## 💡 How to Use

1. Open the dashboard to view your daily productivity summary.
2. Add academic goals and define their deadlines.
3. Create tasks and assign priorities.
4. Organize activities in the daily schedule.
5. Start a Pomodoro session to focus on a task.
6. Mark tasks as completed when finished.
7. Review weekly statistics and goal progress.
8. Revisit the application regularly to maintain consistent study habits.

## 📱 Responsive Design

The application is designed to adapt to different screen sizes:

- **Desktop:** Sidebar navigation and multi-column dashboard.
- **Tablet:** Flexible card layouts and adjusted navigation.
- **Mobile:** Single-column sections, compact cards, and bottom navigation.

CSS media queries, Flexbox, and CSS Grid are used to achieve responsive layouts.

## 🔒 Data Storage and Limitations

The application uses browser `localStorage` for basic data persistence.

- Data is stored locally in the browser on the current device.
- Data is not automatically synchronized between devices.
- Clearing browser storage may remove saved application data.
- Since this is a frontend-only project, it does not provide server-side authentication or a shared database.

## 🔮 Future Enhancements

- User authentication and cloud synchronization.
- Backend integration using Node.js and a database.
- Notifications for upcoming deadlines.
- AI-powered study recommendations.
- Subject-wise productivity analysis.
- Exportable reports in PDF or CSV format.
- Integration with external calendars.
- Customizable study timers and themes.

## 🎓 Academic Significance

This project demonstrates practical knowledge of frontend web development, responsive UI design, JavaScript programming, event handling, DOM manipulation, browser storage, and data visualization.

It addresses common student challenges related to time management, task organization, and academic goal tracking while providing a foundation for future full-stack development.

## 👨‍💻 Author

**Your Name**

B.Tech – Electrical and Electronics Engineering

**Project:** Student Productivity & Goal Tracker

## 📄 License

This project is intended for educational and academic purposes. You may modify and extend it for personal learning and portfolio development.
