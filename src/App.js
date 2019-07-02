import React, { Component } from 'react';

import './App.css';

const list = ["ride a unicorn", "travel to amsterdam", "finish my blog post", "feed my dog", "workout 3 times", "watch GOT"]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { found: {},
  }
  this.myRef = React.createRef(); 
  }

  handleChange = (e) => {

    let listItems = this.myRef.current.childNodes;
    console.log(listItems)
    var foundItem = {};
    if (e.target.value.length > 2) {
      listItems.forEach((item, i) => {

        if (item.innerText.toLowerCase().includes(e.target.value)) {

          foundItem[listItems[i].innerText] = true;
          console.log(foundItem)
          this.setState({
            found: foundItem
          })

        }
      })
    }

    if (e.target.value == "") {
      this.setState({
        found: {}
      })
    }
  }

  render() {

    return (

      <div className="App">

        <h1>Search in List</h1>
        {/* <p>hello</p> */}
        <input type={'text'} placeholder={'search...'} onChange={this.handleChange} />
        <br />
        <br />
        <div ref={this.myRef}>
          {list.map((item, i) => {
            return <li key={i} className={this.state.found[item] ? 'highlight' : null}>{item}</li>
          })}
        </div>

      </div>
    );
  }
}


export default App;

