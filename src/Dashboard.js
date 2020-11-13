import React from 'react';
import Product from './Product';
import Items from './Items.js';

const Dashboard = ({user,handleLogout}) => {
    return(
        <div>
        <section className="hero">
            <nav>
                <h5>Welcome <span style={{color:"green",fontStyle:"italic"}}>{user}</span></h5>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            
        </section>
        <Product />
        {/* <Items /> */}
        </div>
    )
}
export default Dashboard;
