document.addEventListener('scroll', function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('header').classList.add('nav-scroll');
  } else {
    document.querySelector('header').classList.remove('nav-scroll');
  }
});

// // hamburger menu event listener
// document
//   .querySelector('.hamburger-container')
//   .addEventListener('click', function () {
//     const hiddenElements = document.querySelectorAll('.hidden');
//     const contentContainer = document.querySelectorAll('.content-container');

//     if (hiddenElements.length === 0) {
//       contentContainer.forEach((element) => {
//         element.classList.add('hidden');
//         element.style.pointerEvents = 'none';
//       });

//       // hamburgerNavContainer.style.display = 'unset';
//     } else {
//       contentContainer.forEach((element) => {
//         element.classList.remove('hidden');
//         element.style.pointerEvents = 'all';
//       });

//       // hamburgerNavContainer.style.display = 'none';
//     }
//   });
