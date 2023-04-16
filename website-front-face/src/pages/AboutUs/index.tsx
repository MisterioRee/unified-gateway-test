import React from 'react';
import {
  AboutUsImage,
  CompanyValueKeyPoints,
  CompanyValues,
  CompanyValuesDescription,
  CompanyValuesHeading,
  CompanyValuesImage,
  CompanyValuesList,
  CompanyValuesListItem,
  ValuesDescription,
  ValuesHeading,
} from './AboutUs.styles';
import about_us_image from 'assets/images/about_us_image.jpg';
import company_values_image from 'assets/images/company_values_image.jpg';

const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsImage image={about_us_image}>About Us</AboutUsImage>
      <CompanyValues>
        <CompanyValuesHeading>Company Values</CompanyValuesHeading>
        <CompanyValuesDescription>
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos.
        </CompanyValuesDescription>
      </CompanyValues>
      <CompanyValueKeyPoints>
        <CompanyValuesImage src={company_values_image} />
        <CompanyValuesList>
          <CompanyValuesListItem>
            <ValuesHeading>Great team work</ValuesHeading>
            <ValuesDescription>
              Quidam officiis similique sea ei, vel tollit indoctum efficiendi
              ei, at nihil tantas platonem eos. Mazim nemore singulis an ius,
              nullam ornatus nam ei.
            </ValuesDescription>
          </CompanyValuesListItem>

          <CompanyValuesListItem>
            <ValuesHeading>Career prospects</ValuesHeading>
            <ValuesDescription>
              Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea in
              dicant eligendi evertitur. Ad falli aliquid menandri his. Usu
              vocent copiosae ut. No nihil munere eum.
            </ValuesDescription>
          </CompanyValuesListItem>

          <CompanyValuesListItem>
            <ValuesHeading>Beautiful workspace</ValuesHeading>
            <ValuesDescription>
              Te aliquam noluisse his. Et vel epicuri detracto indoctum, et
              fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio
              erroribus eam, ei mea modus volumus abhorreant.
            </ValuesDescription>
          </CompanyValuesListItem>
        </CompanyValuesList>
      </CompanyValueKeyPoints>
    </>
  );
};

export default AboutUs;
