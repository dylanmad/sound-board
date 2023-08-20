// Default preset files for percussion
var preset_plate = ["kick_1","kick_2","clap_1","clap_2","snare_1","snare_2","cymbal_1","cymbal_2","hihat_1","hihat_2","hihat_3","hihat_4","tom_1","tom_2","tom_3","tom_4"];
// Default preset files for keys
var preset_keys = ["c6","b5","asharp5","a5","gsharp5","g5","fsharp5","f5","e5","dsharp5","d5","csharp5","c5","b4","asharp4","a4"];  
var preset_num = [1,2,3,4,5];
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

    /*console.log('preset label change');
    var presetLabel = document.getElementById('presetLabel');
    presetLabel.innerHTML = 'Preset ' + preset_num[preset_position];*/

    // Call the function with different values
    for (var i = 0; i < 16; i++){
        if (preset_num[preset_position] < 4) {
            var asset_path = '/assets/preset-' + preset_num[preset_position] + '/' + preset_plate[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label);
        } else {
            var asset_path = '/assets/preset-' + preset_num[preset_position] + '/' + preset_keys[i];
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


document.addEventListener('turbo:load', function() {
    console.log('turbo:load event fired');       

    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'nextButton') {
    
            console.log('Next Preset button clicked');
            preset_position++;
            if (preset_position > preset_num.length - 1) {
                preset_position = 0;
            }
            console.log('next: ' + preset_position);
    
    
        } else if (event.target.id === 'backButton') {
            console.log('Last Preset button clicked');
            preset_position--;
            if (preset_position < 0) {
                preset_position = preset_num.length - 1;
            } 
            console.log('last: ' + preset_position);
            
        } 
            
    });
    
    console.log('update');
    updatePads();
    console.log('audio');
    buttonAudio();
    

});


document.getElementById("back-link").addEventListener("click", function() {
    window.close();
  });

  document.getElementById("sub-link").addEventListener("click", function() {
    window.close();
  });


  

