document.addEventListener('scroll', function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('header').classList.add('nav-scroll');
  } else {
    document.querySelector('header').classList.remove('nav-scroll');
  }
});
