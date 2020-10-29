import React from "react";
import styled from "styled-components";

import manual from "../../assets/img/manual.png";
import script from "../../assets/img/script.png";
import onScript from "../../assets/img/onScript.png";
import start from "../../assets/img/start.png";
import run from "../../assets/img/run.png";
import search from "../../assets/img/search.png";
import realBet from "../../assets/img/realBet.png";
import result from "../../assets/img/result.png";
import finder from "../../assets/file/finder6copy.txt";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(45, 63, 81);
`;
const MainTitle = styled.div`
  font-size: 30px;
  color: whitesmoke;
  margin: 40px;
`;

const Description = styled.div`
  width: 800px;
  line-height: 25px;
  padding: 10px;
  font-size: 16px;
  color: whitesmoke;
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  margin: 40px;
`;
const Title = styled.div`
  font-size: 14px;
  color: whitesmoke;
  margin-bottom: 5px;
`;
const ArticleImage = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Button = styled.div`
  width: 200px;
  height: 30px;
  font-size: 16px;
  color: whitesmoke;
  background-color: indianred;
  border-radius: 4px;
  text-align: center;
  padding-top: 7px;
  margin-bottom: 10px;
`;

const CompanyPresenter = () => {
  return (
    <Container>
      <MainTitle>부스타 다이스 추론기 설명서</MainTitle>
      <a href={finder} target="_blank" rel="noopener noreferrer" download>
        <Button>
          {/* <i className="fas fa-download" /> */}
          Finder download
          <FontAwesomeIcon
            icon={faCloudDownloadAlt}
            size="1x"
            color="white"
            style={{ marginLeft: "10px" }}
          />
        </Button>
      </a>
      <Description>
        2x배당 이상이 몇 번째 나오는가를 확률로 예측하는 방식입니다. Finder
        스크립트로 자동으로 돌려 패턴을 찾아서 그 결과값을 부스타 추론기를
        이용하여 확률을 알아본 후 실전배팅을 하시면 됩니다.
      </Description>
      <Article>
        <Title> ● 메뉴얼(Manual) 배팅화면</Title>
        <ArticleImage
          img={manual}
          style={{ width: "800px", height: "280px" }}
        ></ArticleImage>
      </Article>
      <Article>
        <Title> ● 스크립트(Script) 배팅화면</Title>
        <ArticleImage
          img={script}
          style={{ width: "800px", height: "280px" }}
        ></ArticleImage>
      </Article>
      <Article>
        <Title>
          {" "}
          ● Finder 스크립트를 2번화면 빈공간에 복사하여 붙여넣은 화면
        </Title>
        <ArticleImage
          img={onScript}
          style={{ width: "800px", height: "280px" }}
        ></ArticleImage>
      </Article>
      <Article>
        <Title> ● 위 화면에서 Start 누르면 나오는 화면</Title>
        <ArticleImage
          img={start}
          style={{ width: "800px", height: "280px" }}
        ></ArticleImage>
      </Article>
      <Article>
        <Title>
          ● 위 화면에서 Run을 누르시고 조건에 맞는 숫자가 검색되기를 기다리면
          아래와 같은 화면이 나옵니다.
        </Title>
        <ArticleImage
          img={run}
          style={{ width: "800px", height: "300px" }}
        ></ArticleImage>
      </Article>
      <Article>
        <Title>
          ● 위 화면에서 보듯이 2,2,1,2,6 이라는 패턴을 아래 검색기에 돌립니다.
        </Title>
        <ArticleImage
          img={search}
          style={{ width: "800px", height: "600px" }}
        ></ArticleImage>
      </Article>

      <Description>
        2,2,1,2,6 이라는 패턴의 결과값으로 2일 확률이 18프로로 가장 높은
        확률임을 알려 줍니다. 이에 2라는 뜻은 2번연속 2배수미만이 나오고 3번째
        2배수 이상이 나왔다는 뜻이므로 3번만 마틴을 가고 손절하겠다고 배팅계획을
        세운후 아래 그림처럼 실전 배팅을 합니다.
      </Description>

      <Description>
        연속 패턴에서 숫자의 의미는 2배수미만의 연속갯수 즉 숫자+1 번째에 2배수
        이상이 나왔음을 의미합니다.
      </Description>
      <Article>
        <Title>
          ● 실전 배팅을 위하여 스크립트(Script)에서 매뉴얼(Manual)을 클릭합니다.
          아래 그림은 Finder로 2,2,1,2,6의 패턴을 찾은 후 멈춘 상태입니다.
        </Title>
        <ArticleImage
          img={realBet}
          style={{ width: "800px", height: "600px" }}
        ></ArticleImage>
      </Article>
      <Article>
        <Title>
          ● 실전배팅을 하여 2회차에 2배수 이상이 나와 100비츠를 획득한
          화면입니다.
        </Title>
        <ArticleImage
          img={result}
          style={{ width: "800px", height: "600px" }}
        ></ArticleImage>
      </Article>
    </Container>
  );
};

export default CompanyPresenter;
