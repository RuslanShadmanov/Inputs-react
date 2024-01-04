import {Product} from "./Product"


export const List = ({shoppingList})=>{
    return (
        <>
        <h2> Things I need to buy today</h2>
        Total of products {shoppingList.length}
        <hr />
        <ul>
           {shoppingList.map((product)=>
           <Product product={product} key={product}/>)}
        </ul>
        </>
    )
}

