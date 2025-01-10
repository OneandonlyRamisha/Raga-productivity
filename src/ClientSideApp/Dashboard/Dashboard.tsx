import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useState } from "react";
import DashboardNav from "./DashboardNav/DashboardNav";

export default function Dashboard() {
  const [dayIsActive, setDayIsActive] = useState("day");

  const today = new Date();

  // Format the date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", options);
  };

  // Calculate 1 week ago (subtract 7 days)
  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(today.getDate() - 7);

  // Calculate 1 month ago (subtract 1 month)
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - 1);

  // Calculate 1 year ago (subtract 1 year)
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  // Create an object to store the ranges
  const dateRanges = {
    day: formatDate(today),
    week: formatDate(oneWeekAgo) + " - " + formatDate(today),
    month: formatDate(oneMonthAgo) + " - " + formatDate(today),
    year: formatDate(oneYearAgo) + " - " + formatDate(today),
  };
  return (
    <div className="dashboard-container">
      <DashboardNav />
      <section className="dashboard-section">
        <div className="dashboard-section-items-container">
          <div className="date-container">
            <h6 className="today-date">{dateRanges[dayIsActive]}</h6>

            <ul className="date-choice">
              <li className={dayIsActive === "day" ? "day-active" : ""}>
                <Link onClick={() => setDayIsActive("day")} to="/home">
                  Day
                </Link>
              </li>
              <li className={dayIsActive === "week" ? "day-active" : ""}>
                <Link onClick={() => setDayIsActive("week")} to="/home">
                  Week
                </Link>
              </li>
              <li className={dayIsActive === "month" ? "day-active" : ""}>
                <Link onClick={() => setDayIsActive("month")} to="/home">
                  Month
                </Link>
              </li>
              <li className={dayIsActive === "year" ? "day-active" : ""}>
                <Link onClick={() => setDayIsActive("year")} to="/home">
                  Year
                </Link>
              </li>
            </ul>
          </div>

          <div className="main-dashboard-section-container">
            <div className="main-dashboard-section-grid focus-tracker-grid"></div>
            <div className="main-dashboard-section-grid break-tracker-grid"></div>
            <div className="main-dashboard-section-grid statisics-quotes-facts"></div>
            <div className="main-dashboard-section-grid rage-score"></div>
            <div className="main-dashboard-section-grid percentage-of-work-to-break"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
