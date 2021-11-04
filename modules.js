// types
const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";
const CALCULATION = "CALCULATION";
const CLEAR = "CLEAR";
const SWAP = "SWAP";
const TOGGLE_NEGATIVE = "TOGGLE_NEGATIVE";

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

export const pressClear = () => ({
  type: CLEAR,
});

export const pressSwap = () => ({
  type: SWAP,
});

export const processToggle = (idx) => ({
  type: TOGGLE_NEGATIVE,
  payload: idx,
});

const getCalculatedValue = (x, y, operationType) => {
  if (operationType === "pow") {
    return y ** x;
  } else if (operationType === "+") {
    return y + x;
  } else if (operationType === "-") {
    return y - x;
  } else if (operationType === "/") {
    return y / x;
  } else if (operationType === "X") {
    return y * x;
  }

  return 0;
};

const toggleNegative = (num) => {
  if (num.startsWith("-")) {
    return num.slice(1);
  }
  return `-${num}`;
};

const initialState = { stack: [], inputState: "replace" };
// inputState would be append or replace or push

//  ...state.stack.slice(1) means that
// a = [1, 3];
// b = [2];
// c = [...a, ...b];
// d = [1, 3, 2];
export const reducer = (state = initialState, { type, payload }) => {
  console.log(state.stack, type, payload);
  switch (type) {
    case CALCULATION:
      return {
        stack: [
          `${getCalculatedValue(
            parseFloat(state.stack[0]),
            parseFloat(state.stack[1]),
            payload
          )}`,
          ...state.stack.slice(2),
        ],
        inputState: "push",
      };

    case ENTER:
      return {
        stack: [state.stack[0] || "0", ...state.stack],
        inputState: "replace",
      };

    case CLEAR:
      return initialState;

    case SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: "push",
      };

    case TOGGLE_NEGATIVE:
      return {
        stack: state.stack.map((num, idx) =>
          payload === idx ? toggleNegative(num) : num
        ),
        inputState: state.inputState,
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
