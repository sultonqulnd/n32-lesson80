import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const HookCakes = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
    </div>
  );
};

export default HookCakes;
