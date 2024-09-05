import { styled } from "styled-components"

export const PostContainer = styled.section`
  width: 416px;
  height: 260px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-post"]};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: ${(props) => props.theme["base-title"]};
      font-size: 20px;
      font-weight: 700;
      line-height: 160%;
      overflow-wrap: break-word;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 14px;
      font-weight: 400;
      line-height: 160%;
    }
  }

  p {
    color: ${(props) => props.theme["base-text"]};

    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
