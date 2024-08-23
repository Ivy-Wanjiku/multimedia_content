import React, { useState } from 'react';
import "./index.css";

function Podcast() {
  const [currentPodcast, setCurrentPodcast] = useState(null);

  const podcasts = [
    {
      title: "Women role in the socity",
      audioSrc: "/media/inganji.mp3",
    },
    {
      title: "Understanding User Experience",
      audioSrc: "/media/podcast.opus",
    },
    {
      title: "The Future of Design",
      audioSrc: "/media/podcast3.mp3",
    },
  ];

  const handleListen = (audioSrc) => {
    setCurrentPodcast(audioSrc);
  };

  return (
    <div>
      <hr />
      <div className="main">
        <div className="content">
          <h1>NEW ERA PODCASTING</h1>
          <p>
            This podcast includes episodes made by the Conquerors group
            in the class of 2024. We'll distribute these podcasts to Apple Podcasts,
            Spotify, and Google Podcasts.
          </p>
          <button>New Episodes</button>
        </div>
        <div>
          <img src="/media/bluepodcast.jpg" alt="Podcast" className="podcast" />
        </div>
        <hr />
      </div>
      <div className="main-content">
        {podcasts.map((podcast, index) => (
          <div className="avatar" key={index}>
            <div>
              <img src="media/herspace.jpeg" className="space" alt="Podcast Cover" />
            </div>
            <div>
              <h2>{podcast.title}</h2>
              <p>
                Fair or not, it takes a lot of work to overcome a first impression,
                whether that impression was downright bad, or just different from expectations.
              </p>
              <button onClick={() => handleListen(podcast.audioSrc)}>LISTEN NOW</button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      {currentPodcast && (
        <div className="audio-player">
          <audio controls autoPlay>
            <source src={currentPodcast} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default Podcast;