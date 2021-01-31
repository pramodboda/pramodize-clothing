const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
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
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: `Nike Air Zoom Tempo NEXT% FlyEase`,
          imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ce63c325-0563-47b0-ab46-5de8859eb42c/air-zoom-tempo-next-flyease-running-shoe-40pJSQ.jpg',
          price: 241
        },
        {
          id: 11,
          name: 'Nike Air Force 1 07',
          imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoe-WrLlWX.jpg',
          price: 102
        },
        {
          id: 12,
          name: 'Nike Air Max 270',
          imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/zkfvpfocamhwburvcxj7/air-max-270-shoe-2V5C4p.jpg',
          price: 192
        },
        {
          id: 13,
          name: 'Nike LeBron 18',
          imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/64e69213-a00f-4d01-9e75-31d5a30afbe4/lebron-18-basketball-shoe-JNqV61.jpg',
          price: 241
        },
        {
          id: 14,
          name: 'Nike Space Hippie 04',
          imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9314f636-c5a7-419e-a028-bf9515bf518b/space-hippie-04-shoe-drq0dt.jpg',
          price: 150
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Nike Air Max 270',
          imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/le0cefrpx8opdq4n5jsz/air-max-270-shoe-2V5C4p.jpg',
          price: 192
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
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
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
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
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
  ];
  
  export default SHOP_DATA;