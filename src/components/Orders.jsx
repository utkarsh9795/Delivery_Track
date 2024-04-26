import React from 'react'
import ProductCard from './ProductCard';
import Beans from '/images/beans.jpg';
import Brinjal from '/images/brinjal.jpg';
import Capsicum from '/images/capsicum.jpg';
import Carrot from '/images/carrot.jpg';
import Cauliflower from '/images/cauliflower.jpg';
import Chilli from '/images/chilli.jpg';
import Corainder from '/images/corainder.jpg';
import Garlic from '/images/garlic.jpg';
import Ginger from '/images/ginger.jpg';
import Lemon from '/images/lemon.jpg';
import Onion from '/images/onions.jpg';
import Pea from '/images/pea.jpg';
import Potato from '/images/potato.jpg';
import Spinach from '/images/spinach.jpg';
import Tomato from '/images/tomato.jpg';
const Orders = () => {
    const products = [
        { id: 1, title: 'Beans', description: 'This is sample description', price: 100, pic: Beans, trackingNumber: '122816215025810' },
        { id: 2, title: 'Brinjal', description: 'This is sample description', price: 50, pic: Brinjal, trackingNumber: '122816215025811' },
        { id: 3, title: 'Capsicum', description: 'This is sample description', price: 140, pic: Capsicum, trackingNumber: '122816215025812' },
        { id: 4, title: 'Carrot', description: 'This is sample description', price: 90, pic: Carrot, trackingNumber: '122816215025813' },
        { id: 5, title: 'Cauliflower', description: 'This is sample description', price: 50, pic: Cauliflower, trackingNumber: '122816215025814' },
        { id: 6, title: 'Chilli', description: 'This is sample description', price: 10, pic: Chilli, trackingNumber: '122816215025815' },
        { id: 7, title: 'Corainder', description: 'This is sample description', price: 25, pic: Corainder, trackingNumber: '122816215025816' },
        { id: 8, title: 'Garlic', description: 'This is sample description', price: 120, pic: Garlic, trackingNumber: '122816215025817' },
        { id: 9, title: 'Ginger', description: 'This is sample description', price: 30, pic: Ginger, trackingNumber: '122816215025818' },
        { id: 10, title: 'Lemon', description: 'This is sample description', price: 20, pic: Lemon, trackingNumber: '122816215025819' },
        { id: 11, title: 'Onion', description: 'This is sample description', price: 45, pic: Onion, trackingNumber: '122816215025820' },
        { id: 12, title: 'Potato', description: 'This is sample description', price: 60, pic: Potato, trackingNumber: '122816215025821' },
        { id: 13, title: 'Tomato', description: 'This is sample description', price: 70, pic: Tomato, trackingNumber: '122816215025822' },
    ];
  return (

    <main className='mx-6 lg:mx-48 my-10 grid grid-cols-1 gap-6'>
        <h1 className='text-white font-bold text-3x1'>My Orders</h1>
    {products.map(product => (
        <ProductCard key={product.id} product={product} />
    ))}
    </main>
  )
}

export default Orders