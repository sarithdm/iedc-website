import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const team = [
  {
    name: "Sarith Divakar",
    role: "Faculty Coordinator",
    image: "#",
    bio: "Leading innovation and entrepreneurship initiatives at LBSCEK."
  },
  {
    name: "Arathi",
    role: "Faculty Coordinator",
    image: "#",
    bio: "Expert in technology and innovation management."
  },
  // Add 20 more team members with placeholder data
  ...Array(20).fill(null).map((_, index) => ({
    name: `Team Member ${index + 1}`,
    role: "Student Coordinator",
    image: `https://images.unsplash.com/photo-${1507003211169 + index}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    bio: "Passionate about fostering innovation among students."
  }))
];

const Team = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center p-4"
            >
              <div className="relative w-24 h-24 mx-auto mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1 truncate">{member.name}</h3>
              <div className="text-blue-600 text-sm font-semibold mb-2 truncate">{member.role}</div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaLinkedin size={16} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaGithub size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 