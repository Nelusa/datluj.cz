import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);

  const [mistake, setMistake] = useState(false);
  // (b) mistake && wordbox wordbox--mistake

  const handleKeyUp = (e) => {
    //console.log(e.key);
    //console.log(lettersLeft);
    //console.log(lettersLeft.substring(1));
    if (lettersLeft[0] === e.key) {
      if (lettersLeft.length > 1) {
        setLettersLeft(lettersLeft.substring(1));
      } else {
        onFinish();
      }
      // setWords(words.slice(0, 1));
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft]);

  return <div className="wordbox">{lettersLeft}</div>;
};

export default Wordbox;
