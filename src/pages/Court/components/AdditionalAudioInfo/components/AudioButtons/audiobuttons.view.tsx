import React from "react";

import StopIcon from "../../../../../../assets/icons/audioInfo/stop.png";
import PlayIcon from "../../../../../../assets/icons/audioInfo/play.png";
import PauseIcon from "../../../../../../assets/icons/audioInfo/pause.png";
import RecordIcon from "../../../../../../assets/icons/audioInfo/record.png";
import DeleteIcon from "../../../../../../assets/icons/audioInfo/delete.png";

interface AudioButtonsViewProps {
  startRecording: (index: number) => void;
  stopRecording: () => void;
  startPlaying: (index: number) => void;
  stopPlaying: () => void;
  index: number;
  currentRecording: number | undefined;
  currentPlaying: number | undefined;
  isRecorded?: boolean;
  deleteAudio: (index: number) => void;
}

const AudioButtonsView: React.FC<AudioButtonsViewProps> = ({
  startRecording,
  stopRecording,
  startPlaying,
  stopPlaying,
  index,
  currentRecording,
  currentPlaying,
  isRecorded,
  deleteAudio,
}) => {
  return (
    <div
      className="audioButtonContainer col col-12 p-3 bg-white m-2 row justify-content-around"
      style={{ borderRadius: "5px", border: "3px solid #B8A046" }}
    >
      <div className="col">Audio {index + 1}</div>

      {!isRecorded ? (
        <div className="col">
          {currentRecording === index ? (
            <>
              <button
                className="btn shadow-none"
                onClick={stopRecording}
                type="button"
              >
                <img
                  src={StopIcon}
                  width="40px"
                  height="40px"
                  alt="Stop Icon"
                />
              </button>
            </>
          ) : (
            <button
              className="btn shadow-none"
              onClick={() => startRecording(index)}
              type="button"
            >
              <img
                src={RecordIcon}
                width="40px"
                height="40px"
                alt="Record Icon"
              />
            </button>
          )}
        </div>
      ) : (
        <div className="col row justify-content-around">
          <div className="col col-6">
            {currentPlaying === index ? (
              <>
                <button
                  className="btn shadow-none"
                  onClick={stopPlaying}
                  type="button"
                >
                  <img
                    src={PauseIcon}
                    width="40px"
                    height="40px"
                    alt="Pause Icon"
                  />
                </button>
              </>
            ) : (
              <button
                className="btn shadow-none"
                onClick={() => startPlaying(index)}
                type="button"
              >
                <img
                  src={PlayIcon}
                  width="40px"
                  height="40px"
                  alt="Play Icon"
                />
              </button>
            )}
          </div>
          <div className="col col-6">
            <button className="btn shadow-none">
              <img
                src={DeleteIcon}
                onClick={() => deleteAudio(index)}
                width="40px"
                height="40px"
                alt="Delete Icon"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioButtonsView;
