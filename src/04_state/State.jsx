import NotStateCounter from "./NotStateCounter";
import StateCounter from "./StateCounter";
import Form from "./Form";

const State = () => {
  return (
    <div className="section">
      <div>04_State</div>
      <NotStateCounter />
      <hr />
      <StateCounter />
      <hr />
      <Form />
    </div>
  );
};
export default State;
