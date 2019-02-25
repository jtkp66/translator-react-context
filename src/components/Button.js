import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

// Consumer approach before refactoring.

// class Button extends Component {
//   render() {
//     return (
//     <button className="ui button primary">
//       <LanguageContext.Consumer>
//         {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
//       </LanguageContext.Consumer>
//     </button>
//     );
//   }
// }

export default Button;

  // this.context APPROACH

  // class Button extends Component {
  //     static contextType = LanguageContext;

  //   render() {
  //       const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
  //     return <button className="ui button primary">{text}</button>;
  //   }
  // }

  // export default Button;
