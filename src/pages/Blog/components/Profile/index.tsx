import {
  DetailsProfile,
  ImageProfile,
  ProfileBio,
  ProfileContainer,
  ProfileSummary,
} from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

interface ProfileProps {
  followers: string
}

export const Profile = ({ followers }: ProfileProps) => {
  return (
    <ProfileContainer>
      <ImageProfile>
        <img
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          alt=""
        />
      </ImageProfile>
      <DetailsProfile>
        <ProfileBio>
          <div>
            <h2>João Victor Cunha </h2>
            <a href="">
              GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>

          <p>
            Estudante de Ciência da Computação na Universidade Vila Velha,
            apaixonado por JavaScript no front e back-end, com NodeJS.
            Atualmente estagiando na área de inovação do Banestes.
          </p>
        </ProfileBio>

        <ProfileSummary>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            J0aoCunha
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Banestes
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers}
          </span>
        </ProfileSummary>
      </DetailsProfile>
    </ProfileContainer>
  )
}
