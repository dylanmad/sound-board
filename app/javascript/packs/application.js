// Default preset files for percussion
var preset_plate = ["kick_1","kick_2","clap_1","clap_2","snare_1","snare_2","cymbal_1","cymbal_2","hihat_1","hihat_2","hihat_3","hihat_4","tom_1","tom_2","tom_3","tom_4"];
// Default preset files for keys
var preset_keys = ["c6","b5","asharp5","a5","gsharp5","g5","fsharp5","f5","e5","dsharp5","d5","csharp5","c5","b4","asharp4","a4"];  
var form = document.querySelector('#your-form-id');
var selectField = document.querySelector('#select-field');

var audioForm = document.querySelector('#pre-form-id');
var fileField = document.querySelector('#file-field');

// Default preset value
var selectedValue = "Preset 1";
var rubyCodeContainer = document.getElementById('rubyCodeContainer');



function insertPartial(assetPath, buttonLabel, container) {
    // Construct the partial HTML
    var partialHTML = `
        <button class="play-button pad-member" data-src="${assetPath}">${buttonLabel}</button>
        <audio class="audio-player">
            <source src="${assetPath}" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
    `;
    // Insert the partial HTML into the container
    if (container != null) {
    container.innerHTML += partialHTML;
    }
}




function removePartial(container) {
    var rubyCodeContainer = document.getElementById('rubyCodeContainer');
    // Insert the partial HTML into the container
    if (container != null) {
        container.innerHTML = "";
    }
}

function addPresetLabel(presetLabel,container) {
    var rubyPresetContainer = document.getElementById('rubyPresetContainer');
    var partialHTML = `
    <h1 class="preset-container">Current Preset: ${presetLabel}</h1>
    `;
    // Insert the partial HTML into the container
    if (container != null) {
        container.innerHTML = partialHTML;
    }
}

function updatePads(presetVal,container) {
    // Remove any previous pads
    removePartial(rubyCodeContainer);
    var custom = false;
    // Call the function with different values
    for (var i = 0; i < 16; i++){
        if (presetVal == "Preset 1") {
            var asset_path = '/assets/preset-1/' + preset_plate[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label ,container);
        } else if (presetVal == "Preset 2") {
            var asset_path = '/assets/preset-2/' + preset_plate[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label, container);
        } else if (presetVal == "Preset 3") {
            var asset_path = '/assets/preset-3/' + preset_plate[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label,container);
        } else if (presetVal == "Preset 4") {
            var asset_path = '/assets/preset-4/' + preset_keys[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label,container);
        } else if (presetVal == "Preset 5") {
            var asset_path = '/assets/preset-5/' + preset_keys[i];
            var pad_label = 'Pad ' + (i+1);
            insertPartial(asset_path, pad_label,container);
            
        } else {
            custom = true;
            break;
        }

    }

    if (custom == true) {
        console.log("Custom true");
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
    console.log('turbo loaded');   

    if (form != null) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();
        
            selectedValue = selectField.value;
            console.log("Selected Value:", selectedValue);

            /*if (selectedValue == "please"){
                console.log("Please selected");
            }*/
            if (selectedValue != null) {
                    console.log('label pre');
                    addPresetLabel(selectedValue, rubyCodeContainer);
                    console.log('update pre');
                    updatePads(selectedValue, rubyCodeContainer);
            }
            console.log('audio pre');
            buttonAudio();
        
        });
    }


    // Default soundboard using Preset 1
    if (selectedValue != null) {
        console.log('label');
        addPresetLabel(selectedValue, rubyCodeContainer);
        console.log('update');
        updatePads(selectedValue, rubyCodeContainer);
    }
    console.log('audio');
    buttonAudio();

    
    

});



