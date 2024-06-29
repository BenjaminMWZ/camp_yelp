import {useState} from 'react';
import { Col, Layout, Row, Divider, Rate, Carousel, Image, List, Typography, Button, Modal, Input} from 'antd';
import {useSearchParams, userSearch} from 'react-router-dom';
import Maps from './Maps';

const {Content} = Layout;
const {Paragraph, Text} = Typography;
const{TextArea} = Input;

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
                    <Maps latlng={{lat:45, lng:114}} zoom={6}/>
                </Col>
            </Row>
        </Content>
    );
}

// Description component
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
// Iamges component
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

// Comments component
const Comments = () => {
   const [coms, setComs] = useState(comments);
    const commentAddEventHandle = () => {
        setComs([...coms]);
    }

    return (
        <div>
            <List
                header={<CommentButton addEventCallback={commentAddEventHandle} />}
                bordered
                size = "small"                
                dataSource={coms}
                renderItem={(item) => (
                    <List.Item>
                        <Typography>
                            <Paragraph>
                                <span>Usename: {item.user}</span>
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

// CommentButton component
const CommentButton = ({addEventCallback}) => {
    const [show, setShow] = useState(false);

    const [user, setUser]  = useState("");
    const [stars, setStar] = useState(0);
    const [desc, setDesc] = useState("");

    const handelShowModal = () => {
        setUser("");
        setStar(0);
        setDesc("");
        setShow(true);
    }

    const handelCancelModal = () => {
        setShow(false);
    }

    const handelOKModal = () => {
        console.log(user, stars, desc);
        comments.push({user, stars, time: "2024/06/28", comment: desc});
        addEventCallback();
        setShow(false);
    }
    
    return (
        <div>
            <Button type="primary" size="small" onClick={handelShowModal}> Comments</Button>
            <Modal title="Comments" open={show} onOk={handelOKModal} onCancel={handelCancelModal}>
                <Row>
                    <Col span={4}>Usename:</Col>
                    <Col span={21}><Input size='small'  value={user} onChange={e=>{e.persist(); setUser(e.target.value);}}/></Col>
                </Row>
                <Row>
                    <Col span={4}>Raiting:</Col>
                    <Col span={21}><Rate value={stars} onChange={setStar}/></Col>
                </Row>
                <Row>
                    <Col span={4}>Comments:</Col>
                    <Col span={21}><TextArea rows={4} value={desc} onChange={e=>{e.persist(); setDesc(e.target.value);}} /></Col>
                </Row>
            </Modal>
        </div>
    );
}



export default Detail;