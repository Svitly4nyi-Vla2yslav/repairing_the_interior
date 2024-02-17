import React from 'react';
import {
  BlankDiv,
  Card,
  CardHeading,
  CardLink,
  CustomLink,
  FirstImage,
  Heading,
  ItemContainer,
  MainContainer,
  Paragraph,
  SecondContainer,
  SecondImage,
  ThirdImage,
} from './WelcomMessage.styled';

const MountainStarZlatibor: React.FC = () => {
  return (
    <>
      <MainContainer>
        <Heading>Mountain Star Zlatibor</Heading>
        <Paragraph>
          Zlatibor is a mountain of exceptional beauty whose special
          geographical properties have made this mountain a real gem of western
          Serbia.
        </Paragraph>
        <CustomLink href="#">Learn more</CustomLink>
      </MainContainer>

      <BlankDiv />

      <SecondContainer>
        <ItemContainer>
          <ThirdImage />
          <Card>
            <CardHeading>Монтаж Гіпсокартону</CardHeading>
            <Paragraph>
              <strong>З чого почати?</strong>
              <br />
              1. Консультація (безкоштовна)
              <br />
              2. Розрахунок (Виїзд на об'єкт)
              <br />
              3. Узгодження (Обговорення переліку робіт)
              <br />
              4. Ремонт (Поетапне виконання робіт)
            </Paragraph>
            <CardLink href="#">Замовити консультацію</CardLink>
          </Card>
        </ItemContainer>

        <ItemContainer>
          <FirstImage />
          <Card>
            <CardHeading>Rock climbing</CardHeading>
            <Paragraph>
              The goal is to reach the summit of a formation or the endpoint of
              a usually pre-defined route without falling
            </Paragraph>
            <CardLink href="#">Learn more</CardLink>
          </Card>
        </ItemContainer>

        <ItemContainer>
          <SecondImage />
          <Card>
            <CardHeading>Caving</CardHeading>
            <Paragraph>
              Exploring underground through networks of tunnels and passageways,
              which can be natural or artificial.
            </Paragraph>
            <CardLink href="#">Learn more</CardLink>
          </Card>
        </ItemContainer>
      </SecondContainer>
    </>
  );
};

export default MountainStarZlatibor;
