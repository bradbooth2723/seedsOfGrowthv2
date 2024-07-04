import Navbar from 'components/navbar/Navbar';
import SOGLogo from 'assets/SOGLogo.png';
import './styles.css';

const navItems = {
    title: {
        children: (<div className='img-with-text'>
        <img src={SOGLogo} width='100' height='100'/>
        <br />
        Seeds of Growth
        <br />
        Counseling
        </div>
    ),
        to: '/'
    },
    tabs: [
        {
            id: 0,
            to: '/about',
            children: (<>About</>)
        },
        {
            id: 1,
            to: '/pricing',
            children: (<>Pricing</>)
        }
    ]
};

const SOGNavBar = () => (<Navbar title={navItems.title} tabs={navItems.tabs} />)

export default SOGNavBar;