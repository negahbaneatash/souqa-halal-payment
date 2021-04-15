
import './buttomMenu.styles.scss'

const ButtomMenue =()=>{
    return(
        <div className='buttom-menu'>
            <div className='bm-container'>
                <span className='bm-items'>About Us</span>
                <span className='bm-items'>Customer Service</span>
                <span className='bm-items'>Privacy Policy</span>
                <span className='bm-items'>Site Map</span>
                <span className='bm-items'>Search Terms</span>
                <span className='bm-items'>Advanced Search</span>
                <span className='bm-items'>Orders and Returns</span>
                <span className='bm-items'>Contact Us</span>
            </div>
            <hr className='h-line'/>
        </div>

    )
}

export default ButtomMenue;