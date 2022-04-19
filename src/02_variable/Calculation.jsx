const Calculation = () => {
  // 数字を書き換えて画面に反映されることを確認しよう！
  const num = 30;
  const coefficient = 2;
  const odd = "奇数";
  const even = "偶数";
  return (
    <div>
      {num} × {coefficient} は {num * coefficient}です
      <br />
      {/* 計算結果が偶数か奇数かを判定しよう */}
      これは{odd}です
      <br />
      {/* ヒント */}
      {false && "このテキストは表示されません"}
      <br />
      {true && "このテキストは表示されます"}
      <br />
      {true
        ? "三項演算子ではtrueの方が表示されます"
        : "falseの方は表示されません"}
    </div>
  );
};
export default Calculation;
