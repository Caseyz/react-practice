import { observer } from "mobx-react";

function App({ state }) {
  return (
    <div
      className="App"
      style={{
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>{state.count}</span>
      <button
        onClick={() => {
          state.increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          state.decrement();
        }}
      >
        -
      </button>
    </div>
  );
}

export default observer(App);
