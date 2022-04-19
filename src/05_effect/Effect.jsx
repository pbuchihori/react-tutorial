import React, { useState, useEffect } from "react";

const Effect = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [num3, setNum3] = useState(1);
  const [num4, setNum4] = useState(1);
  const [answer, setAnswer] = useState(0);

  // 副作用(effect)を処理します
  useEffect(() => {
    // 第一引数:処理内容callback
    setAnswer(Number(num1));
    // 第二引数:依存配列(どの値が変わった時に実行するか)
  }, [num1]);

  return (
    <div className="section">
      <div>05_Effect</div>
      <div>
        <label htmlFor="name">num1:</label>
        <input
          type="number"
          name="num1"
          id="num1"
          value={num1}
          onChange={(event) => setNum1(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">num2:</label>
        <input
          type="number"
          name="num2"
          id="num2"
          value={num2}
          onChange={(event) => setNum2(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">num3:</label>
        <input
          type="number"
          name="num3"
          id="num3"
          value={num3}
          onChange={(event) => setNum3(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">num4:</label>
        <input
          type="number"
          name="num4"
          id="num4"
          value={num4}
          onChange={(event) => setNum4(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">answer:{answer}</label>
      </div>
    </div>
  );
};

export default Effect;
