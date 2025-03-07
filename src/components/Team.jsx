import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <section className="py-20 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and entrepreneurship at IEDC LBSCEK.
            Our team consists of dedicated faculty coordinators and student leaders working together
            to create a vibrant startup ecosystem.
          </p>
          <Link 
            to="/team" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 