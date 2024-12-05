// src/ImageUpload.js
import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { load } from '@tensorflow-models/mobilenet';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);
      classifyImage(imgUrl);
    }
  };

  const classifyImage = async (imgUrl) => {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.onload = async () => {
      const model = await load();
      const predictions = await model.classify(img);

      debugger
      setPredictions(predictions);
    };
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" />}
      <ul>
        {predictions.map((pred, index) => (
          <li key={index}>{pred.className}: {Math.round(pred.probability * 100)}%</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageUpload;