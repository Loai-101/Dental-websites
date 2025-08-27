import React, { useState, useEffect } from 'react';
import { useSEO } from '../../hooks/useSEO';
import './Programmers.css';

const Programmers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    experience: 0,
    projects: 0
  });

  // SEO setup
  useSEO({
    title: "Our Team - Expert Programmers & Developers",
    description: "Meet our talented team of programmers, developers, and IT professionals. From team leaders to data scientists, we have the expertise to deliver exceptional solutions.",
    keywords: "team, programmers, developers, IT professionals, software development, data science, mobile development",
    canonical: window.location.href,
    ogTitle: "Our Team - Expert Programmers & Developers",
    ogDescription: "Meet our talented team of programmers, developers, and IT professionals.",
    ogUrl: window.location.href,
    twitterTitle: "Our Team - Expert Programmers & Developers",
    twitterDescription: "Meet our talented team of programmers, developers, and IT professionals."
  });

  // Counting animation effect
  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          members: Math.floor(7 * progress),
          experience: Math.floor(51 * progress),
          projects: Math.floor(40 * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          // Ensure final values are exact
          setAnimatedStats({
            members: 7,
            experience: 51,
            projects: 40
          });
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    };

    // Start animation after a small delay
    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      number: animatedStats.members,
      label: "Team Members"
    },
    {
      number: animatedStats.experience,
      label: "Years Combined Experience"
    },
    {
      number: animatedStats.projects,
      label: "Projects Delivered"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Loai Aldaher",
      title: "Team Leader",
      category: "LEADERSHIP",
      experience: "5+ Years",
      description: "Visionary IT leader with over 5 years of experience in software development, system architecture, and digital transformation. Specialized in building scalable solutions, leading cross-functional teams, and integrating smart technologies tailored to business goals.",
      skills: ["Full-Stack Development", "System Integration", "Smart Solutions & Automation", "Team Leadership", "Business-Driven IT Strategy"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552078/team1_ibiine.jpg"
    },
    {
      id: 2,
      name: "Dr. Chouache Sofiene",
      title: "Project Director & Business Analyst",
      category: "PROJECT & STRATEGIC LEADERSHIP",
      experience: "20+ Years",
      description: "Strategic project leader with over 20 years of experience in project & program management, enterprise architecture, and business consulting. Expert in aligning business goals with smart system designs and ensuring quality delivery across multidisciplinary teams.",
      skills: ["Project & Program Management", "Business Analysis & Consulting", "Enterprise Architecture & Systems Design"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552079/team2_nganip.png"
    },
    {
      id: 3,
      name: "Bayrem Frej",
      title: "Tech Lead",
      category: "TECHNICAL LEADERSHIP",
      experience: "7+ Years",
      description: "Experienced Tech Lead with over 7 years of expertise in designing and supervising modern software architectures (microservices, cloud), enforcing clean code principles, and mentoring development teams. Skilled at bridging business and technical needs, driving agile practices, and ensuring delivery quality across complex environments.",
      skills: ["Software Architecture (Microservices, Cloud)", "Team Leadership & Mentoring", "Agile & DevOps Coordination", "Business-Technical Alignment", "Code Quality & Clean Coding Standards"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552080/team3_pracsj.png"
    },
    {
      id: 4,
      name: "Ghada Hleli",
      title: "Odoo Developer",
      category: "DEVELOPMENT",
      experience: "5+ Years",
      description: "Experienced Odoo developer with comprehensive expertise in backend and frontend development, system integration, and DevOps. Specialized in building custom modules and solutions across various business domains including Sales, Purchase, Inventory, Accounting, HR, CRM, and eCommerce.",
      skills: ["Backend Development (Python & Odoo ORM)", "Frontend Development (XML & QWeb)", "Web and API Integration", "DevOps / System Administration", "Odoo Studio", "Agile / Scrum Methodology"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552082/team4_qkwcpy.png"
    },
    {
      id: 5,
      name: "Ahlen Raissi",
      title: "Odoo Developer",
      category: "ODOO DEVELOPMENT",
      experience: "5+ Years",
      description: "Experienced Odoo developer with 5+ years of expertise in backend (Python & Odoo ORM) and frontend (XML & QWeb) development. Proven track record in delivering tailored Odoo solutions for maritime shipping, healthcare ERP, eCommerce, and website platforms.",
      skills: ["Backend: Python & Odoo ORM", "Frontend: XML & QWeb", "Web & API Integration", "DevOps & System Administration", "Agile Collaboration & Problem Solving"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552083/team5_tgx5ze.png"
    },
    {
      id: 6,
      name: "Hamza Riabi",
      title: "Sr Data Scientist | Data Engineer",
      category: "DATA SCIENCE & AI",
      experience: "5+ Years",
      description: "Experienced Data Scientist and Engineer with a strong background in designing and deploying machine learning models, building robust data pipelines, and delivering AI-powered solutions across industries. Proven ability to drive data strategy, automate analytics workflows, and lead end-to-end AI/ML projects from ideation to production. Skilled in modern data platforms, cloud environments, and distributed computing systems. Adept at collaborating with cross-functional teams to align technology with business value.",
      skills: ["Machine Learning & AI (Deep Learning, NLP, LLMs, Anomaly Detection)", "Data Engineering (ETL/ELT, Airflow, Big Data, Spark, Data Lakes)", "Programming (Python, R, SQL, PySpark)", "Tools & Frameworks (TensorFlow, Scikit-learn, MLflow, LangChain, Dask)", "Databases (PostgreSQL, MongoDB, SQL Server, S3)", "BI & Visualization (Power BI, Tableau, Plotly)", "Cloud & DevOps (AWS, Docker, Git, OVHCloud)"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754203497/WhatsApp_Image_2025-08-03_at_09.42.04_fbede4b3_swcyfo.jpg"
    },
    {
      id: 7,
      name: "Hamza Selmi",
      title: "Mobile App Developer | Flutter & Web Integration Specialist",
      category: "MOBILE & WEB DEVELOPMENT",
      experience: "4+ Years",
      description: "Motivated and results-driven Software Engineer with a strong background in cross-platform mobile application development. Over 4 years of experience delivering scalable and user-friendly mobile apps integrated with powerful backend systems. Specialized in Flutter and Dart, with solid experience in building real-time features, API integrations, and responsive UI/UX. Adept at working across the full development lifecycle—from interface design to deployment. Also experienced in full-stack web development, making him versatile in both mobile and web ecosystems.",
      skills: ["Mobile Development (Flutter, Dart, Cross-Platform Apps)", "Front-End (Angular, Vue.js, React.js, HTML5, CSS3, Tailwind CSS, SASS)", "Back-End (Laravel, PHP, Laravel Livewire, Node.js, REST APIs)", "Real-Time Apps (Socket.IO, WebSockets, Google Maps Integration)", "Tools & DevOps (Git, Asana, WordPress, Adobe Photoshop, Illustrator)", "Databases (MySQL, NoSQL)", "Platforms (Mobile Apps, SaaS, E-commerce, Geo-based Services)"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754205500/Screenshot_2025-08-03_101800_uk4c2z.png"
    }
  ];

  return (
    <div className="programmers-container">
      {/* Title Section */}
      <div className="title-section">
        <h1 className="page-title">Our Team</h1>
        <p className="page-intro">
          Meet our passionate team of IT professionals dedicated to delivering exceptional technology solutions.
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-member-card"
              onClick={() => setSelectedMember(member)}
            >
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>
            
            <div className="modal-body">
              <div className="modal-image-section">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="modal-member-image"
                />
              </div>
              
              <div className="modal-info-section">
                <h2 className="modal-member-name">{selectedMember.name}</h2>
                <p className="modal-member-title">{selectedMember.title}</p>
                
                <div className="modal-category">
                  <h3>{selectedMember.category}</h3>
                  <p className="modal-experience">{selectedMember.experience}</p>
                </div>
                
                <p className="modal-description">{selectedMember.description}</p>
                
                <div className="modal-skills">
                  <h4>Skills & Expertise</h4>
                  <div className="skills-grid">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programmers;
