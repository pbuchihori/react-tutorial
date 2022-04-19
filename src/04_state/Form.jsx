import { useState } from "react";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    passwd: ""
  });
  return (
    <form>
      <div>Form</div>
      <div>
        <label htmlFor="name">氏名:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValue.name}
          onChange={(event) =>
            // スプレッド構文で前の値を設定している
            setFormValue((prev) => ({ ...prev, name: event.target.value }))
          }
        />
      </div>
      {/* Formの残りを完成させよう */}
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="passwd">パスワード:</label>
        <input type="password" />
      </div>
      <div>
        {/* 提出ボタン押下で画面に入力値が表示されるようにしよう！ */}
        <button type="button" onClick={() => {}}>
          提出
        </button>
      </div>
    </form>
  );
};
export default Form;
