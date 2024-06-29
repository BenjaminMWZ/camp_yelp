import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {useNavigate} from 'react-router-dom';
import New from './NewButton';
const {Header} = Layout;

// Head componentß
const Head = () =>{
    const [menus, setMenus] = useState([{title:'Campgrounds', path:'/'}, {title:'About', path:'/'}]);
    const navigate = useNavigate();
    const menuClick = (event) => {
        console.log(event);
        navigate(event.item.props.path);
    }

    return (
        <Header style={{backgroundColor: 'rgb(220, 54, 70)'}}>
            <div style = {{
                color: 'white', fontSize:'22px', float:'left', width:'120px', display:'block'
            }}> CampYelp </div>

            <div style={{
                marginLeft:'50px',
                float:'left',
                display:'block',
                width:'400px',
            }}>
                <Menu style={{
                    backgroundColor: 'transparent',
                    fontSize: '16px'
                }}
                mode='horizontal'
                items={menus.map((item)=>{
                    const key = item.title;
                    return {key, label: `${item.title}`, path: item.path};
                })}
                onClick={menuClick}
                />
            </div>
            <New />
        </Header>
    );
}

export default Head;