import { Link, useLocation } from "react-router-dom";
import "./DashboardNav.css";
import { useState, useEffect } from "react";

export default function DashboardNav() {
  const location = useLocation();
  const [isActive, setIsActive] = useState("home");

  const dashboardNavItems = {
    home: "home",
    projectTraker: "folder",
    timer: "timer",
    porductivity: "leaderboard",
  };

  // Update the active state based on the current location
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setIsActive(path || "home"); // Default to "home" if the path is empty
  }, [location]);

  return (
    <>
      <h6 className="logo-dashboard">Raga</h6>
      <nav className="dashboard-navigation">
        <ul className="dashboard-navigation-list">
          {Object.entries(dashboardNavItems).map(([key, value]) => (
            <li key={key}>
              <Link to={`/${key}`} onClick={() => setIsActive(key)}>
                <span
                  className={
                    isActive === key
                      ? "material-icons dashboard-icons activeDashboard"
                      : "material-icons dashboard-icons"
                  }
                >
                  {value}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
