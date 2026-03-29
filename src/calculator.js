"use strict";

export function normalizeNumberString(s) {
  if (s === "" || s === "-" || s === "-0") return s;
  if (s.includes(".")) {
    const [a, b] = s.split(".");
    const na = String(Number(a));
    return `${na}.${b}`;
  }
  return String(Number(s));
}

export function compute(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? NaN : a / b;
    default: return b;
  }
}

export function formatResult(x) {
  if (!Number.isFinite(x)) return "Error";
  const rounded = Math.round((x + Number.EPSILON) * 1e12) / 1e12;
  return String(rounded);
}

export function inputDigit(current, digit, justEvaluated = false) {
  if (justEvaluated) return digit;
  if (current === "0") return digit;
  if (current === "-0") return "-" + digit;
  return current + digit;
}

export function inputDot(current, justEvaluated = false) {
  if (justEvaluated) return "0.";
  if (!current.includes(".")) return current + ".";
  return current;
}

export function backspace(current, justEvaluated = false) {
  if (justEvaluated) return "0";
  if (current.length <= 1 || (current.length === 2 && current.startsWith("-"))) {
    return "0";
  }
  return current.slice(0, -1);
}

export function toggleSign(current) {
  if (current === "0") return current;
  if (current.startsWith("-")) return current.slice(1);
  return "-" + current;
}

export function percent(current) {
  const n = Number(current);
  if (!Number.isFinite(n)) return current;
  return String(n / 100);
}
// Додати цей код в розділ, де ти ініціалізуєш калькулятор
const statusElement = document.createElement('div');
statusElement.textContent = import.meta.env.VITE_APP_STATUS;  // Виводимо значення змінної оточення
statusElement.style.position = 'fixed';
statusElement.style.top = '10px';
statusElement.style.right = '10px';
statusElement.style.background = 'rgba(0,0,0,0.7)';
statusElement.style.color = 'white';
statusElement.style.padding = '5px';
statusElement.style.borderRadius = '5px';

// Додаємо елемент до body
document.body.appendChild(statusElement);