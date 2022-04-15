//Toggle active classes between time options
const periods = [...document.querySelectorAll(".time-options > div")];
periods.forEach(function (item) {
  item.addEventListener("click", function (e) {
    for (let i = 0; i < periods.length; i++) {
      periods[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

// Chart levels
// Helpers
const formatStr = (str) => {
  return str.split(",").map((item) => {
    let formatted = item.replaceAll(/\W+/g, "");
    return +formatted;
  });
};
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
//
const weekdays = [...document.querySelectorAll("#chart_days > div")];
weekdays.forEach((day) => {
  let finances = day.getAttribute("data-finances"),
    expenseElm = day.querySelector(".inc-line"),
    incomeElm = day.querySelector(".exp-line"),
    currentExpense = formatStr(finances)[0],
    currentIncome = formatStr(finances)[1],
    expenseLevel = scale(currentExpense, 0, 4000, 0, 175),
    incomeLevel = scale(currentIncome, 0, 4000, 0, 175);
  expenseElm.style.height = `${expenseLevel}px`;
  incomeElm.style.height = `${incomeLevel}px`;
});
