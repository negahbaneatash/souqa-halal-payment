import './infoSection.styles.scss'


const InfoSection =()=>{
    return (
        <div className='information-section'>
            <div className='info-columns'>
                <h2 className='column-title'>Demo Store</h2>
                <span className='column-item'>Unit 50-6-13 Wisma UOA - Damansara 1, 50 Jalan Dungun,Damansara Heights, Wilayah Persekutuan.</span>
                <span className='column-item'>Malaysia</span>
                <span className='column-item'>Email: Support@payhalal.my</span>
                <span className='column-item'></span>
                <span className='column-item'></span>
            </div>
            <div className='info-columns'>
                <h2 className='column-title'>Categories</h2>
                <span className='column-item hover-effect'>Groceries</span>
                <span className='column-item hover-effect'>impulse</span>
                <span className='column-item hover-effect'>Modest Fashion</span>
                <span className='column-item hover-effect'>Halal Cosmetics</span>
                <span className='column-item hover-effect'>Electronics</span>
            </div>
            <div className='info-columns'>
                <h2 className='column-title'>Customer Services</h2>
                <span className='column-item hover-effect'>Shipping and Returns</span>
                <span className='column-item hover-effect'>International Shippings</span>
                <span className='column-item hover-effect'>Contacts</span>
                <span className='column-item hover-effect'></span>
                <span className='column-item hover-effect'></span>
            </div>
            <div className='info-columns'>
                <h2 className='column-title'>Information</h2>
                <span className='column-item hover-effect'>About Our Shop</span>
                <span className='column-item hover-effect'>Secure Shopping</span>
                <span className='column-item hover-effect'>Delivery Information</span>
                <span className='column-item hover-effect'>FAQs</span>
                <span className='column-item hover-effect'></span>
            </div>
        </div>
    )
}

export default InfoSection;