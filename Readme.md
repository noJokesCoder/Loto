# Simple Console Loto (Bingo ?) game

### This function is a basic implementation of a loto game that can be executed directly in a browser.

### The function spits out a random number according to the specified arguments:

* `from`: number - is a first number in a pool used for loto
* `to`: number - is a last number in a pool loto
* `interval`: number - is an time-interval at which the console spits out a number (provided in miliseconds)
* `consoleMessage`: string - message that will be displayed in front of a number


``` javascript
outputLoto({ 
    from: 0,
    to: 5,
    step: 1,
    interval: 2000,
    consoleMessage: 'CURRENT NUMBER IS: '
});
// => CURRENT NUMBER IS: 5


```