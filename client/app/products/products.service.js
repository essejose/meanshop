'use strict';

angular.module('meanshopApp')
  .factory('Products', function () {
    // Service logic
    
    // Public API here
    return [
       {
          _id: 1,
          title: 'Product 1',
          price: 123.45,
          quantity: 10,
          description: 'Lorem ipsum dolor sit amet' 
        },
        {
          _id: 2,
          title: 'Product 2',
          price: 123.45,
          quantity: 10,
          description: 'Lorem ipsum dolor sit amet' 
        },
        {
          _id: 3,
          title: 'Product 3',
          price: 123.45,
          quantity: 10,
          description: 'Lorem ipsum dolor sit amet' 
        },
        {
          _id: 4,
          title: 'Product 4',
          price: 123.45,
          quantity: 10,
          description: 'Lorem ipsum dolor sit amet' 
        },
        {
          _id: 4,
          title: 'Product 5',
          price: 123.45,
          quantity: 10,
          description: 'Lorem ipsum dolor sit amet' 
        }
    ];
  });
