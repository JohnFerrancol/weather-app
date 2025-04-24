import handleLocationRefresh from '../utils/handleLocationRefresh';

export default async () => {
  const changeLocationForm = document.querySelector('.change-location-form');

  changeLocationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newLocation = document.querySelector('#location').value.trim();
    handleLocationRefresh(newLocation, 'metric');
    changeLocationForm.reset();
  });
};
