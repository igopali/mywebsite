const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
    body.classList.toggle('dark-mode');
  
    const modeMessage = body.classList.contains('dark-mode') ?
      'Dark-mode':"LightMode"
  
    modeStatus.innerText = "Currently in " + modeMessage;
  }
  modeToggle.addEventListener('click', toggleMode);




  const images = document.querySelectorAll('#slider1 img');
  const previousImage = document.getElementById("prev");
  const nextImage = document.getElementById("next");
  let currentIndex = 0;
  function reset() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
  }
  function initializeSlider() {
    reset();
    images[currentIndex].classList.add('active');
  }
  function slideLeft() {
    reset();
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    images[currentIndex].classList.add('active');
  }
  
  function slideRight() {
    reset();
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    images[currentIndex].classList.add('active');
  }
  initializeSlider();
  
  previousImage.addEventListener('click', function() {
    slideLeft();
  });
  
  nextImage.addEventListener('click', function() {
    slideRight();
  });

  // Write your code here
const draggables = document.querySelectorAll('.draggable'); 
const dropzone = document.querySelector('.dropzone'); 


// For each draggable item, set data for drop zone (draggable element ID) and add "dragging-active" class
for (const draggable of draggables) {
  draggable.addEventListener('dragstart', (event) => { 
    event.dataTransfer.setData('text/plain', event.target.id);
    draggable.classList.add('dragging-active'); 
  });
  
  // Remove "dragging-active" class when dragging ends
  draggable.addEventListener('dragend', (event) => { 
    draggable.classList.remove('dragging-active');
  })
}

// Allow drop (drop not allowed by default)
dropzone.addEventListener('dragover', (event) => { 
  event.preventDefault(); 
}); 


// Append current draggable element to dropzone
dropzone.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  const element = document.getElementById(draggableId);
  
  // Check if dropzone has only one child element and if it is the placeholder element
  // If TRUE, use replaceChild() to the replace the placeholder with a draggable element
  // If FALSE, use appendChild() to add the draggable element to the dropzone
  if (
    dropzone.children.length === 1 
    && 
    dropzone.children[0].classList.contains('dropzone-placeholder')
  ) {
    dropzone.replaceChild(element, dropzone.children[0]); 
  } else {
    dropzone.appendChild(element); 
  }
});
    