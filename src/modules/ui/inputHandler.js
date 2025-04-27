import handleLocationRefresh from '../utils/handleLocationRefresh';

export default async () => {
  const changeLocationForm = document.querySelector('.change-location-form');

  // When the form is submitted, obtain the current value of the input and run the handleLocationRefresh to get the new data and display it to the webpage
  changeLocationForm.addEventListener('submit', (event) => {
    // Prevent the browser from refreshing on submit
    event.preventDefault();
    const newLocation = document.querySelector('#location').value.trim();
    handleLocationRefresh(newLocation, false);
    changeLocationForm.reset();
  });
};
