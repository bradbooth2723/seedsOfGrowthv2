import Navbar from 'components/navbar/Navbar';
import SOGLogo from 'assets/SOGLogo.png';
import CustomLink from "components/CustomLink/CustomLink.jsx";
import './styles.css';

// TODO: children should be list if using dropdown
// TODO: think we need some sort of cms or backend to dynamically create therapist tabs
const navItems = {
    title:
    (
        <CustomLink to='/'>
        <div className='img-with-text'>
        <img src={SOGLogo} width='100' height='100'/>
        <br />
        Seeds of Growth
        <br />
        Counseling
        </div>
        </CustomLink>
    ),
    tabs: [
        // {
        //     type: 'dropDown',
        //     to: '/meet',
        //     children: (<>Meet Our Therapists</>),
        //     dropDownOptions: [
        //         {
        //             to: '/anjaliA',
        //             children: (<>Anjali Ays</>)
        //         },
        //         {
        //             to: '/hermanO',
        //             children: (<>Herman Ol'ga</>),
        //         },
        //         {
        //             to: '/EmmyS',
        //             children: (<>Emmy Semra</>)
        //         }
        //     ]
        // },
        // {
        //     to: null,
        //     children: (
        //         <Dropdown trigger={<button>Meet Our Therapists</button>} menu={
        //             [
        //                 <CustomLink to='/anjaliA' key='0'>Anjalia Ays</CustomLink>,
        //                 <CustomLink to='/hermanO' key='1'>Herman Ol'ga</CustomLink>
        //             ]
        //         } />
        //     )
        // },
    //     {
    //         type: 'button',
    //         to: '/about',
    //         children: (<>About</>)
    //     },
    //     {
    //         type: 'button',
    //         to: '/pricing',
    //         children: (<>Pricing</>)
    //     }
    // ]
        <CustomLink to={'/about'}>About</CustomLink>,
        <CustomLink to={'/pricing'}>Pricing</CustomLink>
    ]
};

const SOGNavBar = () => (<Navbar title={navItems.title} tabs={navItems.tabs} />)

export default SOGNavBar;