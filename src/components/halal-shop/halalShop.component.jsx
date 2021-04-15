import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../collection-preview/collection-preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: [
        {
          id: 1,
          title: 'Hijabs',
          routeName: 'Hijab',
          items: [
            {
              id: 1,
              name: 'Black Viscose',
              imageUrl: 'https://i.pinimg.com/originals/11/a3/ae/11a3aeb75b55e082eb8d7e5b090db9e0.jpg',
              price: 25
            },
            {
              id: 2,
              name: 'Voile Sakrua',
              imageUrl: 'https://cdn.store-assets.com/s/45556/i/8608914_480x.jpeg',
              price: 18
            },
            {
              id: 3,
              name: 'Brown scarf',
              imageUrl: 'https://images.unsplash.com/photo-1584339312444-6952d098e152?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fA%3D%3D&w=1000&q=80',
              price: 35
            },
            {
              id: 4,
              name: 'Hijab Finest',
              imageUrl: 'https://m.buro247.my/thumb/600x600_0/images/Msian-Hijab-brands-CA.jpg',
              price: 25
            },
            {
              id: 5,
              name: 'Green Beanie',
              imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
              price: 18
            },
            {
              id: 6,
              name: 'Palm Tree Cap',
              imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
              price: 14
            },
            {
              id: 7,
              name: 'Red Beanie',
              imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
              price: 18
            },
            {
              id: 8,
              name: 'Wolf Cap',
              imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
              price: 14
            },
            {
              id: 9,
              name: 'Blue Snapback',
              imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
              price: 16
            }
          ]
        },
        {
          id: 2,
          title: 'Foods',
          routeName: 'Food',
          items: [
            {
              id: 10,
              name: 'Ice Cream',
              imageUrl: 'https://demo.payhalal.my/LA%20CREMERIA%20ABSOLUTELY%20ALMOND%20ICE%20CREAM%C2%A0.jpg',
              price: 20
            },
            {
              id: 11,
              name: 'Serji Aji',
              imageUrl: 'https://demo.payhalal.my/seri%20aji.jpg',
              price: 80
            },
            {
              id: 12,
              name: 'Nestle KOKO',
              imageUrl: 'https://demo.payhalal.my/NESTLE%20KOKO%20KRUNCH%C2%A0.jpg',
              price: 10
            },
            {
              id: 13,
              name: 'Tropicana',
              imageUrl: 'https://demo.payhalal.my/Khong%20Guan%20-%20Lemon%20Puff.jpg',
              price: 5
            },
            {
              id: 14,
              name: 'Nike Red High Tops',
              imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
              price: 160
            },
            {
              id: 15,
              name: 'Nike Brown High Tops',
              imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
              price: 160
            },
            {
              id: 16,
              name: 'Air Jordan Limited',
              imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
              price: 190
            },
            {
              id: 17,
              name: 'Timberlands',
              imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
              price: 200
            }
          ]
        },
        {
          id: 3,
          title: 'Jackets',
          routeName: 'jackets',
          items: [
            {
              id: 18,
              name: 'Black Jean Shearling',
              imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
              price: 125
            },
            {
              id: 19,
              name: 'Blue Jean Jacket',
              imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
              price: 90
            },
            {
              id: 20,
              name: 'Grey Jean Jacket',
              imageUrl: 'http://www.bolf.eu//eng_pl_Mens-Leather-Jacket-Black-Bolf-1107-75137_2.jpg',
              price: 90
            },
            {
              id: 21,
              name: 'Brown Shearling',
              imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
              price: 165
            },
            {
              id: 22,
              name: 'Tan Trench',
              imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
              price: 185
            }
          ]
        },
        
        {
          id: 4,
          title: 'Mens',
          routeName: 'mens',
          items: [
            {
              id: 30,
              name: 'Camo Down Vest',
              imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
              price: 325
            },
            {
              id: 31,
              name: 'Floral T-shirt',
              imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
              price: 20
            },
            {
              id: 32,
              name: 'Black & White Longsleeve',
              imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
              price: 25
            },
            {
              id: 33,
              name: 'Pink T-shirt',
              imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
              price: 25
            },
            {
              id: 34,
              name: 'Jean Long Sleeve',
              imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
              price: 40
            },
            {
              id: 35,
              name: 'Burgundy T-shirt',
              imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
              price: 25
            }
          ]
        }
      ]
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <h1>All Products</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
