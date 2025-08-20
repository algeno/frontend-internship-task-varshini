# SPA User Profiles

A **Single Page Application (SPA)** that displays user profiles using **React**, **Vite**, and **Tailwind CSS**.

---

## About

This project showcases a list of user profiles in a clean and responsive UI. Each user profile is displayed using a reusable `UserCard` component. Data is imported from a local JSON file.

The Profiles look like this:
<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/deb7c93b-1e22-4d0f-a244-7aadcd818c81" />



---

## Features

- Display user profiles dynamically from JSON data
- Reusable `UserCard` component
- Built with **React**, **Vite**, and **Tailwind CSS**
- Fully responsive design

---

## Planning & Execution

1. Initialize project with **Vite**
2. Install and configure **Tailwind CSS**
3. Create reusable `UserCard` component
4. Import users' data from `users.json`
5. Display user profiles dynamically in the SPA
6. Style and display userCard with grid (with responsiveness)
7. Create emoji.json
8. Displaying emoji corresponding to user's favorite food


## Folder Structure

SPA_userProfiles
│── src/
│   ├── components/
│   │   └── UserCard.jsx
│   │
│   ├── data/
│   │   ├── emoji.json
│   │   └── users.json
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── package-lock.json
├── package.json
├── vite.config.js

