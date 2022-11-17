import React from 'react';
import hot1 from '../../../images/hot/hot1.jpg';
import hot2 from '../../../images/hot/hot2.jpg';
import hot3 from '../../../images/hot/hot3.jpg';
import hot4 from '../../../images/hot/hot4.jpg';
import hot5 from '../../../images/hot/hot5.jpg';
import hot6 from '../../../images/hot/hot6.jpg';
import Footer from '../../Shared/Footer/Footer';
import Deal from '../Deal/Deal';


const deals = [
    { id: 1, name: 'Gorcme, Turkey', img: hot1 },
    { id: 2, name: 'Paraty, Brazil', img: hot2 },
    { id: 3, name: 'Playa del Carmen, Mexico', img: hot3 },
    { id: 4, name: 'Dominican Republic', img: hot4 },
    { id: 5, name: 'Paris', img: hot5 },
    { id: 6, name: 'Maldives', img: hot6 },
]
const HotDeals = () => {
    return (
        <section>
            <div className='mt-8 ml-10'>
                <h1 className='text-3xl text-center font-bold mb-5'><span className='text-accent'>Hot</span> Deals</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        deals.map(deal => <Deal
                            key={deal.id}
                            deal={deal}
                        ></Deal>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default HotDeals;