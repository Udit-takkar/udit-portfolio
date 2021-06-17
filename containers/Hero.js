import "./Hero.module.css";
import "tailwindcss/tailwind.css";

export default function Hero({ children }) {
  return (
    <div className="pagecontainer px-4" style={{ backgroundColor: "#22264A" }}>
      <div className="dots"></div>
      <div className="mix-background"></div>
      <div className="relative hero_children">{children}</div>
    </div>
  );
}
