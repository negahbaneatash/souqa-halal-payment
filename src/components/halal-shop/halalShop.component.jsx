import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../collection-preview/collection-preview';
import ButtomMenue from '../buttom-menu/buttomMenu.component.jsx';
import './halalShop.styles.scss'
import InfoSection from '../information-section/infoSection.component.jsx';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <h1 className='all-products'>All Products</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        <ButtomMenue/>
        <InfoSection/>
        <div className='information'></div>
      </div>
    );
  }
}

export default ShopPage;
