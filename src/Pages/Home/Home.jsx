import Banner from "./Banner/Banner";
import Stories from "./Stories/Stories";
import TourType from "./TourType/TourType";
import TravelGuide from "./TravelGuide/TravelGuide";


const Home = () => {
    return (
        <>
            <Banner />
            <TravelGuide />
            <TourType />
            <Stories />
        </>
    );
};

export default Home;