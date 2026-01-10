import Banner from "../Banner/Banner";
import MostVoted from "../Most Voted/MostVoted";
import Section from "../Section/Section";
import Testimonial from "../Testimonials/Testimonial";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import UpcomingCategory from "./UpcomingCategory/UpcomingCategory";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MostVoted></MostVoted>
            <UpcomingCategory/>
            <WhyChooseUs/>
            <Testimonial></Testimonial>
            <Section></Section>
        
        </div>
    );
};

export default Home;