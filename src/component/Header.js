import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName={classes.active}>
            login
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={classes.active}>
            Countact
          </NavLink>
        </li>
        <li>
          <NavLink to="deshbord" activeClassName={classes.active}>
            DeshBord
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
