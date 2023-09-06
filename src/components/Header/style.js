import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 10.5rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`;

export const Profile = styled.header`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    object-fit: contain;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
