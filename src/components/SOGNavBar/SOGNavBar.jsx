import Navbar from 'components/Navbar/Navbar';
import SOGLogo from 'assets/SOGLogo.png';
import CustomLink from "components/CustomLink/CustomLink.jsx";
import Dropdown from 'components/Dropdown/Dropdown.jsx';
import './styles.css';

// TODO: This information should be pulled from therapistDetails.json. Component would then build navItems from json

const navItems = {
    title:
    (
        <CustomLink to='/'>
        <div className='img-with-text'>
        <img alt='' src={SOGLogo} width='100' height='100'/>
        <br />
        Seeds of Growth
        <br />
        Counseling
        </div>
        </CustomLink>
    ),
    tabs: [
        <Dropdown trigger={<CustomLink to='/meet'>Meet Our Therapists</CustomLink>}
                  menu={[
                      <CustomLink to='/AysuA'>Anjali Aysu</CustomLink>,
                      <CustomLink to='/OlgaH'>Herman Ol'ga</CustomLink>,
                      <CustomLink to='/SemraE'>Emmy Semra</CustomLink>
                  ]} />,
        <CustomLink to={'/about'}>About</CustomLink>,
        <CustomLink to={'/pricing'}>Pricing</CustomLink>
    ]
};

const SOGNavBar = () => (<Navbar title={navItems.title} tabs={navItems.tabs} />)

export default SOGNavBar;