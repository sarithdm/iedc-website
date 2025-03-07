import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const communities = [
  {
    name: "Mulearn",
    description: "Learning community focused on peer learning and skill development",
    icon: "🎓",
    path: "/communities/mulearn"
  },
  {
    name: "Thinkerhub",
    description: "Innovation and technology learning community",
    icon: "💡",
    path: "/communities/thinkerhub"
  },
  {
    name: "Cyber",
    description: "Cybersecurity and digital safety community",
    icon: "🔒",
    path: "/communities/cyber"
  },
  {
    name: "Floss",
    description: "Free/Libre and Open Source Software community",
    icon: "🔓",
    path: "/communities/floss"
  },
  {
    name: "MLSA",
    description: "Microsoft Learn Student Ambassadors",
    icon: "📱",
    path: "/communities/mlsa"
  },
  {
    name: "Space",
    description: "Space technology and astronomy enthusiasts",
    icon: "🚀",
    path: "/communities/space"
  },
  {
    name: "GDG",
    description: "Google Developer Groups community",
    icon: "🌐",
    path: "/communities/gdg"
  },
  {
    name: "ED club",
    description: "Entrepreneurship Development club",
    icon: "💼",
    path: "/communities/ed-club"
  },
  {
    name: "YIP club",
    description: "Young Innovators Program club",
    icon: "✨",
    path: "/communities/yip-club"
  },
  {
    name: "Robotics",
    description: "Robotics and automation community",
    icon: "🤖",
    path: "/communities/robotics"
  },
  {
    name: "FSA club",
    description: "Firefox Student Ambassadors club",
    icon: "🦊",
    path: "/communities/fsa-club"
  },
  {
    name: "KBA",
    description: "Kerala Blockchain Academy community",
    icon: "⛓️",
    path: "/communities/kba"
  },
  {
    name: "Coders",
    description: "Programming and coding community",
    icon: "💻",
    path: "/communities/coders"
  },
  {
    name: "WOW",
    description: "Women in Tech community",
    icon: "👩‍💻",
    path: "/communities/wow"
  },
  {
    name: "AWS club",
    description: "Amazon Web Services community",
    icon: "☁️",
    path: "/communities/aws-club"
  }
];

const Communities = () => {
  return (
    <section className="py-20 bg-gray-50" id="communities">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Communities</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our vibrant tech and innovation communities at IEDC LBSCEK.
            Join one of our specialized groups to learn, collaborate, and grow with
            like-minded individuals passionate about technology and entrepreneurship.
          </p>
          <Link 
            to="/communities" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Our Communities
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Communities; 