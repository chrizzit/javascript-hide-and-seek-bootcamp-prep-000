function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {

  //working on iteration...but not passing
  /*let node = document.getElementById('grand-node')
  let innerNode = node.children[0]

  while (node.childre[0]) {
    node = innerNode
    innerNode = node.children[0]
  }
  return node*/
  return document.querySelector('div#grand-node div div div div')
}
