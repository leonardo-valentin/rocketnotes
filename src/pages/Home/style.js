import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  gap: 2.4rem;
  padding-top: 6.4rem;
`;

export const Search = styled.div`
  grid-area: search;

  padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
  background: violet;
  grid-area: content;
`;

export const Newnote = styled.button`
  grid-area: newnote;

  background: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 0.8rem;
  }
`;
