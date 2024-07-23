import './styles.css';
import SOGLogo from 'assets/SOGLogo.png';
import { Link } from 'react-router-dom';

const SOGFooter = () => {
    return (
        <footer className='grid-c'>
            <div className='sog-footer'>
                <div>
                    <Link to='/'>
                        <div className='img-with-text'>
                            <img src={SOGLogo} width='100' height='100'/>
                            <br />
                            Seeds of Growth
                            <br />
                            Counseling
                        </div>
                    </Link>
                    <div className='address'>
                        2011 Fake St
                        <br/>
                        Fake City, Ca 95817
                        <br />
                        {'(916) 123-4567'}
                    </div>
                </div>
            </div>
            <div className='copy-right'>
                Copyright &copy; 2024 Seeds of Growth Counseling - All Rights Reserved.
            </div>
        </footer>
    )
}

export default SOGFooter;