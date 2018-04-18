import React from 'react';
import Header from './Header';
import Transition from 'react-transition-group/Transition';

export default class MainPage extends React.Component{
  state = {
    show: false,
    entered: false
  };

  componentDidMount(){
    this.setState({ show: true })
  }

  componentWillUnmount(){
    this.setState({show: false})
  }

  render(){
    const onExit = (node) => {
      const { style } = node;
      style.opacity= '0';
    }

    const { show } = this.state;

    const duration = 750;

    const defaultStyle = {
      transition: `all ${duration}ms`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 0, transform: `translate3d(100%, 0, 0)` },
      entered:  { opacity: 1, transform: `translate3d(0, 0, 0)` },
      exiting:  { opacity: 1, transform: `translate3d(0, 0, 0)` },
      exited:   { opacity: 0, transform: `translate3d(100%, 0, 0)` },
    };
    
    return(
      <div>
        <Transition 
          in={show} 
          timeout={{enter: duration, exit: duration}}
          onExit={onExit}
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