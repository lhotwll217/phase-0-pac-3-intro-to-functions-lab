function shout(string) {
    return string.toUpperCase();
}


function whisper(string) {
    return string.toLowerCase();
}

function logShout(yell) {
    console.log(yell.toUpperCase());

}

console.log(logShout('hello'));

function logWhisper(whisper) {
    console.log(whisper.toLowerCase());
}


function sayHiToGrandma(hiGrandma) {




    if (hiGrandma === hiGrandma.toLowerCase()) {
        return ("I can't hear you!");
    }

    else if (hiGrandma === hiGrandma.toUpperCase()) {
        return ("YES INDEED!");
    }

    else if (hiGrandma === "I love you, Grandma.") {
        return ("I love you, too.");
    }


}