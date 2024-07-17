/* Hambuerger Menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const dashboardBtn = document.getElementById("dashboardBtn");
const marketPlaceBtn = document.getElementById("marketPlaceBtn");
const tablesBtn = document.getElementById("tablesBtn");
const kanbaBtn = document.getElementById("kanbaBtn");
const profileBtn = document.getElementById("profileBtn");
const signInBtn = document.getElementById("signInBtn");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

/* Click item and close menu feature : */

const navLink = document.querySelectorAll(".nav_content__btn");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/* Chart First : */

const ctxFirst = document.getElementById("myChartFirst").getContext("2d");

const dataFirst = {
  labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  datasets: [
    {
      data: [65, 59, 70, 81, 56, 95],
      pointBackgroundColor: "white",
      borderColor: "blue",
      pointBorderColor: "blue",
      pointStyle: "circle",
      borderWidth: 3,
      pointRadius: 5,
      pointHoverRadius: 6,
      tension: 0.5,
    },
  ],
};

const configFirst = {
  type: "line",
  data: dataFirst,
  options: {
    aspectRatio: 3,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return "$" + tooltipItem.formattedValue;
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },

      x: {
        with: 600,
        grid: {
          display: false,
        },
      },
    },
  },
};

const myChartFirst = new Chart(ctxFirst, configFirst);

/* Chart  Second : */

const ctxSecond = document.getElementById("myChartSecond").getContext("2d");

const dataSecond = {
  labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
  datasets: [
    {
      label: "Revenue",
      data: [120, 150, 170, 190, 160, 180, 200, 387, 210],
      backgroundColor: [
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#e74c3c",
        "#6366f1",
      ],
      hoverBackgroundColor: [
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#e74c3c",
        "#6366f1",
      ],
      borderWidth: 1,
      borderRadius: 40,
      borderSkipped: false,
    },
  ],
};

const configSecond = {
  type: "bar",
  data: dataSecond,
  options: {
    aspectRatio: 3,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return "$" + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctxSecond, configSecond);

/* Chart  Second : */

const ctxCheck = document.getElementById("checkBarChart").getContext("2d");

const dataCheck = {
  labels: ["10", "12", "14", "16", "18", "20", "22", "24"],
  datasets: [
    {
      label: "Revenue",
      data: [18, 12, 14, 16, 18, 20, 22, 24],
      backgroundColor: [
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#e74c3c",
        "#6366f1",
        "#6366f1",
      ],
      hoverBackgroundColor: [
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#6366f1",
        "#e74c3c",
        "#6366f1",
        "#6366f1",
      ],
      borderWidth: 1,
      borderRadius: 40,
      borderSkipped: false,
    },
  ],
};

const configCheck = {
  type: "bar",
  data: dataCheck,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          display: false,
        },
      },
    },
  },
};

const checkBar = new Chart(ctxCheck, configCheck);

/* Chart Pie */

const ctxPie = document.getElementById("myPieChart").getContext("2d");

const dataPie = {
  labels: ["Your files", "System", "Others"],
  datasets: [
    {
      data: [63, 25, 12],
      backgroundColor: ["#4A00E0", "#1DC4E9", "#E0E0E0"],
      hoverBackgroundColor: ["#4A00E0", "#1DC4E9", "#E0E0E0"],
    },
  ],
};

const configPie = {
  type: "pie",
  data: dataPie,
  options: {
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const myPieChart = new Chart(ctxPie, configPie);

/* Calendar : */

const title = document.querySelector(".calendar_title");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novomber",
  "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();

  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();
  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today" '
        : "";

    datesHtml += `<li ${className}>${i}</li>`;
  }

  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  title.textContent = `${months[month]} ${year}`;
}

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();

/* Rendering  Content  when clicked  sidebar btns */

function contenBtn(btnIdName, contentBoxId) {
  btnIdName.addEventListener("click", function () {
    showContent(contentBoxId);
  });
}

contenBtn(dashboardBtn, "dashboard");
contenBtn(marketPlaceBtn, "marketPlace");
contenBtn(tablesBtn, "tables");
contenBtn(kanbaBtn, "kanba");
contenBtn(profileBtn, "profile");
contenBtn(signInBtn, "signIn");

function showContent(id) {
  const contentBox = document.querySelectorAll(".content_box");

  contentBox.forEach((box) => {
    if (box.id === id) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
}
