import { Component } from "react";
import {Button} from 'reactstrap'
import {Input} from 'reactstrap'
import {List} from "./List";



class Form extends Component{
    constructor() {
        super ()
        this.state = {
            myInputValue: "",
            marketList: [],
            errors: false,
        };
       
        }
        validations = () => {
            const {marketList,myInputValue}=this.state
            const isDuplicated=marketList.includes(myInputValue)
            this.setState({errors: isDuplicated});
            return isDuplicated;
    }
    render(){
        const {myInputValue,marketList,errors} = this.state
        return(<>
        <form onSubmit={(e)=>{
            e.preventDefault()
            const isNotValid = this.validations()
            if (isNotValid) return
            this.setState({marketList:[...marketList, myInputValue]})
        }}>
            <Input type="text" name="myInput" value={myInputValue} onChange={(e)=>{
                this.setState({myInputValue:e.target.value})}
                } />

            
            <Button style={{margin:10}} color="primary">Add To List</Button>
            {errors && (<h4>you have an error input</h4>)}
        </form>
        <List shoppingList = {marketList}/>
        </>
        )
    }

}

export default Form;

