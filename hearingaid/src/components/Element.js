import React, { useState } from 'react';
import ObjectA from './images/ObjectB.png';

const objects = [
  { id: 1, name: 'ObjectA', sound: '' },
  { id: 2, name: 'ObjectB', sound: '' },
  { id: 3, name: 'ObjectC', sound: '' },
  // Add more objects as needed
];

const sequence = [1, 2, 3]; // Example fixed sequence, modify as needed

const SoundComponent = () => {
  const [clickedObjects, setClickedObjects] = useState([]);

  const handleClick = (objectId) => {
    setClickedObjects(prev => [...prev, objectId]);
  };

  const checkSequence = () => {
    if (clickedObjects.join(',') === sequence.join(',')) {
      alert('Correct sequence!');
      // You can implement your reward logic here
    } else {
      alert('Incorrect sequence. Try again!');
      setClickedObjects([]); // Reset clicked objects
    }
  };

  return (
    <div className="relative h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" >
        {/* Render objects */}
        {objects.map(obj => (
            
          <div
            key={obj.id}
            className="absolute object-clickable z-10"
            // style={{ top: obj.position.y, left: obj.position.x }}
            onClick={() => handleClick(obj.id)}
          >
            {console.log(obj.name)}
            {/* Display object */}
            {/* <img src={`public/images/${obj.name}`} alt={obj.name} /> */}
            {/* <img src={'./images/ObjectB.png'} alt={obj.name} /> */}
            <img src={`./images/${obj.name}.png`} alt={obj.name} />

          </div>
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={checkSequence}>
        Check Sequence
      </button>
    </div>
  );
};

export default SoundComponent;
