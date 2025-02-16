import { PlaySquareFilled } from '@ant-design/icons'
import './style/index.css'
const HowToSection = () => {
    return (
        <div className="how_to_container">
            <div className="bg_img">
                <div>
                    <h2>
                        HOW TO USE THE APP PERFECTLY
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <span>Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                    </p>
                </div>
            </div>
            <div className="player_section">
                <div>
                    <div>
                        <div>
                            <div>
                                <PlaySquareFilled className="play_icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HowToSection