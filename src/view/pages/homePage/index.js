import AboutSection from '../../components/aboutSection'
import HeroSection from '../../components/heroSection'
import DownloadAppSection from '../../components/downloadAppSection'
import HowToSection from '../../components/howToSection'
import TeamSection from '../../components/teamSection'
import BlogSection from '../../components/blogSection'
import Footer from '../../components/footer'
import CustomersSection from '../../components/customerSection'

const HomePage = () => {
    return (
        <div className='main_container'>
            <HeroSection />
            <AboutSection />
            <DownloadAppSection />
            <HowToSection />
            <TeamSection />
            <CustomersSection />
            <BlogSection />
            <Footer />
        </div>
    )
}

export default HomePage