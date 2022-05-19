import React from "react";
import styled from "styled-components";
import EditProfile from "../../components/Forms/EditProfile";
import ProfileInfo from "../../components/ProfileInfo";
import Title from "../../components/Title";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 50px;
  justify-content: center;
`;

const Profile = () => {
  return (
    <>
      <Title text="My profile" />
      <Section>
        <EditProfile />
        <ProfileInfo />
      </Section>
    </>
  );
};

export default Profile;
