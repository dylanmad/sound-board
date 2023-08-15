var preset_1 = ["kick_2","kick_4","clap_8","clap_14","snare_1","snare_13","cymbal_1","cymbal_4","hihat_1","hihat_3","hihat_4","hihat_12","tom_2","tom_3","tom_6","tom_13"];
var preset_2 = ["kick_4","kick_7","clap_4","clap_7","snare_2","snare_10","cymbal_4","cymbal_8","hihat_1","hihat_9","hihat_10","hihat_11","tom_1","tom_5","tom_6","tom_7"];    
var preset_num = [1,2];
var preset_position = 0;

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

function updatePads() {
    var presetLabel = document.getElementById('presetLabel');
    presetLabel.innerHTML = 'Preset ' + preset_num[preset_position];
    // Call the function with different values
    for (var i = 0; i < 16; i++){

        if (preset_num[preset_position] == 1) {
            var asset_path = '/assets/preset-' + preset_num[preset_position] + '/' + preset_1[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label);
        } else if (preset_num[preset_position] == 2) {
            var asset_path = '/assets/preset-' + preset_num[preset_position] + '/' + preset_2[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label);
        }

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




/* Creating pad buttons and loading them with preset-1 assets */
document.addEventListener('turbo:load', function() {
    console.log('first: ' + preset_position);
    // Listens for last and next button presses for new preset
    document.getElementById('nextButton').addEventListener('click', function() {
        console.log("Next Preset");
        preset_position++;
        if (preset_position < 0) {
            preset_position = preset_num.length - 1;
        } else if (preset_position > preset_num.length - 1) {
            preset_position = 0;
        }
        console.log('next: ' + preset_position);
    
    });
    
    document.getElementById('backButton').addEventListener('click', function() {
        console.log("Last Preset");
        preset_position--;
        if (preset_position < 0) {
            preset_position = preset_num.length - 1;
        } else if (preset_position > preset_num.length - 1) {
            preset_position = 0;
        }
        console.log('last: ' + preset_position);
    
    });
    

    updatePads();
    buttonAudio();


});



