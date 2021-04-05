import React from "react";
import { ReactMic } from "react-mic";

import classes from "./audiorecorder.module.css";

interface AudioRecorderViewProps {
  getRecordingDuration: () => number;
  onData: (recordedBlob: any) => void;
  onStop: (recordedBlob: any) => void;
  isRecording: boolean;
}

const AudioRecorderView: React.FC<AudioRecorderViewProps> = ({
  getRecordingDuration,
  onData,
  onStop,
  isRecording,
}) => {
  return (
    <div>
      <div className={classes.audioRecorderContainer}>
        <p>Recording Duration : {getRecordingDuration()}</p>
        <ReactMic
          record={isRecording}
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
      </div>
    </div>
  );
};

export default AudioRecorderView;
