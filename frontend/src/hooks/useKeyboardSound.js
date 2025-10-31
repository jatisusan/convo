const keyStorkeSounds = [
  new Audio("/sounds/Keyboard-01.wav"),
  new Audio("/sounds/Keyboard-02.wav"),
  new Audio("/sounds/Keyboard-03.wav"),
  new Audio("/sounds/Keyboard-05.wav"),
];

function useKeyboardSound() {
  const playRandomKeyStroke = () => {
    const randomSound =
      keyStorkeSounds[Math.floor(Math.random() * keyStorkeSounds.length)];

    randomSound.currentTime = 0;
    randomSound.volume = 0.3;
    randomSound
      .play()
      .catch((err) => console.log("Error playing sound: ", err));
  };

  return { playRandomKeyStroke };
}

export default useKeyboardSound;
