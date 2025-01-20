import React, { useEffect } from 'react';
import './Highlights.css';

const Highlights = ({ urls, events }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="highlights">
      <h3>Highlights</h3>
      <div className="instagram-reels">
        {urls.map((url, index) => (
          <div key={index} className="reel">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                View this post on Instagram
              </a>
            </blockquote>
            <h4>{events[index]}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
