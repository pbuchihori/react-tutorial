// propsで指定されたものは分割代入で取り出す
const Greets = ({ name, year }) => {
  return (
    <div>
      <p>私の名前は{name}です</p>
      <p>{year}年からPBで働いています</p>
      {/* propsから変数を取り出して自己紹介を追加してみよう */}
    </div>
  );
};
export default Greets;
