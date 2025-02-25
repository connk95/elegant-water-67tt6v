import React, { useState } from 'react';
import Draggable from 'react-draggable';

const DraggableContentBox = () => {
  // Initialize state with default positions
  const [positions, setPositions] = useState({
    box1: { x: 160, y: 240 }, // Initial positions matching your CSS
    // Add more boxes if needed
  });

  // Handler for updating position on drag stop
  const handleStop = (e, data, key) => {
    setPositions((prevPositions) => ({
      ...prevPositions,
      [key]: { x: data.x, y: data.y },
    }));
  };

  return (
    <div>
      <Draggable
        position={positions.box1}
        onStop={(e, data) => handleStop(e, data, 'box1')}
      >
        <div className="content-box box-1">
          <h1>Experimental site</h1>
          <p>Welcome to my experimental website</p>
          <p>
            These text boxes are filled with placeholder text for the time being.
            The content of this website has not yet been decided. The content of
            these text boxes will contain text or information relevant to the
            theme or application of this website.
          </p>
          <button>Button</button>
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableContentBox;
