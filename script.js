document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    btn.classList.toggle('liked');
  });
});
