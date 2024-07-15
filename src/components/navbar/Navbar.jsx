import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './styles.css';

// TODO: Make this more generic to handle variable input to tab list
// TODO: Ability for dropdown tab as well
const Navbar = ({ title, tabs, ...props}) => {
    const t = title ? (<Link to={ title.to } className='site-title'>{title.children}</Link>) : (<></>);
    return <nav className="nav">
        {t}
        <ul>
            {tabs.map((item) => {
                //TODO: I think dropdown conditional would go here
                return (
                    // TODO: Figure out why there is an warning for list items needing a key
                    <CustomLink key={item.Id} to={item.to}>{item.children}</CustomLink>
                )
            })}
        </ul>
    </nav>
}

const CustomLink = ({ to, key, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""} key={key}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar