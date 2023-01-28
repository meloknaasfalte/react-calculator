import React,{useState} from "react";
import './App.css';

function App() {
  const [data, setData] = useState("");
  console.log(data);
  const calcBtn = [];

  [1,2,3,4,5,6,7,8,9,0].forEach(el => {
    calcBtn.push(
      <button className="calculator__button calculator__button_focus" onClick={e => {
        setData(data + e.target.value)
      }}
      value = {el}
      key = {el}>
        {el}
      </button>
    )
  })

  return (
    <div className="App">
      <div className="calculator">
        <div
        className="calculator__input">
        {data}
        </div>
        <button onClick = {() => {
          setData("");
          console.log(document.querySelector('.calculator__input').value);
          document.querySelector('.calculator__input').value = "";
          }
        } className="calculator__clear calculator__button_focus">Clear</button>
        <div className="calculator__buttons">
          <div className="calculator__buttons-container ">
            {calcBtn}
          </div>
          <div className="calculator__buttons-container ">
            <button className="calculator__button calculator__button-digit calculator__button_focus" value = "+" onClick = {e => setData(data + e.target.value)}>+</button>
            <button className="calculator__button calculator__button-digit calculator__button_focus" value = "-" onClick = {e => setData(data + e.target.value)}>-</button>
            <button className="calculator__button calculator__button-digit calculator__button_focus" value = "*" onClick = {e => setData(data + e.target.value)}>*</button>
            <button className="calculator__button calculator__button-digit calculator__button_focus" value = "/" onClick = {e => setData(data + e.target.value)}>/</button>
            <button className="calculator__button calculator__button-digit calculator__button_focus" value = "="onClick = {e => {
              setData(String(eval(data)));
            }}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
