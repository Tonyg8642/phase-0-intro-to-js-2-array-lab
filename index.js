// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
   let copyOfcat = [...cats]
    copyOfcat.push(name)
    return copyOfcat
}

function prependCat(name){
    let copyOfcat = [...cats]
    copyOfcat.unshift(name)
    return copyOfcat
}

function removeLastCat(){
    let copyOfcat = [...cats]
    copyOfcat.pop(name)
    return copyOfcat
}

function removeFirstCat(){
    let copyOfcat = [...cats]
    copyOfcat.shift()
    return copyOfcat
}

