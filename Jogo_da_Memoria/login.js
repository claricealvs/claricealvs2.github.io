const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const buttonBack = document.querySelector(".voltar__button");
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'jogo.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

function voltar(){
  window.location.href = "https://claricealvs.github.io/claricealvs2.github.io/index.html"
}

buttonBack.addEventListener("click", () => {
  voltar()
})