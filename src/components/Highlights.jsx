import { motion } from 'framer-motion';

const stats = [
  { number: "100+", label: "Students Engaged" },
  { number: "20+", label: "Projects Completed" },
  { number: "10+", label: "Workshops Organized" },
  { number: "5+", label: "Startups Launched" }
];

const achievements = [
  {
    title: "Best IEDC 2023",
    description: "Recognized for outstanding contribution to student entrepreneurship",
    category: "Award"
  },
  {
    title: "Innovation Grant",
    description: "Received funding for advanced technology projects",
    category: "Grant"
  },
  {
    title: "Industry Partnerships",
    description: "Collaborations with leading tech companies",
    category: "Partnership"
  }
];

const Highlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Impact
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-blue-600 font-semibold mb-2">{achievement.category}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights; 