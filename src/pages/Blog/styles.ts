import { styled } from "styled-components"

export const BlogContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PublicationContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 54rem;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 18px;
      font-weight: 700;
    }
    span {
      color: ${(props) => props.theme["base-span"]};
      text-align: right;
      font-size: 14px;
      font-weight: 400;
    }
  }
`

export const Publication = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 416px));
  width: 100%;
  min-width: 54rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  gap: 2rem;
`
