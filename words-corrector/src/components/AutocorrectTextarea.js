import React from 'react';

class AutocorrectTextarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 'input'
    }
  }
  handleChange = (e) => {
    const { corrections } = this.props
    const input = e.target.value
      let inputWords = input.split(" ")
      for (let i = 0; i < inputWords.length-1; i++) {
        if (corrections.hasOwnProperty(inputWords[i])) {
          console.log('correction is: ', corrections[inputWords[i]]);
          inputWords[i] = corrections[inputWords[i]]
        }
      }
      if(input.charAt(input.length-1) === " "){
        if (corrections.hasOwnProperty(inputWords[inputWords.length-1])) {
          inputWords[inputWords.length-1] = corrections[inputWords[inputWords.length-1]]
        }
      }
      console.log('corrected result: ', inputWords);
      return this.setState({ input: inputWords.join(' ') })
  }
  render () {
    const { input } = this.state
    return (
      <div className="text-center">
        <textarea data-testid="textarea" value={input} onChange={this.handleChange} onKeyDown={this.handleChange} rows={10} cols={80} className="card" />
      </div>
    );
  }
}

export default AutocorrectTextarea;
