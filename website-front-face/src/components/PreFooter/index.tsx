import React from 'react';
import {
  ContactContainer,
  ContactDescription,
  ContactHeading,
  ProjectDescription,
  ProjectHeading,
  ProjectInfo,
  ProjectsImages,
} from './PreFooter.styles';

import plane_image_1 from 'assets/images/plane_image_1.jpg';
import plane_image_2 from 'assets/images/plane_image_2.jpg';
import plane_image_3 from 'assets/images/plane_image_3.jpg';
import plane_image_4 from 'assets/images/plane_image_4.jpg';
import Button from 'components/common/Button/Button';

const PreFooter: React.FC = () => {
  return (
    <>
      <ProjectsImages>
        <ProjectInfo image={plane_image_1}>
          <ProjectHeading>Museum Of Future</ProjectHeading>
          <ProjectDescription>
            Diam facilisi insolens per cu, eos malorum voluptaria concludaturque
            usu
          </ProjectDescription>
        </ProjectInfo>

        <ProjectInfo image={plane_image_1}>
          <ProjectHeading>Architecture & Colors</ProjectHeading>
          <ProjectDescription>
            Quo ex ocurreret quaerendum. Mel cu ancillae similique ubique
            persecuti
          </ProjectDescription>
        </ProjectInfo>

        <ProjectInfo image={plane_image_3}>
          <ProjectHeading>Weekend Inspiration</ProjectHeading>
          <ProjectDescription>
            Mei no ubique persecuti, at sit iusto aliquam interpretaris.
          </ProjectDescription>
        </ProjectInfo>

        <ProjectInfo image={plane_image_4}>
          <ProjectHeading>Perfect Street Style</ProjectHeading>
          <ProjectDescription>
            Graece postea usu ea. Sea diceret pertinax in. Melius feugiat
            definitiones ex qui.
          </ProjectDescription>
        </ProjectInfo>
      </ProjectsImages>

      <ContactContainer>
        <ContactHeading>Get In Touch</ContactHeading>
        <ContactDescription>
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos.
        </ContactDescription>
        <Button size="large" type="primary" height="48">
          Contact us
        </Button>
      </ContactContainer>
    </>
  );
};

export default PreFooter;
