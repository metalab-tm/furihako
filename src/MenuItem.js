import "./MenuItem.css";
import {Link} from 'react-router-dom';

const MenuItem = ({menuItem}) => {
    return (
        <li className="menu-item">
            <Link to={`/${menuItem.path}`}>
                {menuItem.text}
            </Link>
        </li>
    );
};

export default MenuItem;