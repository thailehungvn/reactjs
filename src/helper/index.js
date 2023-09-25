import StarOutlineIcon from '../components/icons/star';
import StarFillIcon from '../components/icons/starFill';

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

export const ratingStar = (rate) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<StarFillIcon key={i} />);
    } else {
      stars.push(<StarOutlineIcon key={i} />);
    }
  }

  return stars;
}