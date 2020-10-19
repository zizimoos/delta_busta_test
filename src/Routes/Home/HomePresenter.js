import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import BarChart from "../../Components/BarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";

import { authService } from "../../fbase";
import { dbService } from "../../fbase";
import { dockId } from "../../Routes/Auth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  position: absolute;
  width: 30%;
  top: 15px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 40px;
  padding-left: 30px;
  font-size: 16px;
  border-radius: 3px;
  background-color: white;
  /* background-color: #4a5d70; */
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 7px;
  right: -25px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 80px;
  font-size: 16;
  color: whitesmoke;
`;

const AuthForm = styled.form`
  position: absolute;
  top: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SInput = styled.input`
  all: unset;
  width: 130px;
  height: 16px;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  background-color: #4a5d70;
  ::placeholder {
    /* background-color: rgba(255, 255, 255, 0.2); */
    /* color: rgba(255, 255, 255, 0.2); */
    padding-left: 8px;
  }
  /* border: 2px solid red; */
  border-radius: 2px;
  margin-right: 5px;
  margin-left: 5px;
  /* margin-bottom: 5px; */
`;
// const SSubmit = styled.input`
//   all: unset;
//   width: 50px;
//   height: 16px;
//   padding: 5px;
//   font-size: 14px;
//   text-align: center;
//   color: "#4a5d70";
//   background-color: #c05c67;
//   border-radius: 2px;
//   cursor: pointer;
// `;

const HomePresenter = ({
  chance,
  percent,
  sum,
  overfifteen,
  loading,
  error,
  handleSubmit,
  searchTerm,
  updateTerm,
  onSubmit,
  onChangeServer,
  onChangeClient,
  serverSeed,
  clientSeed,
  findDBForSameTerm,
  // playSoundEffect,
}) => {
  const listner = async (event) => {
    event.preventDefault();
    event.returnValue = "";
    await dbService.collection("loggedID").doc(`${dockId}`).delete();
    authService.signOut();
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listner);

  const useBeforeLeave = (onBefore) => {
    const [state, setState] = useState("");
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        const word = onBefore();
        setState(word);
        enablePrevent();
      }
    };
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    });

    if (!onBefore || typeof onBefore !== "function") {
      return;
    }
    return state;
  };

  const begForLife = () => {
    return "plz don't leave Stay more";
  };
  const word = useBeforeLeave(begForLife);
  console.log(word);

  return (
    <Container>
      <>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Copy and paste the Numbers of step"
            value={searchTerm}
            onChange={updateTerm}
          ></Input>
          <SearchIcon onClick={handleSubmit}>
            <FontAwesomeIcon
              icon={faSearchDollar}
              size="2x"
              color="rgb(35, 49, 64)"
            />
          </SearchIcon>
        </Form>
        <AuthForm onSubmit={onSubmit}>
          <span
            style={{
              color: "#4a5d70",
            }}
          >
            {" "}
            ClientSeed :{" "}
          </span>
          <SInput
            name="clientSeed"
            type="text"
            placeholder="Client Seed "
            required
            value={clientSeed}
            onChange={onChangeClient}
          ></SInput>
          <span
            style={{
              color: "#4a5d70",
            }}
          >
            {" "}
            Server seed :{" "}
          </span>
          <SInput
            name="serverSeed"
            type="text"
            placeholder="Server Seed"
            required
            value={serverSeed}
            onChange={onChangeServer}
          ></SInput>
          {/* <SSubmit type="submit" value="Save"></SSubmit> */}
        </AuthForm>
      </>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <ErrorMessage
            style={{
              fontSize: 16,
              color: "whitesmoke",
              marginTop: "30px",
              marginBottom: "40px",
            }}
          >
            {error ? `${error}` : null}
          </ErrorMessage>
          <BarChart
            chance={chance}
            sum={sum}
            overfifteen={overfifteen}
            findDBForSameTerm={findDBForSameTerm}
            loading={loading}
          ></BarChart>
          ;
        </>
      )}
    </Container>
  );
};

export default HomePresenter;
