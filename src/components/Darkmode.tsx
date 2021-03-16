import * as React from 'react';


interface IEnablaDarkModeProp {
  enableDarkMode():void
}

const Darkmode = ( {enableDarkMode}: IEnablaDarkModeProp ) => {
    return (
        <button className='br-pill bg-gray hover-white' onClick={enableDarkMode}>Dark/Light Mode</button>
    );
};

export default Darkmode;