setClass = (elementId, newClass ) ->
  element = document.getElementById elementId
  element.className = newClass

window.onmousemove = (event) ->
  if event.clientX < 200
    setClass 'menu', 'menu revealed'
    setClass 'content', 'content revealed'
  else
    setClass 'menu', 'menu'
    setClass 'content', 'content'