// import React, { useState, useEffect } from 'react';

// function Esydate() {
//   const [time, setTime] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     days: 0,
//   });

//   // Function to calculate the time
//   const calculateTime = () => {
//     const now = new Date();
    
//     // Get current time details
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     // Calculate the number of days since a specific date
//     const startDate = new Date('2025-01-01'); // Replace with your desired start date
//     const daysDifference = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

//     setTime({
//       hours,
//       minutes,
//       seconds,
//       days: daysDifference,
//     });
//   };

//   // Use useEffect to update the clock every second
//   useEffect(() => {
//     const intervalId = setInterval(calculateTime, 1000);
    
//     // Clear interval when component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h1>Current Time</h1>
//       <p>Hours: {time.hours}</p>
//       <p>Minutes: {time.minutes}</p>
//       <p>Seconds: {time.seconds}</p>
//       <p>Days since 01/01/2025: {time.days}</p>
//     </div>
//   );
// }

// // export default Esydate;
// import React, { useState, useEffect } from 'react';

// function Clock() {
//   const [days, setDays] = useState(0);

//   // Function to calculate the number of days
//   const calculateDays = () => {
//     const now = new Date();
    
//     // Calculate the number of days since a specific date
//     const startDate = new Date('2025-01-01'); // Replace with your desired start date
//     const daysDifference = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

//     setDays(daysDifference);
//   };

//   // Use useEffect to update the days every day (or periodically)
//   useEffect(() => {
//     calculateDays(); // Call immediately to show the days on first load
//     const intervalId = setInterval(calculateDays, 86400000); // Update every 24 hours (86400000 ms)
    
//     // Clear interval when component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h1>Days Since 01/01/2025</h1>
//       <p>{days} days</p>
//     </div>
//   );
// }

// export default Clock;
