import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-spring';
import styled from 'styled-components';

// Little helpers ...
const url = (name, wrap = false) => {
  const url = `https://awv3node-homepage.surge.sh/build/assets/${name}.svg`;
  return wrap ? `url(${url})` : url;
};

const Divider = styled(Parallax.Layer)`
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
         <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#805E73' }}
        /> 

        <Parallax.Layer offset={1} speed={-0.2} factor={2}>
        <Divider
          bg="blue"
          clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
          offset={1}
          factor={1}
          speed={0.4}
        />
        <Divider
          bg="#805E73"
          clipPath="polygon(0 0%, 100% 25%, 100% 100%, 0 75%)"
          offset={1}
          factor={1}
          speed={0.2}
        />
        </Parallax.Layer> 

       <Parallax.Layer offset={1} speed={-0.2} factor={2}>
          <Divider
            bg="#87BCDE"
            clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
          />
        </Parallax.Layer> 

        <Parallax.Layer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />

      <Parallax.Layer
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        /> 

        <Parallax.Layer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={url('satellite4')}
            style={{ width: '15%', marginLeft: '70%' }}
          />
        </Parallax.Layer>

      <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '5%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '15%', marginLeft: '75%' }}
          />
        </Parallax.Layer> 

        <Parallax.Layer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} />
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        /> 

        <Parallax.Layer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>
            Hello,<br /> I'm Emanuel Suriano.
          </h1>
          <h2  offset={2.5}
          speed={-0.4}>I like to build things</h2>
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={url('bash')} style={{ width: '40%' }} />
        </Parallax.Layer> 

        <Parallax.Layer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </Parallax.Layer> 
      </Parallax>
    );
  }
}

export default App;
