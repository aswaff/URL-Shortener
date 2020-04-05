import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import ClipLoader from "react-spinners/ClipLoader"

const LoadingSpinerComponent = (props) => {
     const { promiseInProgress } = usePromiseTracker();
 
  return (
    <div>
    {
      (promiseInProgress === true) ?
        <ClipLoader color="#61dafb" />
      :
        null
    }
  </div>
  )
};

export default LoadingSpinerComponent;