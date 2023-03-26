// Importando a biblioteca GSAP
import { gsap } from "gsap";


const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');
const togglePassword = document.querySelector('.toggle-password');
const submitButton = document.querySelector('input[type="submit"]');

togglePassword.addEventListener('click', handleTogglePassword);
submitButton.addEventListener('mouseenter', handleMouseEnterSubmitButton);

function handleSubmit(event) {
  event.preventDefault();
  gsap.fromTo(form, { y: "-100%" }, { y: "0%", duration: 1, ease: "power4.out" });
  gsap.to(submitButton, { scale: 1.1, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)", duration: 0.3 });

  if (isFormValid()) {
    // Animação de sucesso
    gsap.fromTo(form, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power4.out" });
    form.submit();
  } else {
    showErrorMessage();
    // Animação de erro
    gsap.fromTo(errorMessage, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power4.out" });
  }
}

function isFormValid() {
  return usernameInput.value !== '' && passwordInput.value !== '';
}

function showErrorMessage() {
  errorMessage.textContent = 'Nome de usuário ou senha inválidos.';
}

function handleTogglePassword() {
  const passwordType = passwordInput.getAttribute('type');
  const newType = passwordType === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', newType);
  togglePassword.innerHTML = newType === 'password' ? '👁️' : '👁️';
  gsap.to(togglePassword, { rotation: "+=180", duration: 0.3, ease: "power2.out" });
}

function handleMouseEnterSubmitButton() {
  gsap.to(submitButton, { rotation: "+=360", duration: 1, ease: "elastic.out(1, 0.3)" });
}

// Adicionando uma sombra 3D ao formulário
form.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.5), 0 0 0 5px rgba(0, 0, 0, 0.1)";

// Verificando se a API de reconhecimento de voz está disponível
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    if (transcript === "enviar") {
      form.submit();
    }
  };

  recognition.start();
}

// Verificando se o evento de movimento do dispositivo está disponível
if ('DeviceMotionEvent' in window) {
  window.addEventListener("devicemotion", (event) => {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;
    // Animação de inclinação do formulário
    gsap.to(form, { rotationY: x, rotationX: y, duration: 1, ease: "power2.out")
  
    window.addEventListener('load', function() {
        // código aqui
      });
      
