import { Trip } from '../models/Trip';
import { BASE_API_URL, ENDPOINTS } from '../utils/constants';

/*


fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

*/
export const getTrips = async (): Promise<Trip[]> => {
  const result = await fetch(`${BASE_API_URL}${ENDPOINTS.Trips}`)
    .then((response) => response.json())
    .then((data) => data);

  return result;
};

export const deleteTripById = async (tripId: number): Promise<void> => {
  const result = await fetch(`${BASE_API_URL}${ENDPOINTS.Trips}/${tripId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data);

  return result;
};

export const createNewTrip = async (data: Omit<Trip, 'id'>): Promise<void> => {
  const result = await fetch(`${BASE_API_URL}${ENDPOINTS.Trips}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data);

  return result;
};
