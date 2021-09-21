const wave1 = document.querySelector('#wave1');
const wave2 = document.querySelector('#wave2');
const wave3 = document.querySelector('#wave3');
const wave4 = document.querySelector('#wave4');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  wave1.style.backgroundPositionX = `calc(500px * var(--i) + ${4 * scrollY}px)`;
  wave2.style.backgroundPositionX = `calc(500px * var(--i) + ${
    -4 * scrollY
  }px)`;
  wave3.style.backgroundPositionX = `calc(500px * var(--i) + ${2 * scrollY}px)`;
  wave4.style.backgroundPositionX = `calc(500px * var(--i) + ${
    -2 * scrollY
  }px)`;
});
