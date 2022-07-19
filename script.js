// This removes the default-on div telling user that they've disabled JS in their browser
// (if they did, this code will not be run so the block will remain)
$(document).ready(function() {
  $('#JS-Not-Found').css('display', 'none');
});

// Avoid scoping issues by encapsulating code inside anonymous function
(function () {
  // variable to store our current state
  var cbstate;

  // bind to the onload event
  window.addEventListener('load', function () {
    // Get the current state from localstorage
    // State is stored as a JSON string
    cbstate = JSON.parse(localStorage.CBState || '{}');

    // Loop through state array and restore checked
    // state for matching elements
    for (var i in cbstate) {
      var el = document.querySelector('input[name="' + i + '"]');
      if (el) el.checked = true;
    }

    // Get all checkboxes that you want to monitor state for
    var cb = document.getElementsByClassName('save-cb-state');

    // Loop through results and ...
    for (var i = 0; i < cb.length; i++) {
      //bind click event handler
      cb[i].addEventListener('click', function (evt) {
        // If checkboxe is checked then save to state
        if (this.checked) {
          cbstate[this.name] = true;
        }

        // Else remove from state
        else if (cbstate[this.name]) {
          delete cbstate[this.name];
        }

        // Persist state
        localStorage.CBState = JSON.stringify(cbstate);
      });
    }
  });
})();

(function ($) {
  $.fn.toJSON = function () {
    var $elements = {};
    var $form = $(this);
    $form.find('input, select, textarea').each(function () {
      var name = $(this).attr('name');
      var type = $(this).attr('type');
      if (name) {
        var $value;
        if (type == 'radio') {
          $value = $('input[name=' + name + ']:checked', $form).val();
        } else if (type == 'checkbox') {
          $value = $(this).is(':checked');
        } else {
          $value = $(this).val();
        }
        $elements[$(this).attr('name')] = $value;
      }
    });
    return JSON.stringify($elements);
  };
  $.fn.fromJSON = function (json_string) {
    var $form = $(this);
    var data = JSON.parse(json_string);
    $.each(data, function (key, value) {
      var $elem = $('[name="' + key + '"]', $form);
      var type = $elem.first().attr('type');

      if (type == 'radio') {
        $('[name="' + key + '"][value="' + value + '"]').prop('checked', true);
      }

      else if (type == 'checkbox' && (value == true || value == 'true')) {
        $('[name="' + key + '"]').prop('checked', true);
      }

      else {
        $elem.val(value);
      }
    });
  };
})(jQuery);

//
// DEMO CODE
//
$(document).ready(function () {
  $('#_save').on('click', function () {
    console.log('Saving form data...');
    var data = $('form#myForm').toJSON();
    console.log(data);
    localStorage['form_data'] = data;

    return false;
  });

  $('#_load').on('click', function () {
    if (localStorage['data']) {
      console.log('Loading form data...');
      console.log(JSON.parse(localStorage['form_data']));
      $('data').fromJSON(localStorage['form_data']);
    }

    else {
      console.log('Error: Save some data first');
    }

    return false;
  });
});
