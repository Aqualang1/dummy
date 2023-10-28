import { Link, Outlet } from "react-router-dom";
import './layout.css'

const Layout = ({ tabs }) => (
    <div>
        <nav>
            <ul>
                {tabs.map(tab => (
                    <li key={tab.id}>
                        <Link to={tab.id}><div>Hello from {tab.id}</div></Link>
                    </li>
                ))}
            </ul>
        </nav>
        <Outlet />
    </div>
);

export default Layout;