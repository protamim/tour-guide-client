import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurPackages from "./OurPackages";
import MeetGuides from "./MeetGuides";

const TravelGuide = () => {
  return (
    <>
      <section className="mt-7 md:mt-11">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl md:text-3xl mb-5">Tourism and Travel Guide</h2>
          <div>
            <Tabs>
              <TabList className="flex gap-5 flex-wrap mb-5">
                <Tab>Overview</Tab>
                <Tab>Our Packages</Tab>
                <Tab>Meet Our Tour Guides</Tab>
              </TabList>

              <TabPanel>
                <div>
                  <iframe
                    className="w-full md:h-[28rem]"
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
