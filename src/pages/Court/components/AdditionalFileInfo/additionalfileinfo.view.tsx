import React, { useState, useEffect } from "react";

import FileUpload from "./components/FileUpload";

// import AddIcon from "../../../../assets/icons/audioInfo/add.png";
import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";
import { FileInfoInterface } from "../../court.model";

const MAX_UPLOAD_FILES_COUNT = 3;

interface AdditionalFileInfoViewProps {
  nextHandler: () => void;
  prevHandler: () => void;
  fileInfoValues: FileInfoInterface;
  setFormDataInParent: (formType: string, formValues: any) => void;
}

const AdditionalFileInfoView: React.FC<AdditionalFileInfoViewProps> = ({
  prevHandler,
  nextHandler,
  fileInfoValues,
  setFormDataInParent,
}) => {
  const [uploadFiles, setUploadFiles] = useState(fileInfoValues.files);

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
    <div className="container">
      <div className="row">
        <div className="col col-6">
          <div
            className="row justify-content-center flex-column"
            style={{ height: "34em" }}
          >
            <h2 style={{ fontSize: "1.8rem" }}>
              Attach Files related to the Circumstance
            </h2>
            <div
              style={{
                borderRadius: "5px",
                border: "3px solid rgb(184, 160, 70)",
                padding: "3rem 0",
                marginTop: "4rem",
              }}
            >
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
                  <button className="btn shadow-none" onClick={addUploadFiles}>
                    <img
                      src={AddIcon}
                      width="55px"
                      height="55px"
                      alt="Add Icon"
                    />
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div className="col col-6 my-auto">
          <img src={DeliverableCollab} alt="Deliverable Collab" />
        </div>
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button
            className="btn btn-custom"
            onClick={() => {
              setFormDataInParent("fileInfo", { files: uploadFiles });
              prevHandler();
            }}
          >
            Previous
          </button>
        </div>
        <div style={{ width: "auto" }}>
          <button
            className="btn btn-custom"
            type="submit"
            onClick={() => {
              setFormDataInParent("fileInfo", { files: uploadFiles });
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

export default AdditionalFileInfoView;
