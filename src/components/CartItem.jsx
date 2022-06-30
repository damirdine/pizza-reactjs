import React,{useEffect, useState} from "react";
import {Row, Nav, Container, Image} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const CartItem = ({item,increaseQuantity,decreaseQuantity,deleteFromCart}) => {
    const [itemx,setItem] = useState(item);
    useEffect(()=>{
        if(item.quantity<=1){
            item.quantity = 1
          }else{
            item.quantity--
          }
          console.log(item)
    },[item])
    return(
        <Row>       
            <h3>{item.name}</h3>
            <h3>{item.size}</h3>
            <h3>{item.quantity}*  price €</h3>
            <div>
                <button onClick={()=>{setItem(item.quantity++)}}>+</button>
                <input id={item.name+'-'+item.size} type="number" value={item.quantity} min="1"/>
                <button onClick={()=>{if(item.quantity<=0){
                    setItem(item.quantity=1)
                }setItem(item.quantity--)}}>-</button>
            </div>
            <button onClick={()=> {deleteFromCart(item)}}>x</button>
        </Row>    
    )
}

export default CartItem