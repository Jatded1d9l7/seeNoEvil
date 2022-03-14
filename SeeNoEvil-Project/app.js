const closedFace = document.queryselctor('.closed')
const openFace = document.queryselctor('.open')

// Add event listener
closedFace.addEventListener('click', () => {
  if(openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active')
  }
});

openFace.addEventListener('click', () => {
  if(closedFace.classList.contains('closed')){
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});
