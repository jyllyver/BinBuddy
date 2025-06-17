
import React from "react";

const ResultPopup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2 className="h2">Result</h2>
        <p>{message}</p>
        <button onClick={onClose} className="button">Home</button>
      </div>
    </div>
  );
};

export default ResultPopup;