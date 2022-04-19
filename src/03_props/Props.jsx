import Greets from "./Greets";

const Props = () => {
  return (
    <div className="section">
      <div>03_Props</div>
      {/* propsの値を書き換えて画面描画が変わることを確認しよう */}
      <Greets name="uchihori" year={2020} />
    </div>
  );
};
export default Props;
