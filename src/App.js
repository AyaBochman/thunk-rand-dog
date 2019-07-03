import React, { Component } from 'react';

import './App.css';

const list = ["ride a unicorn", "travel to amsterdam", "finish my blog post", "feed my dog", "workout 3 times", "watch GOT"]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      found: {},
    }
    this.myRef = React.createRef();
  }

clearSelection = ()=>{
  this.setState({
    found: {}
  })
}

handleChange = (e) => {
  console.log(this.myRef.current)
  
      let listItems = this.myRef.current.childNodes;
  console.log(listItems)
  
      const foundItem = {};
      if (e.target.value.length > 2) {
  
    
        listItems.forEach((item, i) => {
  
          if (item.innerText.toLowerCase().includes(e.target.value)) {

            foundItem[i] = true;
            console.log(foundItem)
            this.setState({
              found: foundItem
            })
  
          }
          
        })
      }
  
      if (e.target.value === "") {
    this.clearSelection();
      }
    }


  render() {

    return (

      <div className="App">
        <h3>My Todo App</h3>
        <small>Search for todo's in your list</small>
        <br />
        <input type={'text'} placeholder={'search...'} onChange={this.handleChange} />
        <br />
        <br />
        <div ref={this.myRef}>
          {list.map((item, i) => {
            return <li key={i} className={this.state.found[i] ? 'highlight' : null}>{item}</li>
          })}
        </div>

      </div>
    );
  }
}


export default App;

