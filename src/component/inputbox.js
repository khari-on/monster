import React,{Component}from "react";



class InputBox extends Component{
    render(){
         const {onChangeHandler}= this.props   

        return(
            <input type='search' className="search-box" onChange={onChangeHandler} />
            
        )
       
    }
}

export default InputBox;










 