🎬 YouTube Clone (Video Listing App)
A responsive YouTube-style video listing application built using React.js and Axios.
This app fetches video data from a public API and displays it in a grid layout similar to a real video browsing platform.

🚀 Features
-Fetch videos from API
-YouTube-style video cards (thumbnail, title, channel, date)
-Pagination (Next / Previous)
-Loading state handling
-Modern UI with Tailwind CSS
-Fully responsive layout
-Smooth hover animations

🛠️ Tech Stack
-Frontend: React.js (Hooks)
-HTTP Client: Axios
-Styling: Tailwind CSS
-API: FreeAPI YouTube Videos

📂 Project Structure
src/
│── App.jsx
│── main.jsx
│── index.css

⚙️ Installation & Setup

1.Clone the repository
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone

2.Install dependencies
npm install

3.Run the project
npm run dev

🔗 API Endpoint
https://api.freeapi.app/api/v1/public/youtube/videos?page=1


🔄 Pagination Logic
-Uses page state to manage current page
-Fetches new data whenever page changes
-Prev/Next buttons are disabled when:
    -No previous page
    -No next page
    -While loading

🧠 Concepts Used
-React Hooks (useState, useEffect)
-API integration using Axios
-Conditional rendering
-Optional chaining (?.)
-Responsive UI design with Tailwind CSS

📌 Future Improvements
-Search functionality
-Video player on click
-Like / Save videos
-Category filters
-Infinite scrolling (like real YouTube)


👨‍💻 Author
Ajay Kumar


⭐ Support
If you like this project, give it a ⭐ on GitHub!

