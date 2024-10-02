document.querySelectorAll('.news__article').forEach(article => {
    article.addEventListener('mouseover', () => {
      article.style.transform = 'translateY(-10px)';
      article.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
    });
  
    article.addEventListener('mouseout', () => {
      article.style.transform = 'translateY(0)';
      article.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });