process.stdout.write("hello from spinner1.js... \rheyyy\n");
function spinnerAnimation(state = "|") {
  process.stdout.write("\r" + state);

  const states = ["|", "/", "-", "\\"];
  const index = (states.indexOf(state) + 1) % states.length;
  const nextState = states[index];

  setTimeout(() => {
    spinnerAnimation(nextState);
  }, 300);
}

spinnerAnimation();
