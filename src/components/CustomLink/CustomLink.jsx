import {Link, useMatch, useResolvedPath} from "react-router-dom";
import './styles.css';

const CustomLink = ({ to, key, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const classname = 'link';
    return (
        <div className={isActive ? 'link link--active' : 'link'} key={key}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}

export default CustomLink;