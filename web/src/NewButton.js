import React from 'react';
import {Button} from 'antd';

// New component
const New = () => {
    return(
        <div style={{float:'right', display:'block', width:'100px'}}>
            <Button style={{
                backgroundColor:'transparent',
                color:'rgba(255,255,225)',

            }}
            size='large'>New</Button>
        </div>
    );
}

export default New;