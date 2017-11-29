var inputBox = $('#input-text');
var outputBox = $('#output-text');

$('#convert-text').click(function(e) {
    outputBox.val(mockText(inputBox.val()));
});

function mockText(input) {
    // Limit text length to 500 characters
    if (input.length > 500) {
        alert('TOO LONG! PLEASE MAKE SHORT-ER!');
        return;
    }
    
    var mockString = "";

    for (var i = 0; i < input.length; i++) {
        if (getRandomInt(1, 100) < 50) {
            mockString += input[i].toLowerCase();
        } else {
            mockString += input[i].toUpperCase();
        }
    }

    return mockString;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}