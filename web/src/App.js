import React, {useState} from 'react'
import { Layout } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';
import './index.css';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';

// App component
const App = () => {
    const [bodyHeight, setBodyHeight] = useState(window.innerHeight - 64 - 64);

    return(
        <Layout>
            <Head />
            <Body windowHeight={bodyHeight}/>
            <Foot />
        </Layout>
    );
}
export default App