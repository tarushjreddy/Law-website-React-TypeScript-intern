import React from "react";
import { ProgressBar } from "react-bootstrap";
import Sound from "react-sound";

interface AudioPlayerViewProps {
  blobUrl: string;
  duration: number;
  getPlayingDuration: () => number;
  pOnPlaying: () => void;
  pOnStop: () => void;
  isPlaying: boolean;
}

const AudioPlayerView: React.FC<AudioPlayerViewProps> = ({
  blobUrl,
  duration,
  getPlayingDuration,
  pOnPlaying,
  pOnStop,
  isPlaying,
}) => {
  return (
    <div>
      <div>
        <p>Playing Duration : {getPlayingDuration()}</p>

        <Sound
          url={blobUrl}
          playStatus={isPlaying ? "PLAYING" : "STOPPED"}
          onStop={pOnStop}
          onFinishedPlaying={pOnStop}
          onPlaying={pOnPlaying}
        />
      </div>
      <div>
        <ProgressBar now={getPlayingDuration()} max={duration} />
      </div>
    </div>
  );
};

export default AudioPlayerView;
