/*This add anchor hyperlinks to all buttons in the panel*/

var buttons = document.getElementsByClassName('button')
var subpages = [ // hrefs fro the anchors
  'map.html',
  'usimages.html',
  'usimages.html',
  'usimages.html',
  'usimages.html'
]

for (var i = 0; i < buttons.length; i++) {
  console.log('This is executed')
  let button = buttons[i]
  let a = document.createElement('a')
  a.href = subpages[i]

  console.log(button)

  button.parentNode.replaceChild(a, button)
  a.appendChild(button)

}
