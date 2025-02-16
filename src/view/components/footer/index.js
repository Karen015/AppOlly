import { 
    CopyrightCircleOutlined,
    FacebookFilled,
    InstagramFilled,
    TwitterOutlined,
    SendOutlined,
    MailOutlined,
    PhoneFilled,
    YoutubeFilled,
} from '@ant-design/icons';
import { Input, Divider } from 'antd';
import './style/index.css'

const { Search } = Input;

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_contact_info">
                <div>
                    <div className="icon_container">
                        <MailOutlined />
                    </div>
                    <h3>info@youremail.com</h3>
                </div>
                <hr />
                <div>
                    <div className="icon_container">
                        <PhoneFilled />
                    </div>
                    <h3>+880 321 655 9985</h3>
                </div>
            </div>
            <div className="footer_content_contaier">
                <div>
                    <h2>
                        LOGO
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                    </p>
                    <div>
                        <FacebookFilled style={{color: "#5856e8"}} />
                        <Divider type="vertical" style={{borderColor: "#ffffff", fontSize: "20px"}}/>
                        <InstagramFilled />
                        <Divider type="vertical" style={{borderColor: "#ffffff", fontSize: "20px"}} />
                        <TwitterOutlined />
                        <Divider type="vertical" style={{borderColor: "#ffffff", fontSize: "20px"}} />
                        <YoutubeFilled />
                    </div>
                </div>
                <div>
                    <h2>
                        QUICK LINK  
                    </h2>
                    <ul>
                        <li>
                            <a href="LINK">About</a>
                        </li>
                        <li>
                            <a href="LINK">Features</a>
                        </li>
                        <li>
                            <a href="LINK">Screenshot</a>
                        </li>
                        <li>
                            <a href="LINK">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>NEWS LETTER</h2>
                    <p>Subscribe our newsletter to get our latest
                    update & news</p>
                    <Search className="footer_input" placeholder="Your email address" enterButton={<SendOutlined />} />
                </div>
            </div>
            <hr />
            <p className="copyright_text">
                <CopyrightCircleOutlined /> Copyright 2021 .Ojjomedia. All Right Reserved.
            </p>
        </div>
    ) 
}
export default Footer