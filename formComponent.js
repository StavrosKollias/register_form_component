// -----Handlers-------Handlers------Handlers---//

function handleClickSubmit() {
  const formInputs = getComponentElements(".register-input");
  forEachElement(formInputs, registerInputErrorChecker);
}

// -----Functions-------Functions-------Functions---//

function registerInputErrorChecker(element) {
  const isEmpty = isEmptyString(element.value);
  isEmpty
    ? addClassToElement(element, "error-input")
    : removeClassFromElement(element, "error-input");

  const elementId = getElementId(element);
  const emailMatch = checkElementIdMatch(elementId, "register-email");

  emailMatch ? registerEmailValidation(element) : false;
}

function registerEmailValidation(element) {
  var emailValid = (emailValid = validateEmail(element.value));

  emailValid
    ? removeClassFromElement(element, "error-input")
    : addClassToElement(element, "error-input");
}

const getComponentElements = (type) => {
  const elements = document.querySelectorAll(type);
  return elements;
};

const forEachElement = (nodeList, operationFunction) => {
  nodeList.forEach((e, i) => {
    operationFunction(e);
  });
};

function isEmptyString(str) {
  return str == "";
}

function addClassToElement(element, className) {
  element.classList.add(className);
}

function removeClassFromElement(element, className) {
  element.classList.remove(className);
}

function changeTextToElement(element, txt) {
  element.innerText = txt;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const getElementId = (element) => {
  return element.id;
};

function checkElementIdMatch(elementID, lookingMatch) {
  return elementID == lookingMatch;
}
