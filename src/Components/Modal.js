import React, { useState } from "react";
import styled from "styled-components";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { withRouter } from "react-router-dom";

// import logo from "../assets/img/busta_logo.png";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const ModalBox = styled.div`
  width: 500px;
  position: relative;
`;
const ModaTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
`;
// const LogoBack = styled.div`
//   width: 300px;
//   height: 300px;
//   position: absolute;
//   top: 0;
//   color: gray;

//   background-image: url(${(props) => props.img});
//   background-size: contain;
//   background-repeat: no-repeat;
//   filter: invert(8%);
//   z-index: 0;
// `;
const ManualButton = styled.div`
  padding: 3px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100px;
  text-align: center;
  background-color: dodgerblue;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 20px;
  color: whitesmoke;
  z-index: 10;
`;

const ModalApp = ({ history }) => {
  const [state, setState] = useState({ open: true });

  //   const onOpenModal = () => {
  //     setState({ open: true });
  //   };

  const onCloseModal = () => {
    setState({ open: false });
  };
  const goManul = () => {
    history.push("/product");
    setState({ open: false });
  };
  const { open } = state;

  return (
    <div style={styles}>
      {/* <h2>react-responsive-modal</h2>
      <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal}>
        <ModaTitle> 공지 드립니다</ModaTitle>
        <ModalBox>
          <p style={{ padding: "20px", lineHeight: "23px" }}>
            10월 30일 업데이트로 인하여 오전 6시 부터 오전 10시까지 접속이
            제한됩니다. 많은 양해 부탁드립니다.
          </p>
          <p style={{ padding: "20px" }}>
            사용 설명은 아래 버튼을 클릭하셔서 확인 하시면 됩니다.
          </p>
          {/* <LogoBack img={logo}></LogoBack> */}
          <ManualButton onClick={goManul}>사용 설명서</ManualButton>
          <p style={{ padding: "20px" }}></p>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default withRouter(ModalApp);
