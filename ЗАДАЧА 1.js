// варіант 1
function drawTriangle(height, symbol) {
    for (var i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}

drawTriangle(5, "*");

// варіатс 2
function drawTriangle(height, symbol) {
    for (var i = 1; i <= height; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

drawTriangle(5, "*");
