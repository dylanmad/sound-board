var form = document.querySelector('#your-form-id');
const playButtons = document.querySelectorAll('.play-button');

function removePartial(container) {

    // Insert the partial HTML into the container
    if (container != null) {
        container.innerHTML = "";
    }
}

function buttonAudio() {
    console.log("first listen");
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(function(button) {
        button.addEventListener('click', function() {
        console.log("second listen");
        const audioPlayer = button.nextElementSibling;
        audioPlayer.play();
        audioPlayer.currentTime = 0;
        });
    });
}

document.addEventListener('turbo:load', function() {



});




