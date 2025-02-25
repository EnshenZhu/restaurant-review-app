import React from 'react';

const GoogleMap = ({ location }) => {
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_API_KEY&q=${location.lat},${location.lng}`;

    return <iframe title="Google Map" src={mapUrl} width="100%" height="200px" />;
};

export default GoogleMap;