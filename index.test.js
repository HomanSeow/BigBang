

const bigBang = require('./index');


test('Properly generates correct array with given range set to 16' ,  () => {
    const testArray = [1,2,"BIG",4,"BANG","BIG",7,8,"BIG","BANG",11,"BIG",13,14,"BIGBANG",16];
    expect(bigBang(16)).toEqual(testArray);
});

test('Properly generates correct array with the default range of 100' ,  () => {
    const testArray = [1,2,"BIG",4,"BANG","BIG",7,8,"BIG","BANG",11,"BIG",13,14,"BIGBANG",16,17,"BIG",19,"BANG","BIG",22,23,"BIG","BANG",
                         26,"BIG",28,29,"BIGBANG",31,32,"BIG",34,"BANG","BIG",37,38,"BIG","BANG",41,"BIG",43,44,"BIGBANG",46,47,"BIG",49,
                        "BANG","BIG",52,53,"BIG","BANG",56,"BIG",58,59,"BIGBANG",61,62,"BIG",64,"BANG","BIG",67,68,"BIG","BANG",71,"BIG",
                         73,74,"BIGBANG",76,77,"BIG",79,"BANG","BIG",82,83,"BIG","BANG",86,"BIG",88,89,"BIGBANG",91,92,"BIG",94,"BANG",
                         "BIG",97,98,"BIG","BANG"];
    expect(bigBang()).toEqual(testArray);
});





