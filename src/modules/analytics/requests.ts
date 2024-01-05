export const sendStat = (): void => {
  fetch('https://freeyeti.net/backend/ghstat/v1/e', {
    method: 'GET',
    cache: 'no-store'
  });
};
