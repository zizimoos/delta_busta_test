import React from "react";
import styled from "styled-components";

import { authService } from "../../fbase";
import { dbService } from "../../fbase";
import { dockId } from "../../Routes/Auth";

import busta_cheer_01 from "../../assets/img/busta_cheer_01.jpg";
import busta_cheer_02 from "../../assets/img/busta_cheer_02.jpg";
import busta_cheer_03 from "../../assets/img/busta_cheer_03.jpg";
import busta_cheer_04 from "../../assets/img/busta_cheer_04.jpg";
import busta_cheer_05 from "../../assets/img/busta_cheer_05.jpg";

import busta_cheer_07 from "../../assets/img/busta_cheer_07.jpg";
import busta_cheer_08 from "../../assets/img/busta_cheer_08.jpg";
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
  margin-top: 20px;
  margin-bottom: 20px;
  width: 800px;
`;
const Title = styled.div`
  font-size: 22px;
  color: white;
  margin-bottom: 10px;
`;
const ImgSection = styled.div`
  width: 800px;
  height: 600px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position-x: center;
`;
const Description = styled.div`
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
      <Section>
        <Title>busta</Title>
        <ImgSection img={busta_cheer_01}></ImgSection>
        <Description>
          busta는 부스타 다이스의 결과값을 추론하는 추론기 입니다. 다년간의
          축적된 데이터를 바탕으로 평균값 추론 확률 제공 및 씨드에 따른 추론
          확률을 제공합니다. 이를 통해 부스타 다이스 이용시 좀 더 좋은 확률에
          접근하는 방법을 제시합니다. 즉 실전배팅에 있어서 패할 확율을 줄여주는
          획기적인 추론 시스템입니다
        </Description>
      </Section>

      <Section>
        <Title>세계가 열광하고 있는 새로운 쇼셜게임 bustadice! ​ </Title>
        <ImgSection img={busta_cheer_02}></ImgSection>
        <Description>
          Bustadice는 1.01배당부터 100만배당까지를 맞추어 그 해당 배당만큼
          수익을 가져가는 게임입니다. 배당은 bustadice 서버에서 랜덤으로 나오는
          난수이기 때문에 예측하기가 굉장히 어렵습니다.
        </Description>
      </Section>
      <Section>
        <Title>향상된 개인 정보</Title>
        <ImgSection img={busta_cheer_03}></ImgSection>
        <Description>
          개인정보보호를 강화하여 플레이어와 투자자에게 업계최고의
          개인정보보호를 제공하기위해 출금시 정교한 알고리즘을 사용하여 다른
          사람이 당신이 겜블을 한 사실을 알수가 없습니다. 또한 거래 비용을 크게
          낮추어 출금 수수료가 가장 낮습니다
        </Description>
      </Section>
      <Section>
        <Title>게임 작동 방식 </Title>
        <ImgSection img={busta_cheer_04}></ImgSection>
        <Description>
          각 배팅의 결과는 1x배에서 1,000,000x배 사이에서 무작위로 나옵니다
          결과가 초과 될것으로 생각되는 목표를 추측하는 것은 당신의 몫입니다
          베팅결과가 예상보다 떨어지면 베팅금액을 잃게 됩니다 그러나 올바르게
          추측하면 베팅금액에 추측한 배수가 곱해집니다.
        </Description>
      </Section>
      <Section>
        <Title>다중 서명 냉장 보관</Title>
        <ImgSection img={busta_cheer_05}></ImgSection>
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
        <Title>뱅커에 투자하십시오 </Title>
        <ImgSection img={busta_cheer_07}></ImgSection>
        <Description>
          스릴보다 비트코인을 천천히 성장시키고자 한다면 뱅크롤에 투자를 하고
          카지노의 이익에 참여 하시면 됩니다 언제든 원할때마다 투자하고 매각할수
          있습니다 이익에 대한 50%의 경쟁 수수료를 재공 합니다 자금이 희석되면
          보상을 받습니다 Kelly 기준에 의해 제한되는 적절한 위험 관리를
          제공합니다.
        </Description>
      </Section>
      <Section>
        <Title>부스타 이용방법 </Title>
        <ImgSection img={busta_cheer_08}></ImgSection>
        <Description>
          부스타는 bustadice에서 2배당 이상에 배팅을 할 경우, 유저가
          배팅하려하는 판의 배당 숫자가 2배당 이하(게임에 지는 숫자)가 연속으로
          나올 것으로 예상되는 최악의 경우 갯수와 그 확률을 알려주는
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
        <ImgSection img={busta_cheer_09}></ImgSection>
        <Description>
          만약 부스트다이스 스크립트란에서 “1,2,3,4,5,6”이 나왔다면, 패턴일치
          합계가 100 이고 1st max가 5 (10%) 가 나왔다고 가정을 해보자면 패턴일치
          합계 100은 전체 디비에서 “1,2,3,4,5,6” 이 나온 전체 갯수입니다. 1st
          max는 “1,2,3,4,5,6” 의 “6” 다음판이 2배당미만이 연속으로나온 최악의
          갯수를 뜻합니다 확률은 100개중에 5가 10번이 나왔다는 뜻입니다.
          다이스헌터의 적중율은 80%이상이며 어떠한 경우에도 1st max 값 이상을
          2배 마틴배팅하셔는 안됩니다. 그 이유는 손실의 액수가 커지기
          때문입니다. 패턴일치합계가 낮을수록 적중확률이 떨어집니다. 같은패턴 즉
          “1,2,3,4,5,6”의 조합이 다이스헌터의 데이타베이스와 일치하는 경우가
          적다는 뜻입니다. 즉, 패턴일치합계가 높을수록 적중확률이 상대적으로
          높습니다
        </Description>
      </Section>
    </Container>
  );
};

export default ProductPresenter;
