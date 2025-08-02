LogiTrack Frontend
A modern, responsive logistics tracking system built with React and Vite. This application provides a comprehensive dashboard for managing shipments, tracking packages, and monitoring delivery status.
🚀 Features

Available at 

https://claude.ai/public/artifacts/f17a0a00-a72f-47dc-935f-5bada643d4e3

Dashboard Overview: Real-time statistics and shipment summaries
Shipment Tracking: Search and track packages by tracking number
Add New Shipments: Create and manage new shipment entries
Responsive Design: Optimized for desktop, tablet, and mobile devices
Modern UI: Clean interface built with Tailwind CSS
Status Management: Color-coded status indicators for shipments

🛠️ Tech Stack

Frontend Framework: React 18
Build Tool: Vite
Styling: Tailwind CSS
Icons: Lucide React
Language: JavaScript (ES6+)

📦 Installation

Clone the repository:

bashgit clone https://github.com/Adityaunde01/logitrack-fe.git
cd logitrack-fe

Install dependencies:

bashnpm install

Start the development server:

bashnpm run dev

Open your browser and navigate to http://localhost:3000

🚀 Build and Deploy
Build for Production
bashnpm run build
Preview Production Build
bashnpm run preview
Deploy to GitHub Pages
bashnpm run deploy
📁 Project Structure
logitrack-fe/
├── public/
│   └── package-icon.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── .eslintrc.cjs        # ESLint configuration
└── README.md           # Project documentation
🎯 Usage
Dashboard

View overall shipment statistics
Monitor shipments by status (Processing, In Transit, Delivered)
Browse recent shipments in a detailed table

Track Shipments

Search for specific shipments using tracking numbers
View detailed shipment information
Real-time status updates

Add New Shipments

Create new shipment entries
Input customer details, origin, destination
Automatic tracking number generation
Set carrier and weight information

🎨 Features Overview
Shipment Status Types

Processing: Newly created shipments
In Transit: Shipments currently being delivered
Delivered: Successfully completed deliveries
Delayed: Shipments experiencing delays

Responsive Design

Mobile-first approach
Tablet and desktop optimized layouts
Touch-friendly interface elements

🔧 Configuration
Environment Variables
Create a .env file in the root directory for any environment-specific configurations:
envVITE_API_BASE_URL=your_api_url_here
VITE_APP_TITLE=LogiTrack
Customization

Colors: Modify tailwind.config.js to change the color scheme
Fonts: Update font imports in src/index.css
Layout: Adjust responsive breakpoints in Tailwind configuration

📱 Screenshots
Dashboard
<img width="1829" height="910" alt="image" src="https://github.com/user-attachments/assets/4111c77e-727d-40a7-b223-ba1eb595ffae" />

Tracking
<img width="1830" height="912" alt="image" src="https://github.com/user-attachments/assets/c397a206-b500-4e3f-9651-54f6f9f5e10a" />

Add Shipment
<img width="1830" height="913" alt="image" src="https://github.com/user-attachments/assets/27c1a5c3-a50c-4605-843c-90ff5860ac37" />


🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
👨‍💻 Author
Aditya Unde

GitHub: @Adityaunde01
LinkedIn: Aditya Unde

🙏 Acknowledgments

React - Frontend framework
Vite - Build tool
Tailwind CSS - Utility-first CSS framework
Lucide React - Beautiful icons

📈 Future Enhancements

 Real-time notifications
 Advanced filtering and sorting
 Export functionality (PDF, Excel)
 Multi-language support
 Dark mode theme
 Integration with shipping APIs
 Mobile app version
 Advanced analytics and reporting
