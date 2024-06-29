import React from 'react';
import {Layout, List, Card, Rate} from 'antd';
import {Link} from 'react-router-dom';

const {Content} = Layout;
const {Meta} = Card;

const data = [
    
        {id:'0', title: 'title', stars: 0, addr:"addr", desc: "description", imgs: ["https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*"]},
        {id:'1', title: 'title', stars: 1, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {id:'2', title: 'title', stars: 2, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {id:'3', title: 'title', stars: 3, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {id:'4', title: 'title', stars: 4, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]},
        {id:'5', title: 'title', stars: 5, addr:"addr", desc: "description", imgs: ["https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]}
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
                    <Link target="_blank" to={{pathname:`/detail`, search:`id=${item.id}`}}>
                        <Card
                            title={item.title}
                            style={{width: 300}}
                            cover={<img style={{height: 200}} alt="example" src={item.imgs[0]} />}
                        >
                            <Rate disabled defaultValue={item.stars} />
                            <Meta title={item.addr} description={`${item.desc.substring(0, 16)}...`} />
                        </Card>
                    </Link>    
                </List.Item>
            )}
        />    
    </div>
    );
}

export default Body;