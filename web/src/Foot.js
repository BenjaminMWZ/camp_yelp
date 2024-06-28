import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

// Foot component
const Foot = () => {
    return (
        <Footer style={{
            textAlign: 'center',
        }}>
            CampYelp @2024 by Benjamin Mao
        </Footer>
    );
}

export default Foot;