import React, { useState, useEffect } from "react";

const DataMatch = ({ setTodayData }) => {
  const [data, setData] = useState([]);

  // Function to format the date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Generate the data when component mounts
    const today = new Date(); // Current date (today)
    const currentDate = formatDate(today); // Format today's date
    const tempData = [];

    for (let i = -10; i <= 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i); // Adjust the date by i days
      const formattedDate = formatDate(date); // Format the adjusted date

      setData(tempData);
      
      tempData.push({
        id: i + 1,
        date: formattedDate,
        ph: (Math.random() * 2 + 7).toFixed(2), // Random ph value between 7.0 and 9.0
        do: (Math.random() * 2 + 6).toFixed(2), // Random DO value between 6.0 and 8.0
        bod: (Math.random() * 3 + 2).toFixed(2), // Random BOD value between 2.0 and 5.0
        totalColiform: Math.floor(Math.random() * 1000), // Random total coliform value
      });
    }

    

    // Check if today's date matches any date in the data array and update values if needed
    const todayData = tempData.find((item) => item.date === currentDate);
    if (todayData && typeof setTodayData === "function") {
      setTodayData(todayData);
    }
  }, []);

  return null; // No need to render anything, data is sent to parent component
};

export default DataMatch;