import React from "react";

interface YouTubeVideoProps {
  videoSrc: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoSrc }) => {
  let vidTitle = videoSrc.slice(0, 5);
  return (
    <iframe
      style={{ width: "100%", height: "20em", border: "none" }}
      src={videoSrc}
      title={vidTitle}
    ></iframe>
  );
};

export default YouTubeVideo;
