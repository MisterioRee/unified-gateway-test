import React, { ReactNode } from 'react';
import {
  CarouselContainer,
  CollageInfo,
  CustomCarousel,
  DescriptionHeading,
  FriendlySupport,
  FriendlySupportDescription,
  FriendlySupportHeading,
  FriendlySupportImage,
  HomePage,
  Indicator,
  KnowledgeBase,
  KnowledgeBaseDescription,
  KnowledgeBaseHeading,
  KnowledgeBaseImage,
  OurServices,
  OurServicesHeading,
  RequestService,
  ReviewsContainer,
  ServicesContainer,
  ServicesDescription,
  WelcomeHeading,
} from './Home.styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carosel_image_1 from 'assets/images/Carosel_image_1.jpg';
import carosel_image_2 from 'assets/images/Carosel_image_2.jpg';
import carosel_image_3 from 'assets/images/Carosel_image_3.jpg';

import service_image_1 from 'assets/images/Service_image_1.jpg';
import service_image_2 from 'assets/images/Service_image_2.jpg';

import review_image_1 from 'assets/images/reviewer_1.jpg';
import review_image_2 from 'assets/images/reviewer_2.jpg';
import review_image_3 from 'assets/images/reviewer_3.jpg';

import Button from 'components/common/Button/Button';
import ServiceCards, { ServiceCardType } from 'components/ServiceCards';
import { AnchorIcon, FilesIcon, SpeedMeterIcon } from 'assets/icons';
import { Col } from 'antd';
import ReviewCards, { ReviewCardType } from 'components/ReviewCards';
import Footer from 'components/common/footer';
import PreFooter from 'components/PreFooter';

type CarouselType = {
  image: string;
  content?: ReactNode;
};

const carouselImages: CarouselType[] = [
  {
    image: carosel_image_1,
    content: (
      <RequestService>
        <WelcomeHeading>Welcome to Our Construction Services</WelcomeHeading>
        <DescriptionHeading>
          An attention-grabbing headline that introduces the construction
          service and its benefits to users.
        </DescriptionHeading>
        <Button width="25" height="60" type="primary" size="large">
          Request a Service
        </Button>
      </RequestService>
    ),
  },
  {
    image: carosel_image_2,
  },
  {
    image: carosel_image_3,
  },
];

const servicesCards: ServiceCardType[] = [
  {
    title: 'Bandwidth',
    icon: <AnchorIcon />,
    description:
      'Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. ',
  },
  {
    title: 'Certificate',
    icon: <FilesIcon />,
    description:
      'Nam natum volutpat eu. Natum elitr vel te. Id qui purto dicit, bonorum minimum et sit.',
  },
  {
    title: 'Money Back',
    icon: <SpeedMeterIcon />,
    description:
      'Lorem deterruisset ea vis, usu eu hinc lorem inciderint, et mel solum autem molestiae.',
  },
];

const reviewsCards: ReviewCardType[] = [
  {
    name: 'Amelia Edwards',
    description:
      'Et vim graeco principes. Cu dico nullam pri stet possim quaerendum invenire platonem animal assentior nam.',
    rating: '4',
    image: review_image_1,
    linkName: 'Google Inc',
  },
  {
    name: 'Darika Samak',
    image: review_image_2,
    rating: '4',
    description:
      'Nam natum volutpat eu. Natum elitr vel te. Id qui purto dicit, bonorum minimum et sit assum tation homero.',
    linkName: 'Apple',
  },
  {
    name: 'Siri Jakobsson',
    image: review_image_3,
    description:
      'Lorem deterruisset ea vis, usu eu hinc lorem inciderint autem molestiae mazim iudico tritani feugait electram an.',
    linkName: 'Microsoft',
    rating: '4',
  },
];

const Home: React.FC = () => {
  return (
    <HomePage>
      <CustomCarousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        interval={2000}
        renderIndicator={(clickHandler, isSelected) => (
          <Indicator onClick={clickHandler} isSelected={isSelected} />
        )}
      >
        {carouselImages.map((item, i) => (
          <CarouselContainer key={i} image={item.image}>
            {item.content}
          </CarouselContainer>
        ))}
      </CustomCarousel>
      <OurServices>
        <OurServicesHeading>Our Services</OurServicesHeading>
        <ServicesDescription>
          An mel corpora consectetuer. Duo veri eripuit honestatis ei. Mandamus
          expetenda has ex. Eu minim movet quodsi eum. Et vim dolore epicurei,
          ut aeque postea nam, at posse dicta.
        </ServicesDescription>
      </OurServices>
      <ServicesContainer>
        {servicesCards.map((item, i) => (
          <ServiceCards
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </ServicesContainer>
      <CollageInfo>
        <KnowledgeBase>
          <KnowledgeBaseHeading>Extensive Knowledge Base</KnowledgeBaseHeading>
          <KnowledgeBaseDescription>
            Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
            at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
            ornatus nam ei.
          </KnowledgeBaseDescription>
        </KnowledgeBase>
        <KnowledgeBaseImage src={service_image_1} />
        <FriendlySupportImage src={service_image_2} />
        <FriendlySupport>
          <FriendlySupportHeading>
            Fast & Friendly Support
          </FriendlySupportHeading>
          <FriendlySupportDescription>
            Et vim graeco principes. Cu dico nullam pri. Duo stet possim
            quaerendum eu, cum in invenire platonem. An animal assentior nam,
            sed qualisque.
          </FriendlySupportDescription>
        </FriendlySupport>
      </CollageInfo>
      <ReviewsContainer>
        {reviewsCards.map((item, i) => (
          <ReviewCards
            key={i}
            name={item.name}
            linkName={item.linkName}
            description={item.description}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </ReviewsContainer>
      <PreFooter />
      <Footer />
    </HomePage>
  );
};

export default Home;
