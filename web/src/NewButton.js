import React from 'react';
import {Button, Modal, Input, Row, Col, Rate, Upload} from 'antd';
import {useState} from 'react';
import Maps from './Maps';
import {PlusOutlined} from '@ant-design/icons';

const {TextArea} = Input;
const getBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
});

// New component
const New = () => {
    const [show, setShow] = useState(false);

    const [maxUploadPicNum] = useState(5);

    const[imagePreviewShow, setImagePreviewShow] = useState(false);
    const[imagePreviewTitle, setImagePreviewTitle] = useState('');
    const[imagePreviewSrc, setImagePreviewSrc] = useState('');

    const [picList, setPicList] = useState([]);

    const handelShowModal = () => {
        setShow(true);
    }

    const handelCancelModal = () => {
        setShow(false);
    }

    const handelOKModal = () => {
        console.log("New");
        setShow(false);
    }

    const uploadImagePreviewHandle = async(file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setImagePreviewSrc(file.url || file.preview);
        setImagePreviewShow(true);
        setImagePreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    }

    const imagePreviewShowCancel = () => { 
        setImagePreviewShow(false);
    }
    
    const uploadImageHandle = ({file, fileList, event}) => {
        setPicList(fileList);
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    )

    return(
        <div style={{float:'right', display:'block', width:'100px'}}>
            <Button style={{
                backgroundColor:'transparent',
                color:'rgba(255,255,225)',

            }}
            size='large'
            onClick={handelShowModal}
            >New</Button>

            <Modal width={"800px"} title="New Campground" open={show} onOk={handelOKModal} onCancel={handelCancelModal}>
                <Row><Col span={3}>Name: </Col></Row>
                <Row><Col span={24}><Input size="small" /></Col></Row>

                <Row><Col span={3}>Title: </Col></Row>
                <Row><Col span={24}><Input size="small" /></Col></Row>

                <Row><Col span={3}>Rating: </Col></Row>
                <Row><Col span={24}><Rate /></Col></Row>

                <Row><Col span={3}>Addresss: </Col></Row>
                <Row><Col span={24}><Input size="small" /></Col></Row>

                <Row><Col span={3}>Location: </Col></Row>
                <Row><Col span={24}><Maps latlng={{lat:0, lng:0}} zoom={6} /></Col></Row>

                <Row><Col span={3}>Images: </Col></Row>
                <Row><Col span={24}>
                    <Upload
                        action = ""
                        listType="picture-card"
                        fileList={picList}
                        onPreview={uploadImagePreviewHandle}
                        onChange={uploadImageHandle}
                    >
                        {picList.length >= maxUploadPicNum ? null : uploadButton}
                    </Upload>
                </Col></Row>

                <Row><Col span={3}>Description: </Col></Row>
                <Row><Col span={24}><TextArea row={4} /></Col></Row>
            </Modal>
            <Modal open={imagePreviewShow} title={imagePreviewTitle} footer={null} onCancel={imagePreviewShowCancel}>
                <img alt="pic" style={{width:"100%"}} src={imagePreviewSrc} />
            </Modal>
            
        </div>
    );
}

export default New;