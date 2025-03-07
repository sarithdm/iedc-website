import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const teamData = {
  "2025": {
    year: "2025",
    members: Array(20).fill(null).map((_, index) => ({
      name: `Team Member ${index + 1}`,
      role: ["Student CEO", "Technical Lead", "Marketing Lead", "Design Lead", "Project Manager", "Community Manager", "Innovation Lead", "Operations Lead"][index % 8],
      image: `/img/team/2025/${index + 1}.jpg`,
      bio: "Contributing to the growth and success of IEDC LBSCEK",
      linkedin: "#",
      github: "#"
    }))
  },
  "2024": {
    year: "2024",
    members: Array(15).fill(null).map((_, index) => ({
      name: `Team Member ${index + 1}`,
      role: ["Student CEO", "Technical Lead", "Marketing Lead", "Design Lead", "Project Manager", "Community Manager"][index % 6],
      image: `/img/team/2024/${index + 1}.jpg`,
      bio: "Driving innovation and entrepreneurship initiatives",
      linkedin: "#",
      github: "#"
    }))
  },
  "2023": {
    year: "2023",
    members: Array(10).fill(null).map((_, index) => ({
      name: `Team Member ${index + 1}`,
      role: ["Student CEO", "Technical Lead", "Marketing Lead", "Design Lead", "Operations Lead"][index % 5],
      image: `/img/team/2023/${index + 1}.jpg`,
      bio: "Led successful projects and initiatives",
      linkedin: "#",
      github: "#"
    }))
  },
  "2022": {
    year: "2022",
    members: [
      {
        name: "Jane Smith",
        role: "Student CEO",
        image: "/img/team/jane.jpg",
        bio: "Established key partnerships and programs",
        linkedin: "#",
        github: "#"
      },
      // Add more 2022 team members here
    ]
  }
};

const TeamSection = ({ year, members }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Team {year}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150?text=' + member.name.charAt(0);
              }}
            />
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
          <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
          <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
          <div className="flex justify-center space-x-4">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who make IEDC LBSCEK a hub of innovation and entrepreneurship.
            Our team members work tirelessly to create opportunities and foster growth in our community.
          </p>
        </motion.div>

        {Object.keys(teamData)
          .sort((a, b) => b - a) // Sort years in descending order
          .map(year => (
            <TeamSection
              key={year}
              year={year}
              members={teamData[year].members}
            />
          ))}
      </div>
    </div>
  );
};

export default TeamPage; 