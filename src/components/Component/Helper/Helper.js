import React from 'react';

// Date Function for M/D/YYYY format

const date = time => {
    const newDate = new Date(time);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const date = month + "/" + day + "/" + year;
    return date;
  };
  
  export default date;

