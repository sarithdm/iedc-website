import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const communityData = {
  mulearn: {
    name: "Mulearn",
    description: "Learning community focused on peer learning and skill development",
    icon: "🎓",
    longDescription: "Mulearn is a vibrant learning community that focuses on peer-to-peer learning and skill development. Through various activities, workshops, and collaborative projects, members enhance their technical and soft skills.",
    activities: ["Peer Learning Sessions", "Skill Development Workshops", "Project Collaborations", "Mentorship Programs"],
    achievements: ["Best Learning Community 2023", "500+ Active Members", "100+ Successfully Completed Projects"],
    contact: {
      email: "mulearn@iedc.com",
      coordinator: "John Doe"
    }
  },
  thinkerhub: {
    name: "Thinkerhub",
    description: "Innovation and technology learning community",
    icon: "💡",
    longDescription: "Thinkerhub is a community of innovators and technology enthusiasts who come together to learn, create, and solve real-world problems through technology.",
    activities: ["Innovation Workshops", "Hackathons", "Tech Talks", "Project Showcases"],
    achievements: ["Best Innovation Hub 2023", "20+ Successful Projects", "5+ Patent Applications"],
    contact: {
      email: "thinkerhub@iedc.com",
      coordinator: "Jane Smith"
    }
  },
  cyber: {
    name: "Cyber",
    description: "Cybersecurity and digital safety community",
    icon: "🔒",
    longDescription: "The Cyber community focuses on cybersecurity awareness, ethical hacking, and digital safety. Members learn about the latest security threats and how to protect against them.",
    activities: ["Security Workshops", "CTF Competitions", "Security Audits", "Cyber Awareness Programs"],
    achievements: ["Best Security Community 2023", "10+ Security Certifications", "Successfully Protected College Network"],
    contact: {
      email: "cyber@iedc.com",
      coordinator: "Alex Johnson"
    }
  },
  floss: {
    name: "Floss",
    description: "Free/Libre and Open Source Software community",
    icon: "🔓",
    longDescription: "FLOSS promotes the use and development of free and open-source software. The community contributes to various open-source projects and helps students understand the importance of open source.",
    activities: ["Open Source Contributions", "Linux Workshops", "Code Sprints", "FOSS Awareness Programs"],
    achievements: ["100+ Open Source Contributions", "Best FOSS Community 2023", "5+ Major Project Releases"],
    contact: {
      email: "floss@iedc.com",
      coordinator: "Sarah Williams"
    }
  },
  mlsa: {
    name: "MLSA",
    description: "Microsoft Learn Student Ambassadors",
    icon: "📱",
    longDescription: "MLSA is a global program that provides students with resources and opportunities to learn about Microsoft technologies and develop leadership skills.",
    activities: ["Tech Workshops", "Azure Training", "Community Projects", "Microsoft Events"],
    achievements: ["Gold Level Ambassadors", "20+ Certified Members", "Best MLSA Chapter 2023"],
    contact: {
      email: "mlsa@iedc.com",
      coordinator: "Michael Brown"
    }
  },
  space: {
    name: "Space",
    description: "Space technology and astronomy enthusiasts",
    icon: "🚀",
    longDescription: "The Space community brings together students interested in space technology, astronomy, and exploration. Members work on space-related projects and organize stargazing events.",
    activities: ["Astronomy Nights", "Satellite Projects", "Space Tech Workshops", "Research Programs"],
    achievements: ["Best Space Tech Project 2023", "2 Satellite Launches", "NASA Space Apps Challenge Winners"],
    contact: {
      email: "space@iedc.com",
      coordinator: "Emily Clark"
    }
  },
  gdg: {
    name: "GDG",
    description: "Google Developer Groups community",
    icon: "🌐",
    longDescription: "GDG is a community of developers interested in Google's developer technology. The group organizes events and workshops to help members learn and grow.",
    activities: ["DevFests", "Code Labs", "Study Jams", "Tech Talks"],
    achievements: ["Best GDG Chapter 2023", "1000+ Event Participants", "10+ Google Certifications"],
    contact: {
      email: "gdg@iedc.com",
      coordinator: "David Lee"
    }
  },
  "ed-club": {
    name: "ED club",
    description: "Entrepreneurship Development club",
    icon: "💼",
    longDescription: "The ED Club focuses on developing entrepreneurial skills and mindset among students. Members work on business ideas and learn from successful entrepreneurs.",
    activities: ["Startup Workshops", "Business Plan Competitions", "Mentorship Sessions", "Networking Events"],
    achievements: ["10+ Successful Startups", "Best ED Club 2023", "₹1M+ Funding Raised"],
    contact: {
      email: "edclub@iedc.com",
      coordinator: "Rachel Green"
    }
  },
  "yip-club": {
    name: "YIP club",
    description: "Young Innovators Program club",
    icon: "✨",
    longDescription: "YIP Club nurtures young innovators by providing them with resources, mentorship, and opportunities to work on innovative projects.",
    activities: ["Innovation Workshops", "Project Development", "Design Thinking Sessions", "Prototype Development"],
    achievements: ["15+ Patents Filed", "Best Innovation Club 2023", "National Innovation Awards"],
    contact: {
      email: "yip@iedc.com",
      coordinator: "Tom Wilson"
    }
  },
  robotics: {
    name: "Robotics",
    description: "Robotics and automation community",
    icon: "🤖",
    longDescription: "The Robotics community focuses on building and programming robots. Members work on various robotics projects and participate in competitions.",
    activities: ["Robot Building", "Programming Workshops", "Competition Training", "Project Showcases"],
    achievements: ["National Robotics Champions", "10+ Competition Wins", "5+ Industrial Projects"],
    contact: {
      email: "robotics@iedc.com",
      coordinator: "Chris Anderson"
    }
  },
  "fsa-club": {
    name: "FSA club",
    description: "Firefox Student Ambassadors club",
    icon: "🦊",
    longDescription: "FSA Club promotes Mozilla's mission of keeping the internet open and accessible. Members contribute to Mozilla projects and organize web literacy programs.",
    activities: ["Web Literacy Programs", "Firefox Contribution", "Open Web Workshops", "Mozilla Events"],
    achievements: ["Best FSA Chapter 2023", "100+ Web Literacy Programs", "Mozilla Recognition"],
    contact: {
      email: "fsa@iedc.com",
      coordinator: "Lisa Thompson"
    }
  },
  kba: {
    name: "KBA",
    description: "Kerala Blockchain Academy community",
    icon: "⛓️",
    longDescription: "KBA community focuses on blockchain technology education and development. Members learn about blockchain applications and work on related projects.",
    activities: ["Blockchain Courses", "DApp Development", "Research Projects", "Industry Collaborations"],
    achievements: ["Best Blockchain Community 2023", "5+ Enterprise Projects", "Successful ICO Launch"],
    contact: {
      email: "kba@iedc.com",
      coordinator: "Mark Davis"
    }
  },
  coders: {
    name: "Coders",
    description: "Programming and coding community",
    icon: "💻",
    longDescription: "The Coders community brings together programming enthusiasts to learn, collaborate, and build projects. Members participate in coding competitions and hackathons.",
    activities: ["Coding Competitions", "Algorithm Workshops", "Project Development", "Code Reviews"],
    achievements: ["ACM ICPC Finalists", "100+ Competition Wins", "Best Coding Club 2023"],
    contact: {
      email: "coders@iedc.com",
      coordinator: "Peter Zhang"
    }
  },
  wow: {
    name: "WOW",
    description: "Women in Tech community",
    icon: "👩‍💻",
    longDescription: "WOW empowers women in technology through mentorship, skill development, and networking opportunities. The community promotes diversity and inclusion in tech.",
    activities: ["Tech Workshops", "Mentorship Programs", "Career Guidance", "Networking Events"],
    achievements: ["Best Women in Tech Community 2023", "50+ Tech Leaders", "Gender Diversity Award"],
    contact: {
      email: "wow@iedc.com",
      coordinator: "Emma Martinez"
    }
  },
  "aws-club": {
    name: "AWS club",
    description: "Amazon Web Services community",
    icon: "☁️",
    longDescription: "AWS Club helps students learn about cloud computing and Amazon Web Services. Members work on cloud projects and prepare for AWS certifications.",
    activities: ["AWS Training", "Cloud Projects", "Certification Prep", "Industry Connect"],
    achievements: ["50+ AWS Certifications", "Best Cloud Community 2023", "AWS Community Day Hosts"],
    contact: {
      email: "aws@iedc.com",
      coordinator: "James Wilson"
    }
  }
};

const CommunityPage = () => {
  const { id } = useParams();
  const community = communityData[id] || {
    name: "Community Not Found",
    description: "This community page does not exist.",
    icon: "❓",
    longDescription: "Please check the URL or go back to the communities page.",
    activities: [],
    achievements: [],
    contact: {
      email: "",
      coordinator: ""
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/communities" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <FaArrowLeft className="mr-2" />
          Back to Communities
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-6xl mb-6">{community.icon}</div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{community.name}</h1>
          <p className="text-xl text-gray-600 mb-8">{community.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">About</h2>
              <p className="text-gray-600 mb-6">{community.longDescription}</p>

              <h2 className="text-2xl font-bold text-blue-900 mb-4">Activities</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {community.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Achievements</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {community.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact</h2>
                <p className="text-gray-600">Coordinator: {community.contact.coordinator}</p>
                <p className="text-gray-600">Email: {community.contact.email}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityPage; 