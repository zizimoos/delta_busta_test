import React, { useState } from "react";
import styled from "styled-components";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import logo from "../assets/img/busta_logo.png";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const ModalBox = styled.div`
  width: 500px;
  background-image: url(logo);
  background-size: cover;
`;

const ModalApp = () => {
  const [state, setState] = useState({ open: true });

  //   const onOpenModal = () => {
  //     setState({ open: true });
  //   };

  const onCloseModal = () => {
    setState({ open: false });
  };

  const { open } = state;

  return (
    <div style={styles}>
      {/* <h2>react-responsive-modal</h2>
      <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal}>
        <h2 style={{ padding: "20px", textAlign: "center" }}> 알려 드립니다</h2>
        <ModalBox>
          <p style={{ padding: "20px" }}>
            10월 30일 업데이트로 인하여 오전 6시 부터 오전 10시까지 접속이
            제한됩니다. 많은 양해 부탁드립니다.
          </p>
          <p style={{ padding: "20px" }}></p>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default ModalApp;
