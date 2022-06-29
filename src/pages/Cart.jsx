import React,{useState,useEffect} from "react";
import { Container, Row } from "react-bootstrap";

let Cart = ({cartItems,deleteFromCart}) =>{
    const [pizzaData, setPizzasData] = useState(null);
    
    useEffect(()=> {
        fetch("http://localhost:8080/pizzas")
            .then(response => {
                if(response.ok){
                    return response.json()
                }
            })
            .then(data => {console.log(data)})
            .catch(err => {console.log(err,"WE CATCH AN ERROR")})
    })

    console.log(pizzaData)

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
                        <input id={item.name+'-'+item.size} type="number" value={item.quantity} min="2"/>
                        <button onClick={()=>{
                            const quantityIs1 = document.getElementById(item.name + '-' + item.size).value <= 0 || document.getElementById(item.name + '-' + item.size).value===0;
                            if(quantityIs1){
                                document.getElementById(item.name+'-'+item.size).value = 1
                            }
                            document.getElementById(item.name+'-'+item.size).value--
                        }}>-</button>

                    </div>
                    <button onClick={()=> {deleteFromCart(item)}}>x</button>
                </Row>    
            ))}
            <h3>Total : {cartItems.length} €</h3>
            <Row>

            </Row>
        </Container>
    )
}
export default Cart