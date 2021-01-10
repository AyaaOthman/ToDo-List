// Setting today's date

const date = document.querySelector(".date");
function day() {
  const today = new Date();
  let todayDay;
  switch (today.getDay()) {
    case 0:
      todayDay = "Sunday";
      break;
    case 1:
      todayDay = "Monday";
      break;
    case 2:
      todayDay = "Tuesday";
      break;
    case 3:
      todayDay = "Wednesday";
      break;
    case 4:
      todayDay = "Thursday";
      break;
    case 5:
      todayDay = "Friday";
      break;
    case 6:
      todayDay = "Saturday";
      break;
  }
  const todayDate = today.getDate();
  let todayMonth;
  switch (today.getMonth()) {
    case 0:
      todayMonth = "Jan";
      break;
    case 1:
      todayMonth = "Feb";
      break;
    case 2:
      todayMonth = "March";
      break;
    case 3:
      todayMonth = "April";
      break;
    case 4:
      todayMonth = "May";
      break;
    case 5:
      todayMonth = "June";
      break;
    case 6:
      todayMonth = "July";
      break;
    case 7:
      todayMonth = "Aug";
      break;
    case 8:
      todayMonth = "Sep";
      break;
    case 9:
      todayMonth = "Oct";
      break;
    case 10:
      todayMonth = "Nov";
      break;
    case 11:
      todayMonth = "Dec";
      break;
  }

  date.innerText = `(${todayDay}) ${todayDate} ${todayMonth}
  `;
}
day();
