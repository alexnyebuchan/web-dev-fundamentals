import { useState, useEffect } from 'react';
import terms from '../../terms.json';
import Footer from './Footer';
import Icon from '../assets/icons/dice.svg';

const Main = () => {
  const [randomTermIndex, setRandomTermIndex] = useState(null);
  const [previousIndex, setPreviousIndex] = useState(null);

  const hexNumbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  useEffect(() => {
    changeTerm();
  }, []);

  const changeTerm = () => {
    let newTermIndex = randomTermIndex;
    while (newTermIndex === randomTermIndex) {
      newTermIndex = Math.floor(Math.random() * terms.length);
    }
    setPreviousIndex(randomTermIndex);
    setRandomTermIndex(newTermIndex);
    changeBackground();
    console.log(randomTermIndex);
  };

  const changeBackground = () => {
    let hex1 = '#';
    let hex2 = '#';

    for (let i = 0; i < 6; i++) {
      hex1 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
      hex2 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
      document.body.style.background = `linear-gradient(45deg, ${hex1}, ${hex2})`;
    }
  };

  return (
    <div>
      <nav>
        <div className="menu-item">
          <button onClick={changeTerm}>
            <img src={Icon} alt="Icon" />
            <p>Random Term</p>
          </button>
        </div>
      </nav>
      <main>
        <div className="card-container">
          {randomTermIndex !== null && (
            <>
              <h1>{terms[randomTermIndex].title}</h1>
              <p>{terms[randomTermIndex].definition}</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
