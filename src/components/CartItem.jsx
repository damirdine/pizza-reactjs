import React,{useEffect, useState} from "react";
import {Row, Col,Card, Button, Image} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const CartItem = ({item,deleteFromCart,setEffecter}) => {
    const [itemx,setItem] = useState();

    return(
        <>
        <Row>
            <Col md={4}>
                <h3>{item.name}</h3>
                <h3>{item.size}</h3>
                <h3>{item.quantity} x {item.price} €</h3>
                <h3>{item.price*item.quantity}</h3>
            </Col>       
            <div>
                <button onClick={()=>{setItem(item.quantity++);setEffecter(1)}}>+</button>
                <input id={item.name+'-'+item.size} type="hidden" value={item.quantity} min="1"/>
                <button onClick={()=>{if(item.quantity<=1){
                    setItem(item.quantity=1)
                }else{setItem(item.quantity--);setEffecter(1)}}}>-</button>
            </div>
            <button onClick={()=> {deleteFromCart(item)}}>x</button>
        </Row>    
        </>
    )
}

export default CartItem