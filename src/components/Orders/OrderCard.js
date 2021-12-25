import React from 'react';

const OrderCard = ({order}) => {
    const {imageUrl,_id,name,orderDate,price,weight} = order;
    return (
        <div className ="col mb-3">
         <div className = "card h-100">
         <img src={imageUrl} className = "card-img-top" alt="..."/>

         <div className = "card-body">
         <h6 style={{color:'gray'}} className = "card-title">Order Id :{_id}</h6>
         <h5 style ={{fontWeight :"700",color:"red"}} className = "card-title">{name}<span style ={{color:'tomato',fontSize :'12px',border:'1px solid black',borderRadius:'5px',padding:'1.5px',backgroundColor:'lightgray'}}>Delivered</span></h5>
        <small className = "card-title">Quantity:1|| Total Price:{price}||Total Weight :{weight}</small> 
        </div>
        <div className ="card-footer">
        <small className = "text-muted">Order Date:{orderDate}</small>
        </div>
         </div>
            
        </div>
    );
};

export default OrderCard;