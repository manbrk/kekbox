import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coolAction } from './actions';
import { pewSelector } from './selectors';

const App = () => {
  const dispatch = useDispatch();

  const pew = useSelector(pewSelector);

  dispatch(coolAction());

  return (
    <div>
      <h1>Hello React</h1>
      <p>{`Data from store: ${pew}`}</p>
    </div>
  )
};

export default App;
