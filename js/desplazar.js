function logItem(e) {
    const item = document.querySelector(`[data-id=${e.target.id}]`);
    item.toggleAttribute('hidden');
  }
  
  const chapters = document.querySelectorAll('details');
  chapters.forEach((chapter) => {
    chapter.addEventListener('toggle', logItem);
  });