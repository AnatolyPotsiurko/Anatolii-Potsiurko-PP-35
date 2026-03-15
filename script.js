"use strict";
import {
  normalizeNumberString,
  compute,
  formatResult,
  inputDigit,
  inputDot,
  backspace,
  toggleSign,
  percent
} from "./src/calculator.js";

const display = document.getElementById("display");
const keys = document.querySelector(".keys");

// Стан калькулятора
let current = "0";
let stored = null;
let op = null;
let justEvaluated = false;

function setDisplay(v) {
  current = v;
  display.value = v;
}

function clearAll() {
  stored = null;
  op = null;
  justEvaluated = false;
  setDisplay("0");
}

function handleDigit(d) {
  setDisplay(inputDigit(current, d, justEvaluated));
  justEvaluated = false;
}

function handleDot() {
  setDisplay(inputDot(current, justEvaluated));
  justEvaluated = false;
}

function handleBackspace() {
  if (justEvaluated) {
    clearAll();
    return;
  }
  setDisplay(backspace(current, false));
}

function handleToggleSign() {
  setDisplay(toggleSign(current));
}

function handlePercent() {
  setDisplay(percent(current));
}

function chooseOp(nextOp) {
  const currNum = Number(current);
  if (!Number.isFinite(currNum)) return;

  if (stored === null) {
    stored = currNum;
  } else if (op && !justEvaluated) {
    const res = compute(stored, currNum, op);
    stored = res;
    setDisplay(formatResult(res));
  }

  op = nextOp;
  justEvaluated = true;
}

function equals() {
  if (op === null || stored === null) return;

  const a = stored;
  const b = Number(current);
  if (!Number.isFinite(b)) return;

  const res = compute(a, b, op);
  setDisplay(formatResult(res));

  stored = res;
  op = null;
  justEvaluated = true;
}

// Кліки по кнопках
keys.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const digit = btn.dataset.digit;
  const operator = btn.dataset.op;
  const action = btn.dataset.action;

  if (digit) handleDigit(digit);
  else if (operator) chooseOp(operator);
  else if (action === "dot") handleDot();
  else if (action === "equals") equals();
  else if (action === "clear") clearAll();
  else if (action === "back") handleBackspace();
  else if (action === "sign") handleToggleSign();
  else if (action === "percent") handlePercent();

  display.focus();
});

// Ввід з клавіатури
document.addEventListener("keydown", (e) => {
  const k = e.key;

  if (k >= "0" && k <= "9") handleDigit(k);
  else if (k === ".") handleDot();
  else if (k === "+" || k === "-" || k === "*" || k === "/") chooseOp(k);
  else if (k === "Enter" || k === "=") {
    e.preventDefault();
    equals();
  } else if (k === "Backspace") {
    handleBackspace();
  } else if (k === "Escape") {
    clearAll();
  }
});

// Ініціалізація
display.value = current;
display.addEventListener("input", () => {
  const s = display.value.replace(/[^\d\.\-]/g, "");
  setDisplay(normalizeNumberString(s));
});