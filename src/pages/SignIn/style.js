import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 4.8rem;
    font-weight: 700;
  }

  > h2 {
    margin-top: 6.6rem;
    margin-bottom: 4.8rem;
    font-size: 2.4rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
  }

  > a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(0.3);
  fill: rgba(35, 33, 41, 0.8);
`;
