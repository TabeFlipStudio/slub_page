/*This adds 'Booked' marker to presents with class .booked, which is to be
assigned manually to a present from the list*/
var listItems = document.getElementsByTagName('li')
for (var i = 0; i < listItems.length; i++) {
  let item = listItems[i];

  if (item.className === 'booked') {
    var newMarker = document.createElement('div');
    newMarker.className = 'booked-marker'; // Format the marker
    newMarker.innerHTML = 'Zajęte'
    item.appendChild(newMarker);
  };
};
