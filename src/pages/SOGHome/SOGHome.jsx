import HomeBanner from 'assets/homeBanner.jpg';
import './styles.css';

const SOGHome = () => {
    return (
        <>
            <img src={HomeBanner} className='hero' />
            <h1 className='button-with-text'>Grow With Care</h1>
        </>
    )
}

export default SOGHome;