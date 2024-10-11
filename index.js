const outputLoto = ({ from, to, step, interval, consoleMessage }) => {
  const numPool = Array.from(
    { length: (to - from) / step + 1 },
    (value, index) => from + index * step
  );
  const usedNums = [];
  let currentNum = 0;

  const logInFrame = () => {
    const border = '*'.repeat(consoleMessage.length + 5); // Border width is message length + padding
    console.log(`${border}\n* ${consoleMessage} ${currentNum} *\n${border}`); // Message with padding inside the frame
  };

  const getNumber = () => {
    const num = numPool.at(Math.floor(Math.random() * numPool.length));

    if (!usedNums.includes(num)) {
      currentNum = num;
      usedNums.push(num);
    } else {
      getNumber(); // Retry if number is already used
    }
  };

  const intervalId = setInterval(() => {
    getNumber();
    logInFrame();

    if (usedNums.length === numPool.length) {
      clearInterval(intervalId);
    }
  }, interval);
};

outputLoto({ from: 0, to: 5, step: 1, interval: 2000, consoleMessage: 'CURRENT NUMBER IS: ' });
