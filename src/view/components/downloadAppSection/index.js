import { StarFilled, LikeFilled, DownloadOutlined } from '@ant-design/icons';
import './style/index.css'
const DownloadAppSection = () => {
    return (
        <div className="download_main_container">
            <div className="download_content_container">
                <div className="download_text">
                    <h2>
                        Download App <br />
                        Now
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.<span> Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                    </p>
                </div>            
                <div className='button_container'>
                    <a href="https://play.google.com/store/games?hl=ru" target="_blank" rel="noreferrer">      
                        <img className="download_buttons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png' alt="google play" preview={false} />      
                    </a>
                    <a href='https://www.apple.com/app-store/' target="_blank" rel="noreferrer">
                        <img className="download_buttons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/270px-Download_on_the_App_Store_Badge.svg.png' alt="appStore" preview={false} />      
                    </a>
                </div>
                <div className="rate_container">
                    <div>
                        <DownloadOutlined />
                        <p>59865</p>    
                        <p>DOWNLOAD</p>
                    </div> 
                    <div>
                        <LikeFilled />
                        <p>LIKE</p>    
                        <p>59865</p>
                    </div> 
                    <div>
                        <StarFilled />
                        <p>59865</p>    
                        <p>5 STAR RATING</p>
                    </div> 
                </div>
            </div>
            <div className="img_container">
                <img src="https://s3-alpha-sig.figma.com/img/c1e0/d8ba/d68a1eae874b44857a021f9e647a7def?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GQdx-6oHeWl-sshO99mzCpnEul~cRdavPLucyA2cEtnB~dmsoho~M6-CEO2lqgPTik-ETePRJ~BBgbTFtfyGhj70N2P38ryFRZteFEYRzjjbMXYvWXtSz4KN6~Ne38LGUrJ3NcezYIkqLdiGRrB1LM6WZSxnkuhGPi4kti3mSPpejX1ZgAkVc2ebg2eo~MYFnqt6zKtp9W2S38bY91EPhC3T8XzrHILV1DL-kjguwHRI8L~mazzcuOVs8sj09LHt1rYe6NE4iZru3GJX-AhQAogCKRFa-uqMBHt9Dt6-wwg6-oegJqIQVMW8~zHz6aHOGIk8YVWl0tPfRaBL6EK1pw__" alt="phones"/>
                <div className='circle'></div>
            </div>
        </div>
    )
}

export default DownloadAppSection