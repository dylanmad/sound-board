/* Creating pad buttons and loading them with preset-1 assets */
document.addEventListener('turbo:load', function() {

    var preset_1 = ["kick_2","kick_4","clap_8","clap_14","snare_1","snare_13","cymbal_1","cymbal_4","hihat_1","hihat_3","hihat_4","hihat_12","tom_2","tom_3","tom_6","tom_13"];
        
    function insertPartial(assetPath, buttonLabel) {
    var rubyCodeContainer = document.getElementById('rubyCodeContainer');

    // Construct the partial HTML
    var partialHTML = `
        <button class="play-button pad-member" data-src="${assetPath}">${buttonLabel}</button>
        <audio class="audio-player">
            <source src="${assetPath}" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
    `;

    // Insert the partial HTML into the container
    rubyCodeContainer.innerHTML += partialHTML;
    }


    var presetLabel = document.getElementById('presetLabel');
    presetLabel.innerHTML = 'Preset 1';


    // Call the function with different values
    for (var i = 0; i < 16; i++){
    var asset_path = '/assets/preset-1/' + preset_1[i];
    var pad_label = 'Pad ' + (i+1);
    insertPartial(asset_path, pad_label);
    }

});

/* Listening for pad button presses */
document.addEventListener("turbo:load", function() {

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

});

