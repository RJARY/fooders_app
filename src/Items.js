import React, { useState } from 'react';

function Items() {
    const [cart,setCart] = useState([]);
    const [page,setPage] = useState('products');
    const [products] = useState([
        {
            name: "AA Battery",
            cost: '$2.99',
            image: 'https://5.imimg.com/data5/JV/CY/MY-21893711/dura-cell-500x500.jpg'
,
        },
        {

            name: "Blanket",
            cost: '$19.99',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81yzJRlVylL._AC_SX522_.jpg'

        },
        {
            name: "AA Battery",
            cost: '$2.99',
            image: 'https://5.imimg.com/data5/JV/CY/MY-21893711/dura-cell-500x500.jpg'
,
        },
        {

            name: "Blanket",
            cost: '$19.99',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81yzJRlVylL._AC_SX522_.jpg'

        },
        {
            name: "AA Battery",
            cost: '$2.99',
            image: 'https://5.imimg.com/data5/JV/CY/MY-21893711/dura-cell-500x500.jpg'
,
        },
        {

            name: "Blanket",
            cost: '$19.99',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81yzJRlVylL._AC_SX522_.jpg'

        }
    ])

    const addToCart = (product)=> {
        setCart([...cart,product]);
    }
    const renderProducts = () => {
     <>
    </>
    }

    return(
        <div>
        <header>
            <button>Go to cart ({cart.length})</button>
        </header>
        <h1>Products</h1>
            {products.map((product,ind) => (
                <div key={ind}>
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <img src={product.image} alt="img1" />
                    <button onClick={addToCart}>Add to cart</button>
                </div>
                ))}
        </div>
    )

}

export default Items;