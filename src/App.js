import Introduction from "./01_introduction/Index";
import Variable from "./02_variable/Variable";
import Props from "./03_props/Props";
import State from "./04_state/State";
import Effect from "./05_effect/Effect";
import Test from "./06_test/Test";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Introduction />
      <Variable />
      <Props />
      <State />
      <Effect />
      <Test />
    </div>
  );
}
