const loginArea = document.querySelector('.login-area');
const loginAreaInput1 = document.querySelector('.login-area__input');
const loginAreaInput2 = document.querySelector('.login-area__input2');
const loginBtn = document.querySelector('.login-btn');

const preventSubmit = (e) => {
  e.preventDefault();
};

const disableOffChange = (e) => {
  loginAreaInput1.value !== '' && loginAreaInput2.value !== ''
    ? loginBtn.removeAttribute('disabled') //속성값 제거하는 함수
    : null;
};

loginArea.addEventListener('submit', preventSubmit);
loginAreaInput1.addEventListener('change', disableOffChange);
loginAreaInput2.addEventListener('change', disableOffChange);
