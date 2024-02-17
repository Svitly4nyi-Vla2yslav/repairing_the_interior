import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const LinkText = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 30px;
`;

export const LinkStyled = styled(NavLink)`
  margin-right: 10px;
  gap: 16px;
  color: white;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 10px 10px;
  transition: all 250ms linear;
  text-decoration: none;
  
  &.active {
    background-color: #31cd31;;
  }

  &:hover,
  &:focus {
    border: 1px solid #31cd31;;
  }
`;