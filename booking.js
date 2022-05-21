var inputs = document.getElementsByTagName('input');
inputs = [].slice.call(inputs); // Arrayify the HTMLCollection (return of getElementsByTagName)
inputs.pop(); // Remove the Submit button from the array

/*This is called after clicking the sumbit button; it gets the input values from the textboxes and returns them*/
function getBookInput() {
  let output = '';
  for (var i = 0; i < inputs.length; i++) {
    let data = inputs[i].value;
    output += data + '; ';
  };

  return output;
};

/*This sends the book request to Integromat, which then sends it to Discord Mailbox*/
function sendBookRequest() {
  var request = new XMLHttpRequest();

  request.open("POST", 'https://hook.eu1.make.com/is95jv15aip7mr9nuudvmksxbm5brk9o');
  request.setRequestHeader('Content-type', 'application/json');

  var parameters = {
    username: 'Webhook-to-Discord',
    avatar_url: '',
    content: getBookInput()
  };

  let output = JSON.stringify(parameters);
  request.send(output);
};

/*This empties the textboxes after clicking on them*/
for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', function() {
    this.value = '';
  });
};
