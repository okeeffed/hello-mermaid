import React, {Component} from 'react';
import './App.css';
import mermaid from 'mermaid';
import debounce from 'debounce';

class App extends Component {
  /**
   * Debounce the code first. When the function
   * fires, take the value and attempt to update
   * the Mermaid chart.
   *
   * @memberof App
   */
  handleChange = debounce((value) => {
    console.log(value);
    var output = document.getElementById('output');
    try {
      // use the mermaid parse first to ensure code is parsable. If not, throw an
      // error, handle it gracefully and do nothing.
      mermaid.parse(value);

      output.innerHTML = '';

      mermaid.render('theGraph', value, function (svgCode) {
        console.log(svgCode);
        output.innerHTML = svgCode;
      });
    } catch (err) {
      console.error(err);
    }
  }, 600, false);

  /**
   * Render an initial chart on mount.
   *
   * @memberof App
   */
  componentDidMount() {
    var output = document.getElementById('output');
    mermaid.initialize({startOnLoad: true});

    var graphDefinition = `graph TB
    a-->b
    b-->a`;

    mermaid.render('theGraph', graphDefinition, function (svgCode) {
      output.innerHTML = svgCode;
    });
  }

  render() {
    return (
      <div className="App">
        <textarea rows="4" onChange={e => this.handleChange(e.target.value)}/>
        <div id="output"></div>
      </div>
    );
  }
}

export default App;
