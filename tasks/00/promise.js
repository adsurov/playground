// JavaScript Promise and Event Loop Execution Order
// Could you please explain the order of the console outputs and the reasoning behind it?


console.log('1. Script start');

setTimeout(() => console.log('2. setTimeout 1'), 0);

new Promise((resolve, reject) => {
  console.log('3. Promise executor');
  resolve();
})
  .then(() => {
    console.log('4. Promise then 1');
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('5. setTimeout 2');
        resolve();
      }, 0);
    });
  })
  .then(() => {
    console.log('6. Promise then 2');
    throw new Error('Oops!');
  })
  .then(() => {
    console.log('7. Promise then 3');
    (function () { console.log('8. Immediate invocation'); })();
  })
  .then(() => console.log('9. Promise then 4'))
  .catch((err) => {
    console.log('10. Promise catch:', err.message);
    return 'Recovered';
  })
  .then((data) => console.log('11. Promise then 5:', data))
  .finally(() => {
    console.log('12. Promise finally');
    return 'From finally';
  })
  .then((data) => console.log('13. Promise then 6:', data))
  .then(() => {
    throw new Error('Another error');
  })
  .catch((err) => console.log('14. Promise catch 2:', err.message))
  .then(() => console.log('15. Promise then 7'));

console.log('16. Script end');