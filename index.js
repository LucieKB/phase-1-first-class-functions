function receivesAFunction(favoriteSport){
    return favoriteSport()
}

receivesAFunction(function(name){return name + "loves to bike.";})


function returnsANamedFunction() {
    return ("Dude", function question() {return "Does it work now?"})
}

returnsANamedFunction()()

function returnsAnAnonymousFunction(){
    return function(){console.log("Yes???")}
}