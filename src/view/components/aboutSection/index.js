import { CheckCircleFilled } from '@ant-design/icons';
import './style/index.css'
const AboutSection = () => {
    return (
        <div className="about_main_container">
            <div className="about_header_container">
                <h2>ABOUT OUR APP</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <span> Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span></p>
            </div>
            <div className="about_content_section">
                <div className="about_content1">
                    <img src="https://s3-alpha-sig.figma.com/img/9149/8b75/051f3be64d72d95eb3d9b60de0b7e1c3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YZMtatMrdY~Ywnfhckl6BYjrLJkb3687fQxljnAjxbVFtU1-27-1y30~1MfoAYPCqHkYh648VZASd2DtDsRUuRWjULgXiNd-vuup1J5-vJjOc7Lz-ToSGN9W6Ee42qVhjOj1uA2h3yS7MXDFbXdV5hPvNvfmqtYZW8LepU5JPiGT7lVdmIFXwmxjjwVPaFOsBhl0YQJAl8mrGHJ2AAFmWOY2xcM6YKY5f69ZIuybnMNvYc14au3nXOTY-1~ieJfxs~8tyTUuJ4HSsa53pT1~yS-z7k1EbjhkbwogemAZSOxmQ6C~jySezMebNAYc~fwvwh7cIiSgCtsoFHfkSBQIwg__" alt="phone"></img>
                    <div className="circle"></div>
                </div>
                <div className="about_content2">
                    <div>
                        <h3>
                            <CheckCircleFilled style={{color: "#5956E9"}}/>  CREATIVE DESIGN
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                    </div>
                    <div>
                        <h3>
                            <CheckCircleFilled style={{color: "#5956E9"}}/> EASY TO USE
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                    </div>
                    <div>
                        <h3>
                            <CheckCircleFilled style={{color: "#5956E9"}}/> BEST USER EXPERIENCE
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutSection