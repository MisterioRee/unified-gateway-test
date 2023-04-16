import React from 'react';
import {
  RatingStars,
  ReviewCardContainer,
  ReviewDescription,
  ReviewerImage,
  ReviewerName,
} from './ReviewCards.styles';
import Button from 'components/common/Button/Button';
import { FilledStarIcon, OutlinedStarIcon } from 'assets/icons';

export type ReviewCardType = {
  image: any;
  description: string;
  rating: '1' | '2' | '3' | '4' | '5';
  name: string;
  linkName: string;
};

const ReviewCards: React.FC<ReviewCardType> = ({
  image,
  description,
  rating,
  name,
  linkName,
}) => {
  const remStars: number = 5 - parseInt(rating);

  return (
    <ReviewCardContainer>
      <ReviewerImage src={image} />
      <ReviewDescription>
        {'"'}
        {description}
        {'"'}
      </ReviewDescription>
      <RatingStars>
        {Array(parseInt(rating))
          .fill(null)
          .map((item, i) => (
            <FilledStarIcon key={i} />
          ))}
        {Array(remStars)
          .fill(null)
          .map((item, i) => (
            <OutlinedStarIcon key={i} />
          ))}
      </RatingStars>
      <ReviewerName>{name}</ReviewerName>
      <Button type="link" size="small" width="100">
        <b>{linkName}</b>
      </Button>
    </ReviewCardContainer>
  );
};

export default ReviewCards;
