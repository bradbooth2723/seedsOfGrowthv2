import Navbar from './Navbar.jsx';

export default {
    title: 'SOGHeader/Navbar',
    component: Navbar,
};

export const NoImage = {
    args: {
        title: (<h style={{fontSize: '4rem'}}>Seeds of Growth</h>),
        tabs: [
            (<div style={{fontSize: '2rem'}} key={0}>About</div>),
            (<div style={{fontSize: '2rem'}} key={1}>Contact</div>),
        ]
    },
};
