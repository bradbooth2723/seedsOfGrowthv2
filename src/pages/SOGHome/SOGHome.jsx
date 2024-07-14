import HomeBanner from 'assets/homeBanner.jpg';
import { resolvePath } from 'react-router-dom';
import './styles.css';
import SOGTreatmentCard from 'components/SOGTreatmentCard/SOGTreatmentCard.jsx';
import SOGTherapistCardSlideContainer from 'components/SOGTherapistCardSlide/SOGTherapistCardSlideContainer.jsx';

const SOGHome = () => {
    return (
        <>
            <img src={HomeBanner} className='hero' />
            <SOGHeroCard />
            <h1 className='header'>Treatment Focus</h1>
            <br /> <br />
            <SOGTreatmentCard />
            <h1 className='header'>Meet Our Therapists</h1>
            {/* <TherapistCard className='full-length' /> */}
            <SOGTherapistCardSlideContainer />
        </>
    )
}

// TODO: This should be in its own component
const SOGHeroCard = () => {
    return (
        <div className='button-with-text'>
            <h1>Grow With Care</h1>
            <p>We're Here To Listen</p>
            {/* TODO: Add Button */}
        </div>
    )
}

export default SOGHome;