function doubleTheNumber(num) {
    var result =num*2;
    return result;
}

var result =0;
var i =0;
while( i<a2.length) {
    result = result + a2[i];

}

function checkCountEven(a1,n2) {
    var result = false;
    var count = 0;
    for (i =0; i<a1.length; i++ ) {
        var number = a1[i];
        if (number % 2 !=0) {
            continue;
        }
        count = count + number;
        if ( count > n2) {
            result = true;
            break;
        }
    }
    return result;
}