import * as React from 'react';

type Props = {
  children?: JSX.Element
}

const Scroll = (props: Props) => {
    return (
        <div style={{ overflowY:'scroll', height:'80vh'}}>
            {props.children}
        </div>
    )
};

export default Scroll