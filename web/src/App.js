import React from 'react'
import { Layout } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';

function App(){
    return(
        <Layout>
            <Header style={{
                textAlign: 'center', color: '#fff', height: 64,
                paddingInline: 50, lineHeight: '64px', backgroundColor: '#7dbcea'
            }}> Header123123 </Header>

            <Content style={{
                textAlign: 'center', minHeight: 120, lineHeight: '120px',
                color: '#fff', backgroundColor: '#108ee9'
            }}> Header123123 </Content>

            <Footer style={{
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#7dbcea'
            }}> Header123123 </Footer>
        </Layout>
    );
}
export default App