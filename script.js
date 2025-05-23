document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    btn.classList.toggle('liked');
  });
});
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

