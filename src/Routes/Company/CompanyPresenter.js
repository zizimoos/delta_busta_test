import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(45, 63, 81);
`;

const Article = styled.div`
  color: whitesmoke;
`;

const CompanyPresenter = () => {
  return (
    <Container>
      <Article>부스타 다이스 추론기 설명서</Article>
      <Article>
        2x배당 이상이 몇 번째 나오는가를 확률로 예측하는 방식입니다. Finder
        스크립트로 자동으로 돌려 패턴을 찾아서 그 결과값을 부스타 추론기를
        이용하여 확률을 알아본 후 실전배팅을 하시면 됩니다.
      </Article>
    </Container>
  );
};

export default CompanyPresenter;
