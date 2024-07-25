import './styles.css';

const Navbar = ({ trigger, menu }) => {
    return (
        <div className='dropdown'>
            <div className='dropdown--button'>{trigger}</div>
            <nav className='dropdown--menu'>
                {menu.map((menuItem, index) => {
                    return <div key={index}>{menuItem}</div>;
                })}
            </nav>

        </div>
    );
}

export default Navbar;