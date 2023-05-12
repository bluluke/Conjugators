const conjugateIre = require("./ireConjugator.js");
const conjugateEre = require("./ereConjugator.js");
const conjugateAre = require("./areConjugator.js");

const checkVerb = (infin) => {
    const suffix = infin.slice(infin.length - 3, infin.length);
    if(suffix === 'are') {
        return conjugateAre(infin);
    } else if(suffix === 'ire') {
        return conjugateIre(infin);
    } else if(suffix === 'ere') {
        return conjugateEre(infin);
    } else {
        return 'This is not a proper infintive!';
    }
};

