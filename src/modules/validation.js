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

  document.addEventListener("blur", (e) => {
    const elem = e.target;

    if (elem.tagName !== "INPUT" && elem.tagName !== "TEXTAREA") return;

    const type = elem.type || "";
    const placeholder = elem.placeholder || "";
    let normalizedValue = elem.value;
    if (type === "email") {
      normalizedValue = normalizedValue.replace(/[^a-zA-Z0-9@\-_.!~*']/g, "");
    } else if (type === "tel") {
      normalizedValue = normalizedValue.replace(/[^0-9()\-]/g, "");
    } else if (elem.classList.contains("calc-item")) {
      normalizedValue = normalizedValue.replace(/[^\d]/g, "");
    } else if (type === "text" || placeholder === "Ваше сообщение") {
      normalizedValue = normalizedValue.replace(/[^а-яА-ЯёЁ\s-]/g, "");
    } else {
      return;
    }
    if (!elem.classList.contains("calc-item")) {
      normalizedValue = normalizedValue.replace(/[-\s]{2,}/g, " ");
      normalizedValue = normalizedValue.replace(/^[-\s]+|[-\s]+$/g, "");
    }

    if (type === "text" && !elem.classList.contains("calc-item")) {
      normalizedValue = normalizedValue
        .toLowerCase()
        .replace(
          /(^|[-\s])([а-яё])/g,
          (match, sep, char) => sep + char.toUpperCase(),
        );
    }

    elem.value = normalizedValue;
  });
};

export default inputValidation;
