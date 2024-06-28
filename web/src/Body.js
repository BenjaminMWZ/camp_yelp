import React from 'react';
import {Layout, List, Card, Rate} from 'antd';

const {Content} = Layout;
const {Meta} = Card;

const data = [
    
        {title: 'title', stars: 3, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {title: 'title', stars: 3, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {title: 'title', stars: 3, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {title: 'title', stars: 3, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {title: 'title', stars: 3, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {title: 'title', stars: 3, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]}
    ]
    
// Body component
const Body = ({windowHeight}) => {
    return (
        <Content style={{minHeight:windowHeight}}>
            <Camps />
        </Content>
    );
}

// Camps component
const Camps = () => {
    return (
        <div style={{marginLeft: "35px", marginTop: "20px"}}>
        <List
        grid = {{column: 4}}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Card
                        title={item.title}
                        style={{width: 300}}
                        cover={<img style={{height: 200}} alt="example" src={item.imgs[0]} />}
                    >
                        <Rate disabled defaultValue={item.stars} />
                        <Meta title={item.title} description={`${item.desc.substring(0, 16)}...`} />
                        
                    </Card>
                </List.Item>
            )}
        />    
    </div>
    );
}

export default Body;