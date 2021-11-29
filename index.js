function shout(string) {
    return string.toUpperCase();
}

console.log("Hello You".toUpperCase());

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    return console.log(string.toUpperCase());
}

function logWhisper(string) {
    return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    if (whisper) {
        return "I can't hear you!";}
    else if (shout) {
        return "YES INDEED!";} 
    else ("I love you Grandma") {
        return "I love you, too.";}
}
  




