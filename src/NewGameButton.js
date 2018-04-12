import React from 'react'

export default class extends React.Component {
  render() {
    return(
      <button onClick={this.props.reset}>NewGame</button>

    )

  }
}
