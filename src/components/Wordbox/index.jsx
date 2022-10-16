import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish, active, onMistake }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  const handleKeyUp = (e) => {
    //console.log(e.key);
    //console.log(lettersLeft);
    //console.log(lettersLeft.substring(1));
    if (lettersLeft[0] === e.key) {
      setMistake(false);
      if (lettersLeft.length > 1) {
        setLettersLeft(lettersLeft.substring(1));
      } else {
        onFinish();
      }
    } else {
      setMistake(true);
      onMistake();
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('keyup', handleKeyUp);
      return () => document.removeEventListener('keyup', handleKeyUp);
    }
  }, [lettersLeft, active, onMistake]);

  return (
    <div className={`wordbox ${mistake && 'wordbox--mistake'}`}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
