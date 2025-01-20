import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Highlights from './Highlights';
import Footer from './Footer';
import './App.css';

function App() {
  const instagramUrls = [
    "https://www.instagram.com/reel/DEuTw-hyMOg/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DBtkYe8NL6a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DArAHdISIfN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DAq_6i4yR_d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/C_4fc99y_fa/?utm_source=ig_embed&amp;utm_campaign=loading",
    // Add more URLs as needed
  ];

  const eventNames = [
    "Event 1",
    "Event 2",
    "Event 3",
    "Event 4",
    "Event 5",
    // Add more event names as needed
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Overview />
        <Highlights urls={instagramUrls} events={eventNames} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
