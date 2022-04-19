import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sample from "../Sample";

describe("Sample", () => {
  // 関数のモック
  const onClick = jest.fn();

  beforeEach(() => {
    // コンポーネントの描画
    render(<Sample onClick={onClick} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("「test」が表示されること", () => {
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("ボタンをクリックしたとき,onClickがコールされること", () => {
    // イベント発火
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalledTimes(1);
  });
});
