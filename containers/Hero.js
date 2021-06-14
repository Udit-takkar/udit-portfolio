import "./Hero.module.css";
import "tailwindcss/tailwind.css";

export default function Hero({ children }) {
  return (
    <div className="pagecontainer px-4">
      <div className="dots"></div>
      <div className="mix-background "></div>
      {children}
    </div>
  );
}
