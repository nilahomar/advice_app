import React, { useEffect, useState } from "react";
import axios from "axios";
import "./advice.css";

function Advice() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    //get random advices from advice slip json API
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const responseAdvice = response.data.slip.advice;
        setAdvice(responseAdvice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, [advice]);

  return (
    <div className="advice">
      <div className="app">
        <div className="card">
          <h2>{advice}</h2>
        </div>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!!</span>
        </button>
      </div>
    </div>
  );
}

export default Advice;
