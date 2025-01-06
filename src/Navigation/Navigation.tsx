import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className="navigation-list">
          <NavItem classN="" name="Pricing" />
          <NavItem classN="" name="About" />
          <NavItem classN="dropdown" name="Resources">
            <div className="dropped-down-items">
              <DropDownNavItems
                name="Docs"
                description="Join the conversation"
                icon="slack.png"
                link="https://slack.com/"
              />
              <DropDownNavItems
                name="Blog"
                description="Our Instagram"
                icon="ig.png"
                link="https://slack.com/"
              />
              <DropDownNavItems
                name="Updates"
                description="Keep ip with the latest news"
                icon="x.png"
                link="https://slack.com/"
              />
            </div>
          </NavItem>
          <NavItem classN="dropdown" name="Community">
            <div className="dropped-down-items">
              <DropDownNavItems
                name="Slack"
                description="Join the conversation"
                icon="slack.png"
                link="https://slack.com/"
              />
              <DropDownNavItems
                name="Instagram"
                description="Our Instagram"
                icon="ig.png"
                link="https://slack.com/"
              />
              <DropDownNavItems
                name="X.com"
                description="Keep ip with the latest news"
                icon="x.png"
                link="https://slack.com/"
              />
              <DropDownNavItems
                name="LinkedIn"
                description="Connect with us"
                icon="in.png"
                link="https://slack.com/"
              />
            </div>
          </NavItem>
        </ul>

        <div className="nav-cta-container">
          <Link className="nav-cta nav-secondary-cta" to="sign in">
            Sign In
          </Link>
          <Link className="nav-cta nav-primary-cta" to="sign up">
            <span>Get Started</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function NavItem({
  name,
  classN,
  children,
}: {
  name: string;
  classN: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="dropdown-hover">
      <a className={`nav-item ${classN}`} href="#">
        {name}
      </a>
      {children}
    </li>
  );
}

function DropDownNavItems({
  icon,
  name,
  description,
  link,
}: {
  icon: string;
  name: string;
  description: string;
  link: string;
}) {
  return (
    <a className="dropdown-link-item" target="_blank" href={link}>
      <div className="droppeddown-item">
        <div className="icon-container">
          <img className="dorpdown-icon" src={icon} />
        </div>
        <div className="drop-down-text">
          <h6 className="name-dropdown">{name}</h6>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}
