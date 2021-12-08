import styled, { keyframes } from "styled-components";
import {
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "react-animations";

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const AppTitle = styled.h1`
  animation: 3s ${fadeInDownAnimation};
  padding: 1rem;
  font-size: 2rem;
  display: inline-block;
  border: solid 1px transparent;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.925);
`;

export const AppSubtitle = styled.h2`
  animation: 3s ${fadeInUpAnimation};
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.925);
`;

export const AppDesc = styled.h2`
  animation: 3s ${fadeInUpAnimation};
  margin-top: 0;
  color: rgb(212, 170, 85);
`;

export const AboutMeArticle = styled.article`
  animation: 2s ${fadeInLeftAnimation};
`;

export const ProfilePhoto = styled.img`
  animation: 2s ${fadeInRightAnimation};
`;
