document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#your-form-id');
    var selectField = document.querySelector('#select-field');
    var hiddenValueField = document.querySelector('#hidden-value');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var selectedValue = selectField.value;
      console.log("Selected Value:", selectedValue);
  
      hiddenValueField.value = selectedValue;
      console.log("Hidden Value Updated:", hiddenValueField.value);
  
      // Rest of your code to handle the response
    });
  });