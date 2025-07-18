// src/hooks/VideoPlayerLogic.js
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useVideoPlayer = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoSrc = t('heroSection.introduceVideo.src');

  const handleCustomPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Reset play button and reload video when language (src) changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setShowPlayButton(true);
    }
  }, [videoSrc]);

  // Handle play/pause toggle for custom button
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setShowPlayButton(false);
    const handlePause = () => setShowPlayButton(true);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return {
    videoRef,
    videoSrc,
    showPlayButton,
    handleCustomPlay,
  };
};
