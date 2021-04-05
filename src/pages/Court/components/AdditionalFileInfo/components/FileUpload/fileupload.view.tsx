import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AddLargeIcon from "../../../../../../assets/icons/audioInfo/add.png";
import CheckIcon from "../../../../../../assets/icons/audioInfo/check.png";
import DeleteIcon from "../../../../../../assets/icons/audioInfo/delete.png";

interface FileUploadViewProps {
  setFile: (file: File, index: number) => void;
  deleteUploadFile: (index: number) => void;
  id: string;
  index: number;
  file: File;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",

    "& > *": {
      marginLeft: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const FileUploadView: React.FC<FileUploadViewProps> = ({
  setFile,
  id,
  file,
  index,
  deleteUploadFile,
}) => {
  const handleUpload = (event: any) => {
    setFile(event.target.files[0], index);
    event.target.value = null;
  };

  const handleDelete = () => {
    deleteUploadFile(index);
    alert("File Deleted successfully");
  };

  const classes = useStyles();

  return (
    <div id="upload-box" style={{ margin: "10px" }}>
      <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          multiple
          type="file"
        />
        <input
          className={classes.input}
          id={`icon-button-file-${id}`}
          type="file"
          onChange={handleUpload}
        />
        <label htmlFor={`icon-button-file-${id}`}>
          <img
            src={file.name ? CheckIcon : AddLargeIcon}
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            alt="FileUpload"
          />
          {file.name && <span className="ml-2">{file.name.slice(0, 25)}</span>}
        </label>
        {file.name && (
          <img
            src={DeleteIcon}
            onClick={handleDelete}
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            alt="Delete Icon"
          />
        )}
      </div>
    </div>
  );
};

export default FileUploadView;
