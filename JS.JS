var possibleWords = [
    "afraid",
    "afterlife",
    "alarming",
    "alien",
    "angel",
    "apparition",
    "astronaut",
    "autumn",
    "ballerina",
    "bat",
    "beast",
    "bizarre",
    "black",
    "black cat",
    "blood",
    "bloodcurdling",
    "bogeyman",
    "bone",
    "boo",
    "broomstick",
    "cackle",
    "cadaver",
    "candy",
    "cape",
    "carve",
    "casket",
    "cat",
    "cauldron",
    "cemetery",
    "chilling",
    "cloak",
    "clown",
    "cobweb",
    "coffin",
    "dark",
    "darkness",
    "dead",
    "demon",
    "devil",
    "devilish",
    "disguise",
    "dreadful",
    "death",
    "dress-up",
    "crypt",
    "eerie",
    "elf",
    "enchant",
    "evil",
    "eyeballs",
    "eyepatch",
    "face paint",
    "fairy",
    "fall",
    "fangs",
    "fantasy",
    "fear",
    "firefighter",
    "flashlight",
    "fog",
    "fright",
    "frighten",
    "frightening",
    "frightful",
    "genie",
    "ghastly",
    "ghost",
    "ghostly",
    "ghoul",
    "ghoulish",
    "goblin",
    "goodies",
    "gory",
    "gown",
    "grave",
    "gravestone",
    "grim",
    "Grim Reaper",
    "grisly",
    "gruesome",
    "hair-raising",
    "Halloween",
    "hat",
    "haunt",
    "haunted house",
    "hayride",
    "headstone",
    "hobgoblin",
    "hocus pocus",
    "horrible",
    "horrify",
    "howl",
    "October",
    "ogre",
    "orange",
    "otherworldly",
    "owl",
    "spook",
    "spooky",
    "startling"
];
var letterSoFar = "";
var computerGuess = "";
var wins = 0;
var losses = 0;
var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
function guessSame(a) {
    return a === userGuess;
}
function checkGuess() {
    var compGuessarr = computerGuess.split("");
    if (compGuessarr.some(guessSame)) {
        return userGuess;
    } else {
        return false;
    }
}

function checkForWin() {
    if (lettersSoFar === computerGuess) {
        wins++;
        $("#score").text(wins);
    }
}
