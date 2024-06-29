import { Col, Layout, Row, Divider, Rate, Carousel, Image, List, Typography, Button} from 'antd';
import {useSearchParams, userSearch} from 'react-router-dom';

const {Content} = Layout;
const {Paragraph, Text} = Typography;

// Detail component
const Detail = ({windowHeight}) => {
    const [searchParams] = useSearchParams();

    return (
        <Content style={{minHeight:windowHeight}}>
            <Row style={{marginTop: "30px"}}>
                <Col span={2}></Col>
                <Col span={12}>
                    <Description />
                    <Divider plain>COMMENTS SECTION</Divider>
                    <Comments />
                </Col>
                <Col span={7} offset={1}>
                    <Divider plain>IMAGES SECTION</Divider>
                    <Images />
                    <Divider plain>MAPS SECTION</Divider> 
                    <Maps />
                </Col>
            </Row>
        </Content>
    );
}

// Detail component
const Description = () => {
    return (
        <div>
            <Row><h1>Test</h1></Row>
            <Row style = {{lineHeight:'35px'}}>
                <Col span={6}><Rate disabled defaultValue={4}/></Col>
                <Col offset={1} span={4}><span>average rating 4</span></Col>
                <Col offset={2} span={4}>10 comments</Col>
                <Col offset={1}> released on 2024/06/28</Col>
            </Row>
            <Row style={{marginTop: "20px"}}><h3> Address: this is the address</h3></Row>
            <Row style={{marginTop: "20px"}}><h3>Description</h3></Row>
            <Row style={{marginTop: "10px"}}><span>This is the description of this campground.</span></Row>
        </div>
    );
}

const imgs = ["https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*", "https://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg"]
// Detail component
const Images = () => {
    return (
        <div>
            <Carousel autoplay style={{ backgroundColor: `rgba(209, 209, 209, 0.5)`, height: 300, textAlign: 'center'}}>
                {imgs.map((img, idx)=><Image key={idx} height={300} src={img} />)}
            </Carousel>
        </div>
    );
}

const comments = [
    {user:"Alice", stars:0, time:"2024/06/28", comment:"bad"},
    {user:"Bob", stars:1, time:"2024/06/28", comment:"so so"},
    {user:"Cathy", stars:2, time:"2024/06/28", comment:"good"},
    {user:"David", stars:3, time:"2024/06/28", comment:"wonderful"},
]
// Detail component
const Comments = () => {
    return (
        <div>
            <List
                header={<Button type="primary" size="small"> Comments</Button>}
                bordered
                size = "small"                
                dataSource={comments}
                renderItem={(item) => (
                    <List.Item>
                        <Typography>
                            <Paragraph>
                                <span>{item.user}</span>
                                <span style={{marginLeft: '20px'}}>rating: {item.stars}</span>
                                <span style={{marginLeft: '20px'}}>time: {item.time}</span>
                            </Paragraph>
                            <Text>{item.comment}</Text>
                        </Typography>
                    </List.Item>
                )}
            />
        </div>
    );
}

// Maps component
const Maps = () => {
    return (
        <div>
            maps
        </div>
    );
}

export default Detail;