import { motion } from 'framer-motion';

const events = [
  {
    title: "Innovation Workshop",
    date: "March 20, 2024",
    description: "Hands-on workshop on design thinking and innovation methodologies",
    category: "Workshop"
  },
  {
    title: "Startup Bootcamp",
    date: "April 10-12, 2024",
    description: "Intensive 3-day bootcamp on building and scaling startups",
    category: "Bootcamp"
  },
  {
    title: "Hackathon 2024",
    date: "April 25-27, 2024",
    description: "48-hour hackathon focused on solving real-world problems",
    category: "Hackathon"
  },
  {
    title: "Pitch Competition",
    date: "May 5, 2024",
    description: "Showcase your startup ideas to industry experts",
    category: "Competition"
  }
];

const Events = () => {
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
          Upcoming Events
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
            >
              <div className="text-blue-600 font-semibold mb-2">{event.category}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {event.title}
              </h3>
              <div className="text-gray-600 mb-4">{event.date}</div>
              <p className="text-gray-600">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events; 