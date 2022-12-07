/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    // 1) Get reservation from API
    const reservation = await axios(`/api/v1/bookings/reservation/${tourId}`);

    // 2) Show success reservation alert
    if (reservation.data.status === 'success') {
      showAlert('success', reservation.data.confirmation.success_message);
      window.setTimeout(() => {
        location.assign(`${reservation.data.confirmation.success_url}`);
      }, 1500);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
