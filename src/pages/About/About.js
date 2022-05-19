import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";

const Description = styled.p`
  padding: 50px 150px 0 150px;
`;

const About = () => {
  return (
    <>
      <Title text="About our academy" />
      <Description>
        <strong>The academy was found on 22nd of May, 2021.</strong>
        <br /> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nesciunt nobis voluptatum mollitia dolore perferendis, adipisci neque
        sit reprehenderit cumque voluptates provident aliquam amet officia
        error! Atque repellat quis ducimus itaque quibusdam ipsum adipisci nihil
        recusandae quaerat! Est sit incidunt itaque illum quia eaque iusto
        magnam provident cum doloremque officia reprehenderit, delectus fugit
        beatae dolores consequatur nulla, aspernatur explicabo vitae laborum
        dignissimos nostrum deleniti ad. Maxime harum voluptatibus est
        aspernatur dicta ratione eius quibusdam rem deleniti doloremque modi
        minima natus officiis quod totam laboriosam, commodi possimus porro?
        Ratione cumque soluta architecto minus sint, consectetur adipisci at
        quaerat voluptates nostrum aut perspiciatis.
      </Description>
    </>
  );
};

export default About;
