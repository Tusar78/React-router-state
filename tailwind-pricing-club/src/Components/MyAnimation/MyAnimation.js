import React from 'react';
import { useSpring, animated } from 'react-spring'

const MyAnimation = () => {
  const styles = useSpring({
    loop: true,
    to: [
      {opacity: 1, color: '#ffaaee'},
      {opacity: 0, color: 'rgb(14, 26, 19)'}
    ],
    from: {opacity: 0, color: 'red'},
  })
  return (
    <div>
      <animated.div style={styles}>Hello React!</animated.div>
    </div>
  );
};

export default MyAnimation;