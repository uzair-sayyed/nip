import React, { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa";
import "./HomeVideo.scss";
import video from "../../../assets/video/nipralo.mp4";

const HomeVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handlePlayVideo = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.4,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showButton) {
      const timer = setTimeout(() => setShowButton(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showButton]);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    setShowButton(true); // Reset the timer to show the button again for 2 seconds
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    setShowButton(true);
  };

  const handleVideoClick = () => {
    setShowButton(true);
  };

  return (
    <div className='container home-section-two sm:pt-0'>
      <div
        className='video-wrapper relative cursor-pointer'
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          loop
          muted={isMuted}
          playsInline
          controls={false}
          preload='none'
        >
          <source
            src='https://res.cloudinary.com/dfqfd2b2b/video/upload/v1724678766/nipralo.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
        {showButton && (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4'>
            <button
              onClick={togglePlayPause}
              className='bg-gray-700 bg-opacity-70 text-white rounded-full transition-opacity duration-300 focus:outline-none p-2 text-lg sm:p-3 sm:text-xl md:p-4 md:text-2xl'
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              onClick={toggleMute}
              className='bg-gray-700 bg-opacity-70 text-white rounded-full transition-opacity duration-300 focus:outline-none p-2 text-lg sm:p-3 sm:text-xl md:p-4 md:text-2xl'
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeVideo;
