import { useContext, useEffect } from "react";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text, { TextSize } from "../../components/base/Text/Text";
import TabsContent from "../../components/TabsGallery/TabsContent/TabsContent";
import TabsGallery from "../../components/TabsGallery/TabsGallery";
import GlobalContext from "../../contexts/GlobalContext";
import Heading, { HeadingSizes } from "../../components/base/Heading/Heading";
import ContactForm from "../../components/ContactForm/ContactForm";
import VerticalSpacing, {
  SpacingSizes,
} from "../../components/base/Spacing/VerticalSpacing";

import HorizontalSlider from "../../components/HorizontalSlider/HorizontalSlider";
import Card from "../../components/HorizontalSlider/components/Card/Card";
import TabsContext from "../../components/TabsGallery/contexts/TabsContext";
import ApplicationsLayout from "../../components/ApplicationsLayout/ApplicationsLayout";
import { ApplicationAreas } from "../../constants/globalConstants";
import Footer from "../../components/Footer/Footer";
import useSWR from "swr";
import { wData } from "../../data";

import content from "../api/EvopackContent.json";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Applications = (props: any) => {
  // const evopackContent: any = require("../../EvopackContent.json");

  // const { data, error } = useSWR("/api/staticdata", fetcher);

  const contentData: any = content;

  const { language } = useContext(GlobalContext);

  const { filter } = useContext(TabsContext);

  const applicationsContent = props[language].applications;

  const tabLabels: string[] = Array.from(
    applicationsContent,
    (application: any) => application.heading
  );

  const applicationHeadings: string[] = applicationsContent.map(
    (application: any) => {
      return application;
    }
  );

  const convertArrayToObject = (array: any, key: string) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

  const heroImages = applicationsContent.reduce(
    (obj: any, item: any) =>
      Object.assign(obj, { [item.heading]: item.heroImage }),
    {}
  );

  const applicationComponents = [
    {
      label: tabLabels[0],
      component: (
        <ApplicationsLayout
          data={applicationsContent[0]}
          id={tabLabels[0]}
          key={tabLabels[0]}
        />
      ),
    },
    {
      label: tabLabels[1],
      component: (
        <ApplicationsLayout
          data={applicationsContent[1]}
          id={tabLabels[1]}
          key={tabLabels[1]}
        />
      ),
    },
    {
      label: tabLabels[2],
      component: (
        <ApplicationsLayout
          data={applicationsContent[2]}
          id={tabLabels[2]}
          key={tabLabels[2]}
        />
      ),
    },
    {
      label: tabLabels[3],
      component: (
        <ApplicationsLayout
          data={applicationsContent[3]}
          id={tabLabels[3]}
          key={tabLabels[3]}
        />
      ),
    },
  ];

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  //Handle the error state
  // if (error) return <div>Failed to load</div>;
  //Handle the loading state
  // if (!data) return <div>Loading...</div>;

  return (
    // <GlobalContext.Provider value={language}>
    <PageContainer>
      <Header />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {/* <VerticalSpacing size={SpacingSizes.xxxxl96px} /> */}
      <TabsGallery
        data={tabLabels}
        backgroundImages={heroImages}
        showBackgroundImage
        tabs={applicationComponents}
      >
        {/* {applicationsContent.map((application: any) => {
          return (
            <TabsContent label={tabLabels[0]}>
              <ApplicationsLayout
                data={applicationsContent[0]}
                id={tabLabels[0]}
              />
            </TabsContent>
          );
        })} */}
        <TabsContent label={tabLabels[0]}>
          <ApplicationsLayout
            data={applicationsContent[0]}
            id={tabLabels[0]}
            key={tabLabels[0]}
          />
        </TabsContent>
        <TabsContent label={tabLabels[1]}>
          <ApplicationsLayout
            data={applicationsContent[1]}
            id={tabLabels[1]}
            key={tabLabels[1]}
          />
        </TabsContent>
        <TabsContent label={tabLabels[2]}>
          <ApplicationsLayout
            data={applicationsContent[2]}
            id={tabLabels[2]}
            key={tabLabels[2]}
          />
        </TabsContent>
        <TabsContent label={tabLabels[3]}>
          <ApplicationsLayout
            data={applicationsContent[3]}
            id={tabLabels[3]}
            key={tabLabels[3]}
          />
        </TabsContent>
        {/* <div className="row center-xs">
          {allApplicationsContent.overview &&
            allApplicationsContent.overview.map((overview: any) => {
              return (
                <Box
                  background={BoxBackground.white}
                  borderRadius={BorderRadii.medium24px}
                >
                  <div className="row">
                    <div className="col-xs-1">
                      <Icon
                        size="xl"
                        icon={Icons.leaf}
                        colour={IconColours.sustainGreen}
                      />
                    </div>
                    <div className="col-xs-10">
                      <Heading
                        text={overview.heading}
                        level="h5"
                        size={HeadingSizes.sm}
                      />
                      <VerticalSpacing size={SpacingSizes.xs16px} />
                      <Text size={TextSize.md}>{overview.copy}</Text>
                    </div>
                  </div>
                </Box>
              );
            })}
        </div> */}
      </TabsGallery>
      <ContactForm data={applicationsContent.contactSection} ref={undefined} />
      <Footer />
    </PageContainer>
    // </GlobalContext.Provider>
  );
};

export const getStaticProps = async () => {
  return {
    props: wData,
  };
};

export default Applications;
