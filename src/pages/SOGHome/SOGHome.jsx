import HomeBanner from 'assets/homeBanner.jpg';
import './styles.css';
import SOGTreatmentCard from 'components/SOGTreatmentCard/SOGTreatmentCard.jsx';

const SOGHome = () => {
    return (
        <>
            <img src={HomeBanner} className='hero' />
            {/* <h1 className='button-with-text'>Grow With Care</h1> */}
            <SOGHeroCard />
            <h1 className='header'>Treatment Focus</h1>
            <br /> <br />
            <SOGTreatmentCard />
        </>
    )
}

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