import "./HeroSection.css";
import Cta from "../Cta/Cta";
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-text-container">
        <h1 className="hero-header">Get More Things Done Faster</h1>
        <h2 className="hero-subheader">
          Raga is an all-in-one productivity app designed to help you stay
          focused and accomplish more each day. You get tools to improve your
          concentration, track progress, and build better work habits.
        </h2>
        <div className="cta-container">
          <Cta size={2} name="Get Started For Free" />
          <h4 className="cta-description">Avaible on all browsers</h4>
        </div>
      </div>
      <div className="product-show-off-container">
        <img src="raga.png" className="product-show-off-img" />
      </div>
    </section>
  );
}
