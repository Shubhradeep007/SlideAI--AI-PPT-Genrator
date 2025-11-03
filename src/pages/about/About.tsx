import AboutCard from "./AboutCard"
import { AboutCardMobileResponsive } from "./AboutCardMobileResponsive"
import { AboutFeature } from "./AboutFeature"
import AboutFooter from "./AboutFooter"
import AboutTopScton from "./AboutTopScton"

const About = () => {
  return (
    <>
    <AboutTopScton />
    <div className="hidden md:block">
        <AboutCard />
      </div>
      <div className="block md:hidden">
        <AboutCardMobileResponsive />
      </div>
    <AboutFeature />
    <AboutFooter />
    </>
  )
}

export default About