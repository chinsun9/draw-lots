import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

export const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

export const confetti = () => {
  // prettier-ignore
  const emojis = ['✌', '😂', '😝', '😁', '😱', '👀', '🚗', '🍎', '💝', '💙', '👌', '❤', '😍', '😉', '😓', '😳', '👄', '🚲', '🍉', '💛', '💚'];

  jsConfetti.addConfetti({
    emojiSize: 40,
    emojis,
    confettiNumber: 100,
  });
};
