import { useState } from "react";

const StateCounter = () => {
  // [値,値のsetter]という形で返却される
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>stateを使うバージョン</div>
      <div>count: {count}</div>
      <button
        onClick={() => {
          // 前の値を流用するときは関数形式で書く
          setCount((prev) => prev + 1);
        }}
      >
        カウントアップ!
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        リセット!
      </button>
    </div>
  );
};
export default StateCounter;
