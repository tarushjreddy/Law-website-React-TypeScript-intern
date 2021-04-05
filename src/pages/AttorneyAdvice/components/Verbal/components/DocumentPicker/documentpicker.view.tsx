import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import FileUpload from "./components/FileUpload";
import styles from "./documentpicker.module.scss";
// import AddIcon from "../../../../../../assets/icons/verbalComp/add.png";

const MAX_UPLOAD_FILES_COUNT = 3;

interface DocumentPickerProps {
  backFunction: () => void;
  nextFunction: () => void;
  uploadedFiles: File[];
  setUploadFilesInParent: (files: File[]) => void;
}

const DocumentPicker: React.FC<DocumentPickerProps> = ({
  backFunction,
  nextFunction,
  uploadedFiles: defaultUploadFiles,
  setUploadFilesInParent,
}) => {
  const [uploadFiles, setUploadFiles] = useState(defaultUploadFiles);

  const addUploadFiles = () => {
    if (
      uploadFiles.length < MAX_UPLOAD_FILES_COUNT &&
      uploadFiles.filter((_v) => _v.name).length === uploadFiles.length
    ) {
      const _emptyFile = new File([], "");
      setUploadFiles([...uploadFiles, _emptyFile]);
    }
  };

  const setUploadFile = (file: File, index: number) => {
    let _emptyFile: File | undefined = undefined;
    if (uploadFiles.length < MAX_UPLOAD_FILES_COUNT) {
      _emptyFile = new File([], "");
    }
    const _uploadFiles = [...uploadFiles];
    _uploadFiles[index] = file;
    if (_emptyFile) _uploadFiles.push(_emptyFile);

    setUploadFiles(_uploadFiles);
  };

  const deleteUploadFile = (index: number) => {
    const _uploadFiles = [...uploadFiles];
    _uploadFiles.splice(index, 1);

    let _emptyFile: File | undefined = undefined;
    if (
      _uploadFiles.length < MAX_UPLOAD_FILES_COUNT &&
      _uploadFiles.filter((_v) => _v.name).length === _uploadFiles.length
    ) {
      _emptyFile = new File([], "");
    }
    if (_emptyFile) _uploadFiles.push(_emptyFile);
    setUploadFiles(_uploadFiles);
  };

  // const showAddUploadFilesButton = () => {
  //   if (uploadFiles.length >= MAX_UPLOAD_FILES_COUNT) return false;
  //   if (
  //     uploadFiles.length > 0 &&
  //     uploadFiles[uploadFiles.length - 1].name === ""
  //   )
  //     return false;
  //   return true;
  // };

  useEffect(() => {
    addUploadFiles();
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["fileUploads"]}>
        {uploadFiles.map((uploadFile, index) => {
          return (
            <FileUpload
              key={index}
              setFile={setUploadFile}
              file={uploadFile}
              index={index}
              id={"id" + index}
              deleteUploadFile={deleteUploadFile}
            />
          );
        })}

        {/* {showAddUploadFilesButton() && (
          <div className="text-center">
            <button className="btn" onClick={addUploadFiles}>
              <img src={AddIcon} width="55px" height="55px" alt="Add Icon" />
            </button>
          </div>
        )} */}
      </div>
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
              setUploadFilesInParent(uploadFiles);
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
            onClick={() => {
              setUploadFilesInParent(uploadFiles);
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

export default DocumentPicker;
