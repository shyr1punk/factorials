
/*global document*/

var FACTORIAL = [];

function factorial(n) {
    'use strict';
    if (n <= 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function sum(n) {
    'use strict';
    var s = 0, i, len;
    n += '';
    len = n.length;
    for (i = 0; i < len; i += 1) {
        s += FACTORIAL[n[i]];
        if (s > n) {
            return;
        }
    }
    return s;
}

function factorion() {
    'use strict';
    var MAX_FACTORION, i, res;
    //Предопределяем значнеия факториалов
    for (i = 0; i < 10; i += 1) {
        FACTORIAL[i] = factorial(i);
    }
    /*
     * вычисляем максимально возможный факторион - он не длиннее 7 значного числа,
     * т.к. уже любое восьмизначное число больше суммы факториалов его цифр
     */
    MAX_FACTORION = 7 * FACTORIAL[9];
    for (i = 0; i < MAX_FACTORION; i += 1) {
        res = sum(i);
        if (i === res) {
            document.write(res + '<br>');
        }
    }
}

factorion();