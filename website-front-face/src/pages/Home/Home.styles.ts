import { WHITE, GREEN, GREY } from 'constants/index';
import { Carousel } from 'react-responsive-carousel';
import styled, { css } from 'styled-components';

type CarouselContainerType = {
  image: string;
};

const horizontalSpacing = css`
  padding-left: 10%;
  padding-right: 10%;
`;
const verticalSpacing = css`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const verticalSpacing2 = css`
  margin-top: 140px;
  margin-bottom: 140px;
`;

const horizontalSpacing2 = css`
  padding-left: 5%;
  padding-right: 5%;
`;

export const HomePage = styled.div``;

export const CarouselContainer = styled.div<CarouselContainerType>`
  width: 100%;
  color: white;
  height: calc(100vh - 9vh);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('${({ image }) => image}');
`;

const selectedStyles = css`
  border: 4px solid ${GREEN};
  background-color: ${WHITE};
`;

const notSelectedStyles = css`
  background-color: ${GREY};
  width: 10px;
  height: 10px;
`;

export const Indicator = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
  ${({ isSelected }) => (isSelected ? selectedStyles : notSelectedStyles)}
`;

export const CustomCarousel = styled(Carousel)`
  .control-dots {
    display: flex;
    gap: 18px;
    justify-content: start;
    align-items: center;
    margin-left: 10%;
    margin-bottom: 4%;
  }
`;

export const RequestService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 42%;
  gap: 40px;
  text-align: left;
  margin-left: 10%;
  padding-top: 10%;
`;

export const WelcomeHeading = styled.div`
  color: ${WHITE};
  font-size: clamp(2rem, 4vw, 5rem);

  font-weight: 500;
`;

export const DescriptionHeading = styled.div`
  color: ${WHITE};
  font-weight: 400;
  font-size: clamp(0.8rem, 2vw, 1.5rem);
  width: 80%;
`;

export const OurServices = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;
      text-align: center;
      width: 100%;
      padding: 0;
    }
  }
  align-items: center;
  padding-left: 12%;
  padding-right: 12%;
  ${verticalSpacing}
`;

export const OurServicesHeading = styled.h1`
  font-size: clamp(3rem, 3.5vw, 4rem);
  width: 40%;
`;
export const ServicesDescription = styled.p`
  color: ${GREY};
  font-size: clamp(0.6rem, 2.8vw, 1.2rem);
  width: 42%;
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;
      align-content: center;
      align-items: center;
      gap: 50px;
      text-align: center;
      width: 100%;
    }
  }
  gap: 50px;

  ${horizontalSpacing}
`;

export const CollageInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(23, 50px);
  width: 100%;
  height: 100%;
  @media screen and (max-width: 500px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
  }
  ${verticalSpacing2}
  ${horizontalSpacing}
`;

export const KnowledgeBase = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  ${horizontalSpacing2}
`;

export const KnowledgeBaseHeading = styled.h1`
  font-size: clamp(2rem, 4vw, 5rem);
`;

export const KnowledgeBaseDescription = styled.p`
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  color: ${GREY};
`;

export const KnowledgeBaseImage = styled.img`
  grid-column: 2/6;
  grid-row: 1/3;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendlySupport = styled.div`
  grid-column: 2/3;
  grid-row: 15;
  @media screen and (max-width: 700px) {
    & {
      grid-row: 7 !important;
    }
  }

  @media screen and (max-width: 1000px) {
    & {
      grid-row: 9;
    }
  }

  @media screen and (max-width: 1200px) {
    & {
      grid-row: 10;
    }
  }

  @media screen and (max-width: 1500px) {
    & {
      grid-row: 11;
    }
  }

  ${horizontalSpacing2}
`;

export const FriendlySupportHeading = styled.h1`
  font-size: clamp(2rem, 4vw, 5rem);
`;

export const FriendlySupportDescription = styled.p`
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  color: ${GREY};
`;

export const FriendlySupportImage = styled.img`
  grid-row: 9;
  grid-column: 1;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${horizontalSpacing}
  @media screen and (max-width: 700px) {
    & {
      flex-direction: column;
    }
  }
`;
