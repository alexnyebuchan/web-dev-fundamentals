import { useState, useEffect, FC } from "react";
import Footer from "./Footer";
import { Term } from "../types/term";
import Icon from "../assets/icons/dice.svg";

interface MainProps {
  terms: Term[];
}

const Main: FC<MainProps> = ({ terms }) => {
  const [randomTermIndex, setRandomTermIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

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
    const newTermIndex = Math.floor(Math.random() * terms.length);
    console.log(previousIndex, newTermIndex);
    if (previousIndex === newTermIndex) {
      changeTerm();
    } else {
      setRandomTermIndex(newTermIndex);
      setPreviousIndex(newTermIndex);

      changeBackground();
    }
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
