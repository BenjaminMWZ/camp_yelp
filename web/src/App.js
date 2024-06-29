import React, {useState} from 'react'
import { Layout } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';
import Detail from './Detail';

// App component
const App = () => {
    const [bodyHeight, setBodyHeight] = useState(window.innerHeight - 64 - 64);

    return(
        <BrowserRouter>
            <Layout>
                <Head />
                
                <Routes>
                    <Route path='/' element = {<Body windowHeight={bodyHeight}/>}/>
                    <Route path='/detail' element = {<Detail windowHeight={bodyHeight}/>}/>
                </Routes>

                <Foot />
            </Layout>
        </BrowserRouter>
    );
}
export default App