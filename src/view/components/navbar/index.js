import {
    FacebookFilled,
    InstagramFilled,
    TwitterOutlined,
    YoutubeFilled,
    MailFilled,
    PhoneFilled,
    MenuOutlined,
    CloseOutlined
} from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import './style/index.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className="navbar">
            <div className="contact_info">
                <div>
                    <p>
                        <MailFilled /> Info@youremail.com
                    </p>
                    <p>
                        <PhoneFilled /> (480) 555-0103
                    </p>
                </div>
                <div>
                    <FacebookFilled />
                    <InstagramFilled />
                    <TwitterOutlined />
                    <YoutubeFilled />
                </div>
            </div>
            <div className="navigation">
                <Button type="primary" onClick={showDrawer} className="ant_drawer_button">
                    <MenuOutlined />
                </Button>
                <Drawer
                    title="Navigation"
                    placement={"left"}
                    closable={false}
                    onClose={onClose}
                    extra={
                        <Space>
                            <Button type="primary" onClick={onClose}>
                                <CloseOutlined />
                            </Button>
                        </Space>
                    }
                    open={open}
                    key={"left"}
                >
                    <div className="drawer_navigation_buttons">
                        <a href="LINK" className="button" style={{textDecoration: 'underLine', color: '#5856e8' }}>HOME</a>            
                        <a href="LINK" className="button">ABOUT</a>
                        <a href="LINK" className="button">FEATURES</a>                
                        <a href="LINK" className="button" >SCREENSHOT</a>
                        <a href="LINK" className="button">BLOG</a>
                        <a href="LINK" className="button" style={{backgroundColor: '#5856e8', color: '#ffffff'}}>DOWNLOAD</a>
                    </div>
                </Drawer>

                <div className="navigation_buttons_container">                    
                    <a href="LINK" className="button" style={{textDecoration: 'underLine', color: '#5856e8' }}>HOME</a>            
                    <a href="LINK" className="button">ABOUT</a>
                    <a href="LINK" className="button">FEATURES</a>                
                </div>
                <a href="LINK" className="logo_button">
                    <img className="logo" src="https://s3-alpha-sig.figma.com/img/920d/e045/e7cd76ae6919224d6f9837cb0536846d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lq5t60oLTjTmEVsCAvpdgJQV8x-0NCJFcBBv2nPaiq~LkvOgiajvJrnSR34~SZ0eZgfFVKd8fRj1RkC7aJVG8NXIDZz9z-hZ3QZvzUMb~MpB9MdQ2-woRqlFrRXlmII1Ma3FdxLCB6wbhzzW8vatKyQ3S3JCiFbquQkyWP9PvgZzG~Nb629lBHr48JLbCQCDblK9~LYprGyuY~1WdAmCN-rBNMfZ4GOlgwjdipyR1Q9K-QRgZ7JfJsDJwMuWfSVLlLTcE7v~lAhd-Zc8eXdEbLzEmRs0pVnT9Rj7-rZ5gINmqnWoeK~57-uza11HZ4nHYCeB~GgXaPqaDZJjXLFlFg__" alt="logo" preview={false} />
                </a>
                <div className="navigation_buttons_container">
                    <a href="LINK" className="button" >SCREENSHOT</a>
                    <a href="LINK" className="button">BLOG</a>
                    <a href="LINK" className="nav_download_button" style={{backgroundColor: '#5856e8', color: '#ffffff'}}>DOWNLOAD</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar