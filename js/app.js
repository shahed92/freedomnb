let navItem = document.querySelectorAll('.nav-item');

navItem.forEach((btn) => {
  btn.addEventListener('click', function () {
    navItem.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  });
});
