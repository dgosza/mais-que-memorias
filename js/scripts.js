/*!
* Mais que memórias - Business Casual v7.0.5 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Mais que memórias
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
