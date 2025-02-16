import Navbar from '../navbar'
import { Typography, Image } from 'antd'
import './style/index.css'

const { Title } = Typography

const HeroSection = () => {
    return (
        <div className='hero_section'>
            <Navbar />
            <div className='hero_section_container'>
                <div className='hero_section_content1'>
                    <Title level={1}>
                        A Great App Makes<br />
                        Your Life Better
                    </Title>
                    <h3 style={{color: "#6C6C72", margin: "0"}}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <span>Exercitation veniam consequat sunt nostrud amet.</span>
                    </h3>

                    <h1 style={{color: "#000000"}}>Download App Now</h1>
                    
                    <div className='button_container'>
                        <a href="https://play.google.com/store/games?hl=ru" target="_blank" rel="noreferrer">      
                            <img className="download_buttons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png' alt="play market" preview={false} />      
                        </a>
                        <a href='https://www.apple.com/app-store/' target="_blank" rel="noreferrer">
                            <img className="download_buttons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/270px-Download_on_the_App_Store_Badge.svg.png' alt="appStore" preview={false} />      
                        </a>
                    </div>
                </div>
                <div className='hero_section_content2'>
                    <Image className='phone_image' src='https://s3-alpha-sig.figma.com/img/c14d/77e3/a731f607bcb9c1144bd35527e6a3d633?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RSegyaD598SqlmWX0XbLxmS2DVzkZMn5x0o3XgtiYuqsvr-iwB7~bg1oujOvJM3vHKxoIV7HnI4qA3-CY~1a3236AfIltogwA3YJitQzlnXajniJMfU3gqKMnLbxDk5dxLrz56pmx6-hUZo43peuulbzUYbS2vvOpskSeAKgoW3bU6RwNN2XJR5YoY~gTTq1GZ8lOaNCQPVDWI263tAtRGmbwSF0WcK2yDRKc40OYMEWMuEFwUm4~iL4pvkDLV6qhgEgs-9QTTSa4kDRCI3bPj94EfpN1yaSwlY7CfSXf8iCPFcJ2e1tny7fC-fahC1y72FZlfXAAMV5n-i~xYFUBg__' preview={false}/>
                </div>
            </div>
        </div> 
    )
}

export default HeroSection