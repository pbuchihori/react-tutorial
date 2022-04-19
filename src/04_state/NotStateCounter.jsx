const NotStateCounter = () => {
  let count = 1;
  return (
    <div>
      <div>stateを使わないバージョン</div>
      <div>count: {count}</div>
      <button
        onClick={() => {
          count = count + 1;
          console.log(count);
        }}
      >
        カウントアップ!
      </button>
      <button
        onClick={() => {
          count = 0;
        }}
      >
        リセット!
      </button>
    </div>
  );
};
export default NotStateCounter;
