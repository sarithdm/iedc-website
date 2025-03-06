import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <section className="overview">
      <img src="./img/overview-image.jpg" alt="Overview Image" className="overview-image" />
      <div className="overview-content">
        <h3>About IEDC LBSCEK</h3>
        <p>The Innovation and Entrepreneurship Development Centre (IEDC) at LBS College is a dynamic hub where creativity meets practicality. Through a variety of engaging programs, the IEDC sharpens students' skills—whether it's idea pitching sessions, hands-on workshops, or adrenaline-fueled hackathons. But it doesn't stop there. The IEDC bridges academia and the startup world, facilitating interactions with seasoned entrepreneurs. Coffee chats, startup showcases, and networking events—all designed to inspire, educate, and connect. So, whether you're a dreamer with a blueprint or a coder with a vision, the IEDC welcomes you to the entrepreneurial adventure!🚀💡 </p>
      </div>
    </section>
  );
};

export default Overview;