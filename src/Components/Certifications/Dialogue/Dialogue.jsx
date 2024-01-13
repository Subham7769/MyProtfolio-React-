import React, { useState } from "react";

const Dialogue = ({src}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <img src={src} onClick={handleShowDialog} alt="no image" />
      {isOpen && (
        <dialog className="dialog" open onClick={handleShowDialog}>
          <img
            className="image"
            src={src}
            onClick={handleShowDialog}
            alt="no image"
          />
        </dialog>
      )}
    </div>
  );
};

export default Dialogue;
