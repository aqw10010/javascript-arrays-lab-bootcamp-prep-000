var kittens = [ 'Milo', 'Otis', 'Garfield' ]

function destructivelyAppendKitten(name) {
 kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}

function appendKitten(name) {
  
   return [...kittens, name ]
}

function prependKitten(name) {
  

  return [name, ...kittens]
}

function removeLastKitten() {
 kittens.slice(0,2)
  return kittens.slice(0,2)
}

 function removeFirstKitten() {
   kittens.slice(1)
   return kittens.slice(1)
 }