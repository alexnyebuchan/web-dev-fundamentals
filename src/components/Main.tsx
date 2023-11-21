import { useState, useEffect } from 'react';
import terms from '../../terms.json';
import Footer from './Footer';
import Icon from '../assets/icons/dice.svg';

const Main = () => {
  const [randomTermIndex, setRandomTermIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(0);

  const hexNumbers: string[] = [
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
    const newTermIndex: number = Math.floor(Math.random() * terms.length);
    if (previousIndex === newTermIndex) {
      changeTerm();
    } else {
      setRandomTermIndex(newTermIndex);
      setPreviousIndex(newTermIndex);

      changeBackground();
    }
  };

  const changeBackground = () => {
    let hex1: string = '#';
    let hex2: string = '#';

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
