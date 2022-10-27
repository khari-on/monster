import {Component} from "react";
 import InputBox from "./component/inputbox";
 import CardList from "./card-list";
 import './app.css'
//const url = "'https://jsonplaceholder.typicode.com/users"
class App extends Component {
   constructor(){
    super()
    this.state={
    monsters:[],
    searchChange:""
    }
   }

  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>this.setState(()=>{return {monsters:data}},
    
     
     ))
  };

 searchFunction = (e)=>{
    const searchChange=e.target.value.toLowerCase()
    this.setState(()=>{
      return {searchChange}
    })
  }




  render() {

   const {monsters,searchChange}=this.state
   const {searchFunction}=this

    const filterState = monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchChange)
    })
    // console.log(filterState)
    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <InputBox  onChangeHandler={searchFunction}/>
      <CardList filterState={filterState} />
    </div>
    );
  }
}
export default App;
