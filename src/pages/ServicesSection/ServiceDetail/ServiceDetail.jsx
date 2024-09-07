import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../ServicesTwo/ServicesList";
import ServicePageBanner from "./ServicePageBanner";
import ServicePagePoints from "./ServicePagePoints";
import HomeClient from "../../HomeSection/SectionThree/HomeClient";
import CTA from "../../../components/common/CTA/CTA";
import ServiceFAQ from "./ServiceFAQ";
import ServicePortfolio from "./ServicePortfolio";
import ServiceProcess from "./ServiceProcess";
import { Helmet } from "react-helmet";

const formatServiceName = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const formattedServiceName = formatServiceName(serviceName);

  const service = servicesData.find(
    (service) => formatServiceName(service.serviceName) === formattedServiceName
  );

  const servicePageBanner = service.detailPage.detailPageBanner;

  const servicePagePoints = service.detailPage.detailPageServicePoints;

  const servicePageCTA = service.detailPage.detailPageCTA;
  const servicePageFAQ = service.detailPage.detailPageServiceFaq;
  const servicePagePortfolio = service.detailPage.detailPageServicePortfolio;
  const servicePageProcess = service.detailPage.detailPageServiceProcess;
  const servicePageMeta = service.servicesMeta;

  if (!service) {
    return <div>Service not found</div>;
  }
  console.log(servicePageMeta);
  return (
    <div className='services-wrapper resp-extra-pdg container pt-40'>
      <Helmet>
        <title>{servicePageMeta.title}</title>
        <meta name='description' content={servicePageMeta.description} />
        <meta name='keywords' content={servicePageMeta.keywords} />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={servicePageMeta.title} />
        <meta property='og:description' content={servicePageMeta.description} />
        <meta property='og:image' content={servicePageMeta.ogImage} />
        <meta property='og:url' content={servicePageMeta.ogUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={servicePageMeta.title} />
        <meta
          name='twitter:description'
          content={servicePageMeta.description}
        />
      </Helmet>

      {servicePageBanner && (
        <ServicePageBanner
          heading={servicePageBanner.heading}
          content={servicePageBanner.content}
        />
      )}
      {servicePagePoints && (
        <ServicePagePoints
          headin1={servicePagePoints.heading1}
          heading2={servicePagePoints.heading2}
          content={servicePagePoints.content}
          servicePoints={servicePagePoints.servicePoints}
        />
      )}

      {servicePagePortfolio && (
        <ServicePortfolio
          heading={servicePagePortfolio.heading}
          content={servicePagePortfolio.content}
          portfolioDetail={servicePagePortfolio.portfolioDetail}
        />
      )}

      {servicePageProcess && (
        <ServiceProcess
          heading={servicePageProcess.heading}
          content={servicePageProcess.content}
          processPoints={servicePageProcess.processPoints}
        />
      )}

      <div className='mt-0 mb-36'>
        <HomeClient />
      </div>

      {servicePageFAQ && (
        <ServiceFAQ
          content={servicePageFAQ.content}
          FAQ={servicePageFAQ.FaqPoints}
        />
      )}
      {servicePageCTA && (
        <div className='mt-20 mb-20'>
          <CTA
            firstTitle={servicePageCTA.heading1}
            secondTitle={servicePageCTA.heading2}
            detailText={servicePageCTA.content}
            btnInitialText={servicePageCTA.initialBtnText}
            btnFlippedText={servicePageCTA.flippedBtnText}
            btnWidth={"180px"}
          />
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
