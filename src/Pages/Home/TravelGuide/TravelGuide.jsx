import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurPackages from "./OurPackages";
import MeetGuides from "./MeetGuides";

const TravelGuide = () => {
  return (
    <>
      <section className="my-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl">Tourism and Travel Guide</h2>
          <div className="">
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Our Packages</Tab>
                <Tab>Meet Our Tour Guides</Tab>
              </TabList>

              <TabPanel>
                <div>
                  <iframe
                    className="w-full h-[28rem]"
                    src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=SvlsZoUdQY93C6XL"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </TabPanel>
              <TabPanel>
                <OurPackages />
              </TabPanel>
              <TabPanel>
                <MeetGuides />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelGuide;
