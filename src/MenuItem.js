import "./MenuItem.css";
import {NavLink} from "react-router-dom"; /* アクティブなページを把握してCSSで操作したい場合はこれ！ */

const MenuItem = ({menuItem, toggleMenu}) => {
    return (
        <li className="menu-item">
            <NavLink to={menuItem.path === "" ? "/" : menuItem.path} onClick={toggleMenu}>
                {menuItem.text}
            </NavLink>
        </li>
    );
};

export default MenuItem;