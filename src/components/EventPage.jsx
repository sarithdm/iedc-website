import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { events } from '../eventsData';

const EventCard = ({ event, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="card group cursor-pointer"
    aria-label={`Event: ${event.title}`}
  >
    <div className="text-blue-600 font-semibold mb-2">{event.category}</div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
      {event.title}
    </h3>
    <div className="text-gray-600 mb-4">{event.date}</div>
    <p className="text-gray-600">{event.description}</p>
  </motion.div>
);

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const EventPage = () => {
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Past Events
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastEvents.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPage;