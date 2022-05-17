/*This add anchor hyperlinks to all buttons in the panel*/

var buttons = document.getElementsByClassName('button');
var subpages = [ // hrefs from the anchors
  'index.html',
  'map.html',
  'not_flowers.html',
  'prezenty.html',
  'usimages.html',
  'else.html'
];

function getPureFilename(path) {
  /*This function takes the path to a file as input (it looks sort of like
  this: file:///D:/Piotrek/AniaDarekStrona/index.html) and returns pure
  filename (index.html here)*/
  let slash_inx = path.lastIndexOf('/'); // Pure filename begins after last slash in the path
  path = path.slice(slash_inx + 1); //Don't include the slash
  return path;
};

function fadeOutButton() {
  /*This fades out button referring to this page, so you know which page you are on*/
  buttons = document.getElementsByClassName('button'); // Var 'buttons' gotta be refreshed for some reasons
  for (var i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let buttonHref = getPureFilename(button.parentNode.href); // Get the path to a button's subpage and simplify it
    let me = getPureFilename(window.location.pathname); // Get the name of this page and simplify it

    // Does the button refer to this page?
    if (me === buttonHref) {
      button.style = "opacity: 70%;";
    };
  };
};

/*This 'wraps' all the buttons with anchors to appropriate subpages*/
for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let a = document.createElement('a');
  a.href = subpages[i];

  button.parentNode.replaceChild(a, button);
  a.appendChild(button);

};

fadeOutButton();

/*This makes button bigger when mouse is over - a nice visual effect*/
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', function() {
    this.style = "width: 90%";
    fadeOutButton();
  });

  buttons[i].addEventListener('mouseout', function () {
    this.style = "width: 80%";
    fadeOutButton();
  });
}
