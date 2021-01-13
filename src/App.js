import React from "react";
import "./styles.css";
import { useState } from "react";
import image1 from "./2000 note.jpg";
import image2 from "./500 note.jpg";
import image3 from "./100 note.jpg";
import image4 from "./20 note.jpg";
import image5 from "./10 note.jpg";
import image6 from "./5 coin.PNG";
import image7 from "./1 coin.PNG";

export default function App() {
  var [opmsg, setOpmsg] = useState();
  var [res1, setRes1] = useState("");
  var [res2, setRes2] = useState("");
  var [res3, setRes3] = useState("");
  var [res4, setRes4] = useState("");
  var [res5, setRes5] = useState("");
  var [res6, setRes6] = useState("");
  var [res7, setRes7] = useState("");
  var [count1, setCount1] = useState(0);
  var [count2, setCount2] = useState(0);
  var [count3, setCount3] = useState(0);
  var [count4, setCount4] = useState(0);
  var [count5, setCount5] = useState(0);
  var [count6, setCount6] = useState(0);
  var [count7, setCount7] = useState(0);
  var data1, data2;
  var quantity = ["", "", "", "", "", ""];
  function storeValue1(event) {
    data1 = event.target.value;
  }
  function storeValue2(event) {
    data2 = event.target.value;
  }
  function change(data) {
    var curr, val;
    if (data >= 2000) {
      curr = 2000;
      val = 0;
    } else if (data >= 500) {
      curr = 500;
      val = 1;
    } else if (data >= 100) {
      curr = 100;
      val = 2;
    } else if (data >= 20) {
      curr = 20;
      val = 3;
    } else if (data >= 10) {
      curr = 10;
      val = 4;
    } else if (data >= 5) {
      curr = 5;
      val = 5;
    } else if (data >= 1) {
      curr = 1;
      val = 6;
    }

    for (var i = 1; data >= curr; i++) {
      data = data - curr;
      quantity[val] = " " + i + " - " + curr + " note";
      if (curr === 2000) {
        setCount1(i);
      }
      if (curr === 500) {
        setCount2(i);
      }
      if (curr === 100) {
        setCount3(i);
      }
      if (curr === 20) {
        setCount4(i);
      }
      if (curr === 10) {
        setCount5(i);
      }
      if (curr === 5) {
        setCount6(i);
      }
      if (curr === 1) {
        setCount7(i);
      }
    }

    if (data !== 0) {
      change(data);
    }
  }
  function startProcess() {
    var op = data2 - data1;
    setOpmsg(op);
    change(op);
    for (var j = 0; j < quantity.length; j++) {
      if (j === 0) {
        setRes1(quantity[j]);
      }
      if (j === 1) {
        setRes2(quantity[j]);
      }
      if (j === 2) {
        setRes3(quantity[j]);
      }
      if (j === 3) {
        setRes4(quantity[j]);
      }
      if (j === 4) {
        setRes5(quantity[j]);
      }
      if (j === 5) {
        setRes6(quantity[j]);
      }
      if (j === 6) {
        setRes7(quantity[j]);
      }
    }
  }

  return (
    <div className="App">
      <h1>Cash Register</h1>

      <label> Bill Amount: </label>
      <input
        type="number"
        id="bill"
        name="bill"
        onChange={storeValue1}
        min="1"
      />

      <label> Cash Given: </label>
      <input type="number" id="cash" name="cash" onChange={storeValue2} />
      <div>
        <button onClick={startProcess}>Submit</button>
        <button onClick={() => window.location.reload(false)}>Reset</button>
      </div>
      <div className="result-board">
        <p>Return Amount </p>
        <span className="result"> {opmsg}</span>
      </div>
      <div className="changeList">
        <span> {res1} </span>
        {[...Array(count1)].map((el, index) => (
          <img src={image1} alt="2000" width="100" height="50" />
        ))}
        <br />
        <span> {res2} </span>
        {[...Array(count2)].map((el, index) => (
          <img src={image2} alt="500" width="100" height="50" />
        ))}
        <br />
        <span> {res3} </span>
        {[...Array(count3)].map((el, index) => (
          <img src={image3} alt="100" width="100" height="50" />
        ))}
        <br />
        <span> {res4} </span>
        {[...Array(count4)].map((el, index) => (
          <img src={image4} alt="100" width="100" height="50" />
        ))}
        <br />
        <span> {res5} </span>
        {[...Array(count5)].map((el, index) => (
          <img src={image5} alt="100" width="100" height="50" />
        ))}
        <br />
        <span> {res6} </span>
        {[...Array(count6)].map((el, index) => (
          <img src={image6} alt="100" width="70" height="50" />
        ))}
        <br />
        <span> {res7} </span>
        {[...Array(count7)].map((el, index) => (
          <img src={image7} alt="100" width="70" height="50" />
        ))}
      </div>
    </div>
  );
}
