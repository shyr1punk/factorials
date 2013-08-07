
/*global document*/

function factorial(n) {
    'use strict';
    if (n <= 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function sum(n) {
    'use strict';
    var i, len, s = 0;
    n += '';
    len = n.length;
    for (i = 0; i < len; i += 1) {
        s += factorial(n[i]);
        if (s > n) {
            return;
        }
    }
    return s;
}

function print() {
    'use strict';
    var i, res;
    for (i = 0; i < 1000000; i += 1) {
        res = sum(i);
        if (i === res) {
            document.write(res + '<br>');
        }
    }
}

print();