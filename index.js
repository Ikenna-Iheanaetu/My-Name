// Variables

var openBtn = document.querySelector('#open-btn');

var modalContainer = document.querySelector('#modal-container');

var closeBtn = document.querySelector('#close-btn');

// Event Listeners

openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(evt) {
    
    if(evt.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})