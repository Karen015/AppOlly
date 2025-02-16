import { Carousel } from 'antd';
import './style/index.css'

const CustomersSection = () => (
    <div className="customers_main_container">
        <div className="customers_header">
            <div>
                <h2>
                    OUR HAPPY CUSTOMER
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. <span>Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                </p>
            </div>
        </div>
        <Carousel 
            autoplaySpeed={3000}
            dots={{ className: 'custom_dots' }}
            draggable={true}
            speed={1000}
            autoplay={{
                dotDuration: true,
            }}>

            <div className="customer_card">
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/7da0/7f5e/f5e0b560e6c978f51720dc985b38178e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ID5GcFqBEijIskfhWkOiSopc1zIELxgcq0C7V4MrjaInIwOb8ZOJm0~9Q475FXO85305SxjYl7rqsACNFQFGES6C~azC9NqHLmHJkNclUXyTCk80UjFR5D7VaB4ipir4n~8T4tfS1v-k-CXEZNYDBnouNJw-fJ-EAn3g~Yw6GamfHpIFKt9WKQa7phgksTtEeZSNCWv-RWxg2uMbSuynhqOPAjHphHuvR5nYsnECpiY1n2FZCKyC~dSNtm-fTpY43mYi1Cs-GKhPUyLLva35iv~WrkjI1Kilrfa3X0KVBf87tCh360k~a1moVJn2WPMBA9R2263wzeofRedTHPuBqQ__"  alt="girl" />
                    <h2>ANN LUBIN</h2>
                    <h4>CO-FOUNDER</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.<span> Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                    </p>
                </div>
            </div>
            <div className="customer_card">
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/7da0/7f5e/f5e0b560e6c978f51720dc985b38178e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ID5GcFqBEijIskfhWkOiSopc1zIELxgcq0C7V4MrjaInIwOb8ZOJm0~9Q475FXO85305SxjYl7rqsACNFQFGES6C~azC9NqHLmHJkNclUXyTCk80UjFR5D7VaB4ipir4n~8T4tfS1v-k-CXEZNYDBnouNJw-fJ-EAn3g~Yw6GamfHpIFKt9WKQa7phgksTtEeZSNCWv-RWxg2uMbSuynhqOPAjHphHuvR5nYsnECpiY1n2FZCKyC~dSNtm-fTpY43mYi1Cs-GKhPUyLLva35iv~WrkjI1Kilrfa3X0KVBf87tCh360k~a1moVJn2WPMBA9R2263wzeofRedTHPuBqQ__"  alt="girl"  />
                    <h2>ANN LUBIN</h2>
                    <h4>CO-FOUNDER</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.<span> Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                    </p>
                </div>
            </div>
            <div className="customer_card">
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/7da0/7f5e/f5e0b560e6c978f51720dc985b38178e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ID5GcFqBEijIskfhWkOiSopc1zIELxgcq0C7V4MrjaInIwOb8ZOJm0~9Q475FXO85305SxjYl7rqsACNFQFGES6C~azC9NqHLmHJkNclUXyTCk80UjFR5D7VaB4ipir4n~8T4tfS1v-k-CXEZNYDBnouNJw-fJ-EAn3g~Yw6GamfHpIFKt9WKQa7phgksTtEeZSNCWv-RWxg2uMbSuynhqOPAjHphHuvR5nYsnECpiY1n2FZCKyC~dSNtm-fTpY43mYi1Cs-GKhPUyLLva35iv~WrkjI1Kilrfa3X0KVBf87tCh360k~a1moVJn2WPMBA9R2263wzeofRedTHPuBqQ__"  alt="girl"  />
                    <h2>ANN LUBIN</h2>
                    <h4>CO-FOUNDER</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.<span> Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                    </p>
                </div>
            </div>
            <div className="customer_card">
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/7da0/7f5e/f5e0b560e6c978f51720dc985b38178e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ID5GcFqBEijIskfhWkOiSopc1zIELxgcq0C7V4MrjaInIwOb8ZOJm0~9Q475FXO85305SxjYl7rqsACNFQFGES6C~azC9NqHLmHJkNclUXyTCk80UjFR5D7VaB4ipir4n~8T4tfS1v-k-CXEZNYDBnouNJw-fJ-EAn3g~Yw6GamfHpIFKt9WKQa7phgksTtEeZSNCWv-RWxg2uMbSuynhqOPAjHphHuvR5nYsnECpiY1n2FZCKyC~dSNtm-fTpY43mYi1Cs-GKhPUyLLva35iv~WrkjI1Kilrfa3X0KVBf87tCh360k~a1moVJn2WPMBA9R2263wzeofRedTHPuBqQ__"  alt="girl"  />
                    <h2>ANN LUBIN</h2>
                    <h4>CO-FOUNDER</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.<span> Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                    </p>
                </div>
            </div>
            <div className="customer_card">
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/7da0/7f5e/f5e0b560e6c978f51720dc985b38178e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ID5GcFqBEijIskfhWkOiSopc1zIELxgcq0C7V4MrjaInIwOb8ZOJm0~9Q475FXO85305SxjYl7rqsACNFQFGES6C~azC9NqHLmHJkNclUXyTCk80UjFR5D7VaB4ipir4n~8T4tfS1v-k-CXEZNYDBnouNJw-fJ-EAn3g~Yw6GamfHpIFKt9WKQa7phgksTtEeZSNCWv-RWxg2uMbSuynhqOPAjHphHuvR5nYsnECpiY1n2FZCKyC~dSNtm-fTpY43mYi1Cs-GKhPUyLLva35iv~WrkjI1Kilrfa3X0KVBf87tCh360k~a1moVJn2WPMBA9R2263wzeofRedTHPuBqQ__"  alt="girl"  />
                    <h2>ANN LUBIN</h2>
                    <h4>CO-FOUNDER</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. <span> Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                    </p>
                </div>
            </div>
        </Carousel>
  </div>
);

export default CustomersSection;
