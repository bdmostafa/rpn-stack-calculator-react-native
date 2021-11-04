// types
const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";
const CALCULATION = "CALCULATION";

// actions
export const pressNum = (num) => ({
  type: PRESS_NUM,
  payload: num,
});

export const pressEnter = () => ({
  type: ENTER,
});

export const processCalculation = (operation) => ({
  type: CALCULATION,
  payload: operation,
});

// inputState would be append or replace or push

// a = [1, 3];
// b = [2];
// c = [...a, ...b];
// d = [1, 3, 2];
export const reducer = (
  state = { stack: [], inputState: "replace" },
  { type, payload }
) => {
  console.log(state.stack, type, payload);
  switch (type) {
    case CALCULATION:
      if (payload === "pow") {
        const y = parseFloat(state.stack[0]);
        const x = parseFloat(state.stack[1]);

        return {
          stack: [`${Math.pow(x, y)}`, ...state.stack.slice(2)],
          inputState: "push",
        };
      }

    case ENTER:
      return {
        stack: [state.stack[0] || "0", ...state.stack],
        inputState: "replace",
      };

    case PRESS_NUM:
      if (state.inputState === "append") {
        return {
          ...state,
          stack: [(state.stack[0] || "0") + payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      } else if (state.inputState === "replace") {
        return {
          ...state,
          stack: [payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      } else if (state.inputState === "push") {
        return {
          stack: [payload, ...state.stack],
          inputState: "append",
        };
      }
      break;

    default:
      return state;
  }
};
