import Banner from "../Banner/Banner";
import MostVoted from "../Most Voted/MostVoted";
import Section from "../Section/Section";
import Testimonial from "../Testimonials/Testimonial";
import UpcomingCategory from "./UpcomingCategory/UpcomingCategory";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MostVoted></MostVoted>
            <UpcomingCategory/>
            <Testimonial></Testimonial>
            <Section></Section>
        
        </div>
    );
};

export default Home;