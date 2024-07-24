import './styles.css';

// TODO: Make this more generic to handle variable input to tab list
// TODO: Ability for dropdown tab as well
const Navbar = ({ title, tabs, ...props}) => {
    return (
        <nav className='nav' {...props}>
            {title}
            <ul>
                {tabs.map((tab, index) => {
                    return (<li key={index}>
                        {tab}
                    </li>);
                })}
            </ul>
        </nav>
    )
}


export default Navbar