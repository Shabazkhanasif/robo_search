import React,{Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll'
import Errorboundary from '../Components/Errorboundary';


class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			Searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}
	onSearchchange=(event)=>{
		this.setState({Searchfield:event.target.value})
		
	}
render(){
	const{robots,Searchfield}=this.state;
	const filterrobot=robots.filter(robots=>{
			return robots.name.toLowerCase().includes(Searchfield.toLowerCase());
		});
	if(robots.length===0){
		return <h1>loading please wait....</h1>
	}else{
		return(<div className='tc'>
	    <h1 className='f1'>Robofriends</h1>
	    <Searchbox searchchange={this.onSearchchange}/>
	    <Scroll>
	    <Errorboundary>
	    <Cardlist robots={filterrobot}/>
	    </Errorboundary>
	    </Scroll>
	</div>);
	}
	
}

}

export default App;