'use client';

import CountUp from 'react-countup';
import React from 'react';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp 
        duration={1.75}
        decimals={2}
        decimal=","
        prefix="£"
      end={amount} 
    />
    </div>
  );
}

export default AnimatedCounter;