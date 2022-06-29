import React from "react";
import { Container, Row } from "react-bootstrap";

const MyPizzaList = () => {
    fetch("http://localhost:8080/pizzas")
    .then((res)=>(res.json()))
    .then((json)=>json)
    .catch((err)=>(console.log(err)))
}


let Cart = ({cartItems}) =>{
    console.log(cartItems)
    return(
        <Container>
            <h2>Panier</h2>
            {cartItems.length === 0 && (
                <h3 gap={3} className="text-center">
                    Panier vide
                </h3>
            )}
            {cartItems.map((item) => (
                <Row>
                    <h3>{item.name}</h3>
                    <h3>{item.size}</h3>
                    <div>
                        <button onClick={()=>{
                            document.getElementById(item.name+'-'+item.size).value++  
                        }}>+</button>
                        <input id={item.name+'-'+item.size} type="number" value={item.quantity} min="1"/>
                        <button onClick={()=>{
                            const quantityIs1 = document.getElementById(item.name + '-' + item.size).value === 1;
                            if(!quantityIs1){
                                document.getElementById(item.name+'-'+item.size).value--
                            }
                            document.getElementById(item.name+'-'+item.size).value=1
                        }}>-</button>

                    </div>
                    <button>x</button>
                </Row>    
            ))}
            
        </Container>
    )
}
export default Cart