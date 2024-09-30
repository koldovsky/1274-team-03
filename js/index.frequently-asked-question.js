document.querySelectorAll('.frequently-asked-questions__item-btn').forEach(button => {
    button.addEventListener('click', function() {
      const item = this.parentElement;
      const content = item.querySelector('.frequently-asked-questions__content');
      item.classList.toggle('active');
      document.querySelectorAll('.frequently-asked-questions__item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.frequently-asked-questions__content').style.maxHeight = 0;
        }
      });
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
  