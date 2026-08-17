const inputValidation = () => {
  document.addEventListener("input", (e) => {
    const elem = e.target;
    if (elem.tagName !== "INPUT" && elem.tagName !== "TEXTAREA") return;
    const type = elem.type || "";
    const placeholder = elem.placeholder || "";
    let pattern;

    if (type === "email") {
      pattern = /[^a-zA-Z0-9@\-_.!~*']/g;
    } else if (type === "tel") {
      pattern = /[^0-9()\-]/g;
    } else if (type === "text" && !elem.classList.contains("calc-item")) {
      pattern = /[^а-яА-ЯёЁ\s-]/g;
    } else if (elem.classList.contains("calc-item")) {
      pattern = /[^\d]/g;
    } else if (placeholder === "Ваше сообщение") {
      pattern = /[^а-яА-ЯёЁ\s-]/g;
    } else {
      return;
    }
    elem.value = elem.value.replace(pattern, "");
  });
};
export default inputValidation;
