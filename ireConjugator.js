//This is a function to takes an infinitive with an -ire suffix, removes the suffix and produces all of the present conjugations for that verb
const conjugateIre = (infinitive) => {
    const stem = infinitive.slice(0, infinitive.length -3);
    return `Io ${stem}isco \nTu ${stem}isci \nLui/Lei ${stem}isce \nNoi ${stem}iamo \nVoi ${stem}ite \nLoro ${stem}iscono`;

}



module.exports = conjugateIre;