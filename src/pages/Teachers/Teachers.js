import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import styled from "styled-components";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import Title from "../../components/Title";

const List = styled.ul`
  margin-top: 40px;
`;

const StyledCard = styled(Card)`
  width: 650px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 30px;
`;

const Image = styled(CardImg)`
  width: 200px;
  height: 150px;
  object-fit: cover;
  filter: grayscale(30%);
`;

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://reqres.in/api/users?page=1";

  const fetchData = () => {
    axios.get(url).then((response) => {
      setTeachers(response.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const teachersList = teachers.map((teacher) => {
    const { id, first_name, last_name, email, avatar } = teacher;
    return (
      <StyledCard key={id}>
        <Image src={avatar} alt={first_name} />
        <CardBody>
          <CardTitle>{`${first_name}  ${last_name}`}</CardTitle>
          <CardSubtitle>{email}</CardSubtitle>
        </CardBody>
      </StyledCard>
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Title text="Our teachers" />
      <List>{teachersList}</List>
    </>
  );
};

export default Teachers;
