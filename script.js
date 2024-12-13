function countDown(time) {
  const timer = () => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(Math.floor(time % 60)).padStart(2, "0");
    if (time === 0) {
      clearInterval(intervalId);
      return "Click to resend the code.";
    }
    console.log(`${min}:${sec}`);
    time--;
  };
  timer(); // so it start immedietly
  const intervalId = setInterval(timer, 1000);
}

countDown(120);
