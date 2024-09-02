import { styled } from "styled-components"

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 212px;
  display: flex;
  gap: 2rem;

  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem;
  transform: translateY(-50%);
`

export const ImageProfile = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`
export const DetailsProfile = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const ProfileBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme["base-title"]};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      gap: 0.5rem;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`

export const ProfileSummary = styled.div`
  display: flex;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`
