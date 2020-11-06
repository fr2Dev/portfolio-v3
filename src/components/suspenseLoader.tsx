import React from 'react';
import { WrapperSuspense, Loader } from './styled';

const SuspensLoader = () => {
  return (
    <WrapperSuspense>
      <Loader />
    </WrapperSuspense>
  );
};

export default SuspensLoader;
