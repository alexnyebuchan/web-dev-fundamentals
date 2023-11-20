import terms from '../../terms.json';

const Main = () => {
  return (
    <div className="main-container">
      <div className="card-container">
        <h1>{terms[0].title}</h1>
        <p>{terms[0].definition}</p>
      </div>
    </div>
  );
};

export default Main;
