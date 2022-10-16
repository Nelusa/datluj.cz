import React, { useState, useEffect } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size) => {
  const sizeIndex =
    size === undefined ? Math.floor(Math.random() * wordList.length) : size - 3;

  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }

  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState(['jahoda', 'malina', 'okurka']);
  const [mistakesCount, setMistakesCount] = useState(0);

  const handleFinish = () => {
    // tady si musíme nastavit nové pole s tím, že se první prvek odebere, ale délka zůstane stejná --> ...words.slice(0),
    setWords([...words.slice(1), generateWord(10)]);
  };

  const handleMistake = () => {
    setMistakesCount(mistakesCount + 1);
  };

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakesCount}</div>
      <div className="stage__words">
        {words.map((word, index) => (
          <Wordbox
            word={word}
            key={word}
            onFinish={handleFinish}
            // pouze první prvek je aktivní (index === 0)
            active={index === 0 ? true : false}
            onMistake={handleMistake}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
