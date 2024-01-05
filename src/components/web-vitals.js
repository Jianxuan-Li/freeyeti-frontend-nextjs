'use client';

export function WebVitals() {
  return (
    <div style={{display: 'none'}}>
      <img
        src={'https://freeyeti.net/backend/ghstat/v1/s?time=' + Date.now()}
      ></img>
    </div>
  );
}
