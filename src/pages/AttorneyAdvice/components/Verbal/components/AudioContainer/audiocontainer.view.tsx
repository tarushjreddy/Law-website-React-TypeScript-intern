import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import AddIcon from "../../../../../../assets/icons/verbalComp/add.png";

import AudioButtons from "./components/AudioButtons";
import AudioPlayer from "./components/AudioPlayer";
import AudioRecorder from "./components/AudioRecorder";

import styles from "./audiocontainer.module.scss";

export interface AudioType {
  blobUrl: string;
  duration: number;
}

const MAX_RECORDING_DURATION = 60;
const MAX_AUDIOS_COUNT = 3;

interface AudioContainerViewProps {
  backFunction: () => void;
  nextFunction: () => void;
  defaultAudios: AudioType[];
  setAudiosInParent: (audios: any) => void;
}

const AudioContainerView: React.FC<AudioContainerViewProps> = ({
  backFunction,
  nextFunction,
  defaultAudios,
  setAudiosInParent,
}) => {
  const [audios, setAudios] = useState(defaultAudios);
  const [isAudiosRecorded, setIsAudiosRecorded] = useState<boolean[]>([]);

  const [currentRecording, setCurrentRecording] = useState<number>();
  const latestValue = useRef(currentRecording);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingStartTime, setRecordingStartTime] = useState(0);
  const [recordingStopTime, setRecordingStopTime] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const startRecording = (index: number) => {
    console.log("Start Recording for : ", index);
    let stream: MediaStream | null = null;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((_stream) => {
        console.log("Result : ", _stream);
        stream = _stream;

        setCurrentRecording(() => {
          latestValue.current = index;
          return index;
        });

        const date = new Date().getTime();
        setRecordingStartTime(date);
        setIsRecording(true);
      })
      .catch((error) => {
        //alert("No Audio Device Connected OR Permission Denied to Record Audio");
        setShowModal(true);
      })
      .finally(() => {
        stream?.getAudioTracks().forEach((track) => {
          track.stop();
        });
      });
  };

  const stopRecording = () => {
    const date = new Date().getTime();
    setRecordingStopTime(date);
    setIsRecording(false);
    setCurrentRecording(undefined);
  };

  const getRecordingDuration = (): number => {
    const duration = Math.floor(
      (recordingStopTime - recordingStartTime) / 1000
    );
    return duration > 0 ? duration : 0;
  };

  const onData = () => {
    const date = new Date().getTime();
    setRecordingStopTime(date);
  };

  const onStop = (recordedBlob: any) => {
    setAudios((prev: AudioType[]) => {
      if (latestValue.current !== undefined) {
        prev[latestValue.current] = {
          blobUrl: recordedBlob.blobURL,
          duration: (recordedBlob.stopTime - recordedBlob.startTime) / 1000,
        };
        const _isAudiosRecorded = [...isAudiosRecorded];
        _isAudiosRecorded[latestValue.current] = true;
        setIsAudiosRecorded(_isAudiosRecorded);
      }
      return prev;
    });
  };

  if (isRecording && getRecordingDuration() > MAX_RECORDING_DURATION) {
    setIsRecording(false);
  }

  // FOR PLAYING
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingStartTime, setPlayingStartTime] = useState(0);
  const [playingStopTime, setPlayingStopTime] = useState(0);
  const [currentPlaying, setCurrentPlaying] = useState<number>();
  const [currentPlayingAudio, setCurrentPlayingAudio] = useState({
    blobUrl: "",
    duration: 0,
  });

  const startPlaying = (index: number) => {
    setIsPlaying(() => {
      setCurrentPlayingAudio({ ...audios[index] });
      setCurrentPlaying(index);
      return true;
    });
    const date = new Date().getTime();
    setPlayingStartTime(date);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    setCurrentPlaying(undefined);
    const date = new Date().getTime();
    setPlayingStopTime(date);
  };

  const deleteAudio = (index: number) => {
    const _audios = [...audios];
    _audios.splice(index, 1);

    const _isAudiosRecorded = [...isAudiosRecorded];
    _isAudiosRecorded.splice(index, 1);

    setAudios(_audios);
    setIsAudiosRecorded(_isAudiosRecorded);
  };

  const addAudio = () => {
    if (audios.length < MAX_AUDIOS_COUNT) {
      setAudios([...audios, { blobUrl: "", duration: 0 }]);
    }
  };

  const getPlayingDuration = () => {
    const duration = Math.floor((playingStopTime - playingStartTime) / 1000);
    return duration > 0 ? duration : 0;
  };

  const pOnPlaying = () => {
    const date = new Date().getTime();
    setPlayingStopTime(date);
  };

  const pOnStop = () => {
    stopPlaying();
  };

  const showAddButton = () => {
    if (audios.length >= MAX_AUDIOS_COUNT) return false;
    if (audios.length > 0 && audios[audios.length - 1].blobUrl === "")
      return false;

    return true;
  };

  return (
    <div className={styles.container}>
      <h2 className="text-center">Record Audios</h2>

      <div className="row p-2">
        {audios.map((audio, index) => {
          return (
            <AudioButtons
              key={index}
              index={index}
              startPlaying={startPlaying}
              startRecording={startRecording}
              stopPlaying={stopPlaying}
              stopRecording={stopRecording}
              currentRecording={currentRecording}
              currentPlaying={currentPlaying}
              deleteAudio={deleteAudio}
              isRecorded={!!audios[index].blobUrl}
            />
          );
        })}
      </div>

      {showAddButton() && (
        <div className="text-center">
          <button className="btn" onClick={addAudio}>
            <img src={AddIcon} width="55px" height="55px" alt="Add Icon" />
          </button>
        </div>
      )}

      <AudioRecorder
        getRecordingDuration={getRecordingDuration}
        onData={onData}
        onStop={onStop}
        isRecording={isRecording}
      />

      <AudioPlayer
        blobUrl={currentPlayingAudio.blobUrl}
        duration={currentPlayingAudio.duration * 0.95}
        isPlaying={isPlaying}
        pOnPlaying={pOnPlaying}
        pOnStop={pOnStop}
        getPlayingDuration={getPlayingDuration}
      />

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            No Audio Device Connected OR Permission Denied to Record Audio
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button
            className="btn btn-custom"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <div
        className={styles["button"]}
        style={{
          textAlign: "center",
        }}
      >
        <div
          className={styles["button"]}
          style={{
            display: "inline-block",
          }}
        >
          <Button
            variant="secondary"
            style={{
              backgroundColor: "#151A44",
              borderRadius: "4px",
              marginRight: "4px",
            }}
            onClick={() => {
              setAudiosInParent(audios);
              backFunction();
            }}
          >
            Back
          </Button>
        </div>
        <div
          className={styles["button"]}
          style={{
            display: "inline-block",
          }}
        >
          <Button
            variant="secondary"
            style={{
              backgroundColor: "#151A44",
              borderRadius: "4px",
              marginLeft: "4px",
            }}
            //disabled={disabled}
            onClick={() => {
              setAudiosInParent(audios);
              nextFunction();
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioContainerView;
