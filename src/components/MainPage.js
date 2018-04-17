import React from 'react';
import Header from './Header';
import Transition from 'react-transition-group/Transition';

export default class MainPage extends React.Component{
  state = {
    show: false,
    entered: false
  };

  render(){
    const { show } = this.state;

    const duration = 1000;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0
    }

    const transitionStyles = {
      entering: { opacity: 0 },
      entered:  { opacity: 1 },
    };
    
    return(
      <div>
        <Transition 
          in={true} 
          timeout={duration}
          appear={true}
        >
          {(state) => (
            <h1 style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              AYYYYYYYYYYY
            </h1>
          )}
        </Transition>
      </div>
    )
  }
}