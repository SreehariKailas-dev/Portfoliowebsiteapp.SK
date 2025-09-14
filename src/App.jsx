import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from "./PortfolioPage";
import ProjectsPage from "./ProjectsPage";
import profile from "./assets/profile.jpg"; // Replace with real profile pic

// Import icons from lucide-react
import { PenTool, Code, Layout, Database, CheckCircle, Smartphone, Cpu, HardDrive, Box, FileText, Monitor } from "lucide-react";

export default function App() {
  const data = {
    name: "Sreehari Kailas",
    title: "Frontend Engineer & Full-Stack Developer | AI & ML Enthusiast",
    email: "sreeharikailas23@gmail.com",
    phone: "+91 9633406298",
    location: "Kollengode, Palakkad, Kerala, India",
    linkedin: "https://www.linkedin.com/in/sreeharikailas-513bkkkm",
    bio: "Business Analytics and Technology Enthusiast with expertise in BI, frontend development, and AI/ML solutions. Currently pursuing an MBA in AI & ML.",
    resumeUrl: "#",
    skills: [
      { name: "React", icon: Monitor },
      { name: "Tailwind", icon: Cpu },
      { name: "Node.js", icon: Code },
      { name: "Python", icon: Code },
      { name: "SQL", icon: HardDrive },
      { name: "HTML", icon: Box },
      { name: "CSS", icon: Layout },
      { name: "AI/ML", icon: Cpu },
      { name: "Power BI", icon: FileText },
      { name: "Automation", icon: Cpu },
      { name: "Firebase", icon: HardDrive },
      { name: "Excel", icon: FileText }
    ],
    experience: [
      {
        company: "PALS (Professional Academic Learning System)",
        role: "Business Analyst & Tech Associate",
        start: "July 2025",
        end: "Present",
        bullets: [
          "Conducted business data analysis using Excel & Power BI.",
          "Designed interactive dashboards for real-time insights.",
          "Automated recurring reports to improve efficiency.",
          "Collaborated with development team for frontend integration."
        ]
      },
      {
        company: "Freelance Consultant",
        role: "Web Development & Digital Solutions",
        start: "May 2024",
        end: "Present",
        bullets: [
          "Designed company websites and portals.",
          "Developed automation workflows for invoicing and billing.",
          "Delivered cost-efficient digital solutions for organizations."
        ]
      }
    ],
    projects: [
      {
        title: "LMS Portal with Firebase Backend",
        description: "Admin and student portals with real-time sync using Firebase.",
        tech: ["React", "Tailwind", "HTML", "CSS", "JS","Firebase"],
        images: [
          "/Projects/LMS9.png","/Projects/LMS1.png","/Projects/LMS2.png",
          "/Projects/LMS3.png","/Projects/LMS4.png","/Projects/LMS5.png",
          "/Projects/LMS6.png","/Projects/LMS7.png","/Projects/LMS8.png"
        ],
        repo: "#",
        live: "#"
      },
      {
        title: "GeoMark – QR & Location-Based Attendance System",
        description: "Validates attendance using QR codes and geolocation boundaries.",
        tech: ["HTML", "CSS", "JS", "Node JS"],
        images: [
          "/Projects/ATT1.png","/Projects/ATT2.png","/Projects/ATT4.png",
          "/Projects/ATT5.png","/Projects/ATT6.png","/Projects/ATT7.png",
          "/Projects/ATT8.png"
        ],
        repo: "#",
        live: "#"
      },
      {
        title: "LexiCore AI – Document Review Assistant",
        description: "AI-powered tool to analyze uploaded project reports with keyword detection.",
        tech: ["Python", "HTML", "CSS", "JS", "Node JS"],
        images: [
          "/Projects/AI1.png","/Projects/AI2.png","/Projects/AI3.png",
          "/Projects/AI4.png","/Projects/AI5.png","/Projects/AI6.png",
          "/Projects/AI7.png"
        ],
        repo: "#",
        live: "#"
      },
      {
        title: "CertFlow – Automated Certificate Generator",
        description: "Bulk certificate generator with Excel integration and mail-merge automation.",
        tech: ["Excel", "Python", "Automation"],
        images: ["/Projects/CERT1.png","/Projects/CERT2.png"],
        repo: "#",
        live: "#"
      },
      {
        title: "Visiting Card Designer Web App",
        description: "Responsive tool to generate professional visiting cards downloadable as PDFs.",
        tech: ["React", "Tailwind"],
        image: "/assets/projects/visiting-card.jpg",
        repo: "#",
        live: "#"
      },
      {
        title: "Music Foundation Website & Donation Portal",
        description: "Created a foundation website with courses, product catalog, and payment gateway.",
        tech: ["HTML", "CSS", "JS", "Node JS"],
        images: ["/Projects/PB1.png","/Projects/PB2.png"],
        repo: "#",
        live: "#"
      }
    ],
    education: [
      { degree: "MBA – AI & ML", institution: "Amrita Vishwa Vidyapeetham", period: "2024 – Present" },
      { degree: "B.Com with Computer Applications", institution: "College of Applied Science, Ayalur (Calicut University)", period: "2021 – 2024" },
      { degree: "Higher Secondary – Commerce", institution: "Vijayamatha HSS Convent", period: "2019 – 2021" },
      { degree: "SSLC", institution: "Chinmaya Vidyalaya, Kollengode", period: "2018 – 2019" }
    ],
    achievements: [
      "Led as primary technical organizer for school annual functions.",
      "Recognized as Editor for the short film “Drogen”.",
      "Mastered Flute and Mridangam.",
      "Completed Ethical Hacking & Web Development training.",
      "Holder of a valid Indian LMV Driving License."
    ],
   services: [
      { title: "Graphic Design", description: "Bring your ideas to life with custom illustrations, branding, and visual content that captivates audiences across print and digital platforms.", icon: PenTool },
      { title: "Front End Development", description: "Create dynamic, interactive, and responsive web applications using modern technologies like HTML, CSS, and JavaScript frameworks.", icon: Code },
      { title: "UI / UX Design", description: "Design seamless and user-friendly interfaces that focus on providing the best possible user experience with creative and functional layouts.", icon: Layout },
      { title: "Database Management", description: "Organize, store, and retrieve your data securely while ensuring high performance, scalability, and reliability for your systems.", icon: Database },
      { title: "Testing", description: "Ensure product quality and reliability through thorough manual and automated testing, identifying and fixing bugs efficiently.", icon: CheckCircle },
      { title: "Mobile App Development", description: "Build cutting-edge mobile apps tailored to your needs, offering seamless performance across Android and iOS platforms.", icon: Smartphone }
    ]
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage profileImage={profile} data={data} />} />
        <Route path="/projects" element={<ProjectsPage data={data} />} />
      </Routes>
    </Router>
  );
}