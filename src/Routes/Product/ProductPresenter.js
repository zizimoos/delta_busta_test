import React from "react";
import styled from "styled-components";

import { authService } from "../../fbase";
import { dbService } from "../../fbase";
import { dockId } from "../../Routes/Auth";

import busta_cheer_01 from "../../assets/img/busta_cheer_01.png";
import busta_cheer_02 from "../../assets/img/busta_cheer_02.png";
import privace from "../../assets/img/privace.png";
import waytoplay from "../../assets/img/waytoplay.png";
import multiSign from "../../assets/img/multiSign800.png";

// import busta_cheer_07 from "../../assets/img/busta_cheer_07.jpg";
import howtoplay from "../../assets/img/howtoplay.png";
import busta_cheer_09 from "../../assets/img/busta_cheer_09.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(45, 63, 81);
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 10px;
  width: 40vw;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;
const Title = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ImgSection = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position-x: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  padding: 20px;
  font-size: 16px;
  color: white;
  line-height: 26px;
  text-align: justify;
`;

const ProductPresenter = () => {
  const listner = async (event) => {
    event.preventDefault();
    event.returnValue = "";
    await dbService.collection("loggedID").doc(`${dockId}`).delete();
    authService.signOut();
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listner);
  enablePrevent();
  return (
    <Container>
      <Section color={"#34495e"}>
        <Title>What is BUSTA? </Title>
        <Description>
          busta는 실전에 있어서 패할 확률을 줄여주는 획기적인 추론 시스템입니다.
        </Description>
        <ImgSection img={busta_cheer_01}></ImgSection>
        <Description>
          busta는 부스타 다이스의 결과값을 추론하는 추론기 입니다. 다년간의
          축적된 데이터를 바탕으로 평균값 추론 확률을 제공합니다. 이를 통해
          부스타 다이스 이용시 좀 더 좋은 확률에 접근하는 방법을 제시합니다. 즉
          실전배팅에 있어서 패할 확율을 줄여주는 획기적인 추론 시스템입니다.
        </Description>
      </Section>

      <Section color={"#34495e"}>
        <Title style={{ fontSize: "20px" }}>
          세계가 열광하고 있는 새로운 쇼셜게임 bustadice! ​{" "}
        </Title>
        <ImgSection img={busta_cheer_02}></ImgSection>
        <Description>
          Bustadice는 1.01배당부터 100만배당까지를 맞추어 그 해당 배당만큼
          수익을 가져가는 게임입니다. 배당은 bustadice 서버에서 랜덤으로 나오는
          난수이기 때문에 예측하기가 굉장히 어렵습니다.
        </Description>
      </Section>
      <Section color={"#34495e"}>
        <Title>향상된 개인 정보</Title>
        <ImgSection img={privace}></ImgSection>
        <Description>
          개인정보보호를 강화하여 플레이어와 투자자에게 업계최고의
          개인정보보호를 제공하기위해 출금시 정교한 알고리즘을 사용하여 다른
          사람이 당신이 겜블을 한 사실을 알수가 없습니다. 또한 거래 비용을 크게
          낮추어 출금 수수료가 가장 낮습니다
        </Description>
      </Section>
      <Section color={"#34495e"}>
        <Title>게임 작동 방식 </Title>
        <ImgSection img={waytoplay}></ImgSection>
        <Description>
          각 배팅의 결과는 1x배에서 1,000,000x배 사이에서 무작위로 나옵니다
          결과가 초과 될것으로 생각되는 목표를 추측하는 것은 당신의 몫입니다
          베팅결과가 예상보다 떨어지면 베팅금액을 잃게 됩니다 그러나 올바르게
          추측하면 베팅금액에 추측한 배수가 곱해집니다.
        </Description>
      </Section>
      <Section color={"#34495e"}>
        <Title>다중 서명 냉장 보관</Title>
        <ImgSection img={multiSign}></ImgSection>
        <Description>
          다중서명 콜드 스토리지로 대부분 사용자의 자금은 부스타다이스 감사자 및
          중립 제3자가 보 유한 키를 사용하여 자금의 2/3는 콜드 스토리지에
          안전하게 보관 됩니다 이지갑은 적어도 두명의 키홀더의 승인이 있어야만
          엑세스 할수 있으며 키홀더중 하나에 문제 가 발생했을 때 사용자 예금이
          안전하게 그들에게 반환될수 있습니다.
        </Description>
      </Section>
      <Section>
        <Title>모두를 보호하는 입증된 공정성 </Title>
        <Description>
          플레이어의 경우 카지노와 분쟁이 발생하면 더 이상 카지노에 대한 당신
          혼자만의 말이 더 이 상 아닙니다 부스타다이스의 감사는 모든이가
          독립적으로 모든 롤를 확인할수 있는 검증툴이 공개되어 있습니다 감사자가
          부스타다이스와 무관하고 독립적이라고 가정하면 결과에 대한 지 식없이
          모든 베팅이 이루어 졌음을 확인 할수 있습니다 하우스는 모든 승리가
          합법적이라는 확신을 얻습니다 보안 검토로 인한 스트레스 출금 지연은
          과거의 일일 뿐입니다.
        </Description>
      </Section>

      <Section>
        <Title>부스타 이용방법 </Title>
        <ImgSection img={howtoplay}></ImgSection>
        <Description>
          부스타는 bustadice에서 2배당 이상에 배팅을 할 경우, 유저가
          배팅하려하는 판의 배당 숫자가 2배당 이하(게임에 지는 숫자)가 연속으로
          나올 것으로 예상되는 최악의 경우 갯수와 그 확률을 추론하여 알려주는
          시스템입니다. bustadice에서 2배당이상을 노리는 실전배팅에 있어서 패할
          확율은 줄여주는 획기적인 추론 시스템입니다. 부스타에서 무료로 제공하는
          파인더 스크립트를 부스타다이스 스크립트란에 넣고 스타트 다음 런을
          실행합니다. 자동으로 멈출때까지 대기하시다가 멈추면 “1,2,3,4,5,6” 와
          같은 로그가 나옵니다. 이 로그를 복사하여 부스타 검색기에 넣고 검색을
          하시면 됩니다
        </Description>
      </Section>
      <Section>
        <Title>검색기 결과를 실전에서 활용하는 방법 </Title>
        <ImgSection
          img={busta_cheer_09}
          style={{ width: "800px", height: "600px" }}
        ></ImgSection>
        <Description>
          2×배당 이상을 finder 자동스크립트로 패턴을 찾아서 그것을 부스타
          추론기를 사용하여 추론하는 방식입니다. finder 자동스크립트를
          부스타다이스 스크립트란에 붙여넣고 아래에 start버튼을 누른후 run버튼을
          누른후 기다리시면 예를들어 조건에 맞는 2,2,1,2,6 라는 패턴이 나왔을때
          멈춥니다 2,3,12,1,2을 복사하여 추론기 검색창에 붙여 넣으시고 검색을
          하면 2×배당 이상이 몇번째 나오는지를 확율로 알려줍니다. 예를 들어
          설명드리면, 위의 그림에서 6이라는 숫자를 보면 6이라는 숫자의 뜻은
          6회연속 2배수이상이 안나오다가 7번째 2배수이상이 나올 확율을 말합니다.
          더 자세한 설명은 로그인 후 설명서를 참고 하시기 바랍니다.
        </Description>
      </Section>
    </Container>
  );
};

export default ProductPresenter;
