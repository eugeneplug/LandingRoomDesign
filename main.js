// popUp burger

let burgerBtn = document.querySelector('.burger');
let burgerBlock = document.querySelector('.burgerBlock');

burgerBtn.addEventListener('click', function() {
    if (burgerBlock.style.display === 'block') {
        burgerBlock.classList.add('slideOutToBottom'); // Добавляем класс с анимацией закрытия
       document.body.style.overflow = 'auto'; // Включаем прокрутку
      setTimeout(() => {
        burgerBlock.style.display = 'none';
        burgerBlock.classList.remove('slideOutToBottom'); // Удаляем класс анимации
      }, 400); // Предполагается, что анимация длится 0.5 секунды
    } else {
        burgerBlock.style.display = 'block';
        burgerBlock.classList.add('slideInFromBottom'); // Добавляем класс с анимацией открытия
       document.body.style.overflow = 'hidden'; // Запрещаем прокрутку
    }
  });

  // появление элементов при прокрутке 

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

