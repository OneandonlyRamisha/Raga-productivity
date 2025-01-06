import { Link } from "react-router-dom";
import "./Cta.css";

export default function Cta({ size, name }: { size: Number; name: string }) {
  return (
    <Link className="cta" to="sign up" style={{ fontSize: `${size}rem` }}>
      {name}
    </Link>
  );
}
