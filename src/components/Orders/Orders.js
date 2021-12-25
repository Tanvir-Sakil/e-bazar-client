import React from 'react';
import {useContext,useEffect,useState} from 'react';
import {UserContext} from '../../App';
import OrderCard from './OrderCard';

const Orders = () => {
    document.title = "Orders";

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const[orders,setOrders]= useState([]);

    useEffect(() => {
        fetch(`https://e-bazar-server.herokuapp.com/orders/${loggedInUser.email}`)
        .then(res=>res.json())
        .then(data => setOrders(data))
    }, [orders]);


    return (
        <div className = "container mb-4">
            <h3 style ={{fontWeight :"700",color :"gray"}}>Orders</h3>
            {
                orders.length ===0?
                <h4 style ={{fontWeight:"700",color :"red"}} className = "text-center mb-4">Please Order Something To show here!</h4>
                :<h4 style ={{fontWeight:"700",color:"green"}} className ="text-center mb-4">Total Order:{orders.length}</h4>
            }
            <div className = "d-flex justify-content align-items-center">
            <div>
            {
                orders.length===0 &&
                <div className = "spinner-border text-success" role= "status">
                <span className = "visually-hidden"></span>
                </div>
            }
            </div>
            
            </div>

            <div className = "row row-cols-md-3 g-4">
            {
                orders.map(order=>
                    <OrderCard key={order._id} order={order}></OrderCard>
                    )
            }
            
            </div>
        </div>
    );
};

export default Orders;