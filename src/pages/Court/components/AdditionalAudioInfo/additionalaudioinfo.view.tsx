import React, { useRef, useState } from "react";

import { Modal } from "react-bootstrap";

import AddIcon from "../../../../assets/icons/audioInfo/add.png";
import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";

import AudioButtons from "./components/AudioButtons";
import AudioPlayer from "./components/AudioPlayer";
import AudioRecorder from "./components/AudioRecorder";

import { AudioInfoInterface, AudioType } from "../../court.model";

const MAX_RECORDING_DURATION = 60;
const MAX_AUDIOS_COUNT = 3;

interface AdditionalAudioInfoViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  audioInfoValues: AudioInfoInterface;
  setFormDataInParent: (formType: string, formValues: any) => void;
}

const AdditionalAudioInfoView: React.FC<AdditionalAudioInfoViewProps> = ({
  prevHandler,
  nextHandler,
  audioInfoValues,
  setFormDataInParent,
}) => {
  const [audios, setAudios] = useState(audioInfoValues.audios);
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

        console.log("Error : ", error);
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
    <div className="container">
      <div className="row">
        <div className="col col-6">
          <div style={{ height: "34em", padding: "10%" }}>
            <h2 style={{ fontSize: "1.9rem" }}>
              Record Audio describing the Circumstance
            </h2>

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
                <button className="btn shadow-none" onClick={addAudio}>
                  <img
                    src={AddIcon}
                    width="55px"
                    height="55px"
                    alt="Add Icon"
                  />
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
          </div>
        </div>
        <div className="col col-6 my-auto">
          <img src={DeliverableCollab} alt="Deliverable Collab" />
        </div>
      </div>
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
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={prevHandler}>
            Previous
          </button>
        </div>
        <div style={{ width: "auto" }}>
          <button
            className="btn btn-custom"
            type="submit"
            onClick={() => {
              setFormDataInParent("audioInfo", { audios: audios });
              nextHandler();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalAudioInfoView;
