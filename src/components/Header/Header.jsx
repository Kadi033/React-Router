import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
import "./Header.css";
const Header = () => {
  return (
    <div className="absolute flex items-center justify-center mt-10">
      <a href="/">
        <img src={logo} alt="logo" className=" w-12 h-12 ml-[55px]" />
      </a>
      <div className="ml-[178px] stick w-[473px] h-[1px] bg-white opacity-25"></div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          <p className="nav-num">00</p> HOME
        </NavLink>
        <NavLink to="/destination" className="nav-link">
          <p className="nav-num">01</p>DESTINATION
        </NavLink>
        <NavLink to="/crew" className="nav-link">
          <p className="nav-num">02</p> CREW
        </NavLink>
        <NavLink to="/technology" className="nav-link">
          <p className="nav-num">03</p> TECHNOLOGY
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
