import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { dbService } from "../../fbase";

import { authService } from "fbase";
import { dockId } from "../../Routes/Auth";

// import AudioUrl from "../../assets/sound/barAlarm.mp3";

const HomeContainer = () => {
  const [chance, setChance] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  const [percent, setPercent] = useState([]);
  const [sum, setSum] = useState(24);
  const [overfifteen, setOverfifteen] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("접속 되었습니다. 검색을 시작하세요.");
  const [xData, setXdata] = useState([]);
  const [xserverSeed, setxServerSeed] = useState("");
  const [xclientSeed, setxClientSeed] = useState("");
  const [serverSeed, setServerSeed] = useState(
    "3bdff2c00c08aed9393d2d9ee23c22e94eaa0ba1b36321b458c8be75117cf9ad"
  );
  const [clientSeed, setClientSeed] = useState("victory cheers son");
  const [findedRDB, setFindedRDB] = useState([]);
  // const [soundEffect] = useState(new Audio(AudioUrl));

  const SignOut = async () => {
    authService.signOut();
  };
  const listener = async (event) => {
    event.preventDefault();
    event.returnValue = "";
    try {
      authService
        .signOut()
        .then(await dbService.collection("loggedID").doc(`${dockId}`).delete());
    } catch {
    } finally {
      SignOut();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (event.target.name === "clientSeed") {
      // console.log("onSubmit", clientSeed);
    }
    if (event.target.name === "serverSeed") {
    }

    window.addEventListener("beforeunload", listener);
  };

  const onChangeClient = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setClientSeed(value);

    window.addEventListener("beforeunload", listener);
  };

  const onChangeServer = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setServerSeed(value);

    window.addEventListener("beforeunload", listener);
  };

  const searchTermCondition = () => {
    searchByTerm(searchTerm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.includes(" ")) {
      setError("스페이스가 포함 되어있습니다. 검색버튼을 한번 더 누르세요 !");
      await setSearchTerm(searchTerm.trim());
      return;
    }
    if (!searchTerm.includes(" ")) {
      searchTermCondition();
    }
  };

  const updateTerm = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  const findDBForSameTerm = async () => {
    const findedData = await dbService.collection("searchedData").get();

    findedData.forEach((document) => {
      const findedDataObject = {
        ...document.data(),
        id: document.id,
      };
      setFindedRDB((prev) => [findedDataObject, ...prev]);
    });

    // console.log("findedData.length", findedData.Of.docChanges.length);

    if (findedData.Of.docChanges.length > 500) {
      findedData.forEach((document) => {
        // console.log(document.id);
        dbService.collection("searchedData").doc(document.id).delete();
      });
    }
  };

  const searchByTerm = async () => {
    const noneSearchTerm = searchTerm.trim();
    const arrayData = noneSearchTerm.split(",").map((d) => parseInt(d));

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const conditionSum = arrayData.reduce(reducer);
    const notANumber = arrayData.includes(NaN);
    // const includeZero = arrayData.includes(0);
    //todo : 0이 한개 이상이면 안되도록 수정
    const biggerThan = arrayData.filter((n) => n > 28);

    const sameTerm = findedRDB.filter(
      (x) =>
        x.searchTerm === searchTerm &&
        x.clientSeed === clientSeed &&
        x.serverSeed === serverSeed
    );

    if (
      arrayData.length > 6 ||
      arrayData.length < 3 ||
      notANumber ||
      biggerThan.length !== 0 ||
      // includeZero ||
      conditionSum > 50 ||
      serverSeed === "" ||
      clientSeed === ""
    ) {
      setError("Sorry, We don't have the data you are searching");
      setChance([0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]);
      setSum(10);
      setOverfifteen(0);
    } else if (sameTerm.length > 0) {
      setError("본인의 ID 보안을 위해 마무리 하실때는 꼭 Sign Out !");
      setChance(sameTerm[0].chanceNumbers);
      setSum(sameTerm[0].sum);
      setOverfifteen(sameTerm[0].overfifteen);
      setPercent(sameTerm[0].cnn);
      if (loading === false) {
        setLoading(true);
      }
      return;
    } else if (serverSeed.length !== 64) {
      //129? 64?
      setError("Server seed hash 를 입력하세요.");
      return;
    } else if (
      JSON.stringify(xData) !== JSON.stringify(arrayData) ||
      xclientSeed !== clientSeed ||
      xserverSeed !== serverSeed
    ) {
      setxServerSeed(serverSeed);
      setxClientSeed(clientSeed);
      // console.log("xData", xData);
      // console.log("arrayData", arrayData);
      setXdata(arrayData);
      numberGen();
      // setSearchTerm("");
      setError("본인의 ID 보안을 위해 마무리 하실때는 꼭 Sign Out !");
    }
  };

  const chanceNumbers = [];
  let chanceNumber = 0;

  const numberGen = async () => {
    for (let i = 0; i < 12; i++) {
      if (i < 7) {
        chanceNumber =
          Math.floor(Math.random() * (Math.random() * 10000)) + 132;
        chanceNumbers.push(chanceNumber);
      } else if (i > 6 && i < 9) {
        chanceNumber = Math.floor(Math.random() * (Math.random() * 6000)) + 332;
        chanceNumbers.push(chanceNumber);
      } else if (i > 8) {
        chanceNumber = Math.floor(Math.random() * (Math.random() * 1000)) + 132;
        chanceNumbers.push(chanceNumber);
      }
    }

    const overfifteen = Math.floor(Math.random() * 100) + 9;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = chanceNumbers.reduce(reducer) + overfifteen;
    const cnn = chanceNumbers.map((cn) =>
      parseFloat(((cn / sum) * 100).toPrecision(4))
    );
    setChance(chanceNumbers);
    setSum(sum);
    setOverfifteen(overfifteen);
    setPercent(cnn);
    if (loading === false) {
      setLoading(true);
    }
    // 유저 아이디 와 searchTerm 과 결과 데이터를 저장 ~
    await dbService
      .collection("searchedData")
      .add({
        chanceNumbers: chanceNumbers,
        sum: sum,
        overfifteen: overfifteen,
        cnn: cnn,
        clientSeed: clientSeed,
        serverSeed: serverSeed,
      })
      .then(function (docRef) {
        // console.log("Document written with ID: ", docRef.id);
        // dockId = docRef.id;
        dbService.collection("searchedData").doc(docRef.id).set({
          id: docRef.id,
          searchTerm: searchTerm,
          chanceNumbers: chanceNumbers,
          sum: sum,
          overfifteen: overfifteen,
          cnn: cnn,
          clientSeed: clientSeed,
          serverSeed: serverSeed,
        });
      });

    // searchTerm 이 이미 같은 것이 있으면 저장하지 않음
  };

  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 3000 + Math.floor(Math.random() * 1000));
  }

  useEffect(() => {
    findDBForSameTerm();
  }, [loading]);

  window.addEventListener("beforeunload", listener);

  return (
    <HomePresenter
      chance={chance}
      percent={percent}
      sum={sum}
      loading={loading}
      searchTerm={searchTerm}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
      error={error}
      overfifteen={overfifteen}
      onSubmit={onSubmit}
      onChangeClient={onChangeClient}
      onChangeServer={onChangeServer}
      serverSeed={serverSeed}
      clientSeed={clientSeed}
      findDBForSameTerm={findDBForSameTerm}
    ></HomePresenter>
  );
};

export default HomeContainer;
