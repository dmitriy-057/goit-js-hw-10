import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
const delayEl = document.querySelector("input[name='delay']");
const stepEl = document.querySelector("input[name='step']");
const amountEl = document.querySelector("input[name='amount']");

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault()
  let step = Number(stepEl.value)
  let amount = Number(amountEl.value)
  let delay = Number(delayEl.value)
  for( let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    .then(i => Notify.success(i))
    .catch(i => Notify.failure(i));
    delay+=step;
  }
  form.reset()
  
}


function createPromise(i, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${i} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${i} in ${delay}ms`)
      }
    }, delay)
  })
}