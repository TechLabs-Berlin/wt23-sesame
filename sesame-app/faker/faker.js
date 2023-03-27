import React from 'react';
import faker from 'faker';

function FakerComponent() {
    const generateData = () => {
        return Array.from({ length: 7 }, (_, index) => ({
          day: `Day ${index + 1}`,
          spending: Math.floor(Math.random() * 100),
        }));
    };

    const fakeData = generateData();

}


export default FakerComponent;
