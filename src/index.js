// function getYearFromDate(dateString) {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     return year;
//   }
  
//   const dateStr = '2023-08-05';
//   const year = getYearFromDate(dateStr);
//   console.log(year); // Виведе 2023
  

//   function getMonthFromDate(dateString) {
//     const date = new Date(dateString);
//     const month = date.getMonth() + 1; // Додаємо 1, оскільки значення місяця починається з 0 (січень) до 11 (грудень)
//     return month;
//   }

//   const dateStr = '2023-08-05';
// const month = getMonthFromDate(dateStr);
// console.log(month); // Виведе 8


//   const dateStr = '2023-08-05'; // П'ятниця
// const isDateWeekend = isWeekend(dateStr);
// console.log(isDateWeekend); // Виведе false

// const dateStr2 = '2023-08-06'; // Субота
// const isDateWeekend2 = isWeekend(dateStr2);
// console.log(isDateWeekend2); // Виведе true

// const dateStr3 = '2023-08-07'; // Неділя
// const isDateWeekend3 = isWeekend(dateStr3);
// console.log(isDateWeekend3); // Виведе true


// function isWeekend(dateString) {
//     const date = new Date(dateString);
//     const dayOfWeek = date.getDay();
//     return dayOfWeek === 0 || dayOfWeek === 6;
// }
  

const date1 = '2023-08-05';
const date2 = '2023-08-10';
const diff = dateDiffInDays(date1, date2);
console.log(diff); // Виведе 5


function dateDiffInDays(date1, date2) {
    const ONE_DAY = 24 * 60 * 60 * 1000; // Один день в мілісекундах
    const date1Value = new Date(date1).getTime();
    const date2Value = new Date(date2).getTime();
    const diffInMilliseconds = Math.abs(date2Value - date1Value);
    const diffInDays = Math.floor(diffInMilliseconds / ONE_DAY);
    return diffInDays;
  }
  