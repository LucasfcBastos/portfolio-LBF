import './buttomNormal.css';

function ButtomNormal({ text, onClick }) {
  return (
    <button className="buttomNormal" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtomNormal;
