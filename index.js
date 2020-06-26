import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import abc from './abc';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      loop: [1,2,3,4]
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <abc name={this.state.name}/>
        <h1>sadfsad</h1>
        loop is below <br/>
        {3+4} {3+4} {3+4}{3+4}
        {3+4} <br/>
        <h1>{3+4}</h1>
        <h1>{3+4}</h1>
        <h1>{3+4}</h1>
        
      {[1,2,3,4,5].map(x=> {<span>{x} 33</span>})}
      <br/> and loop ends
        <select>
               {this.state.loop.map(el => <option value={el} key={el}> {el} </option>)}
        </select>

        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
