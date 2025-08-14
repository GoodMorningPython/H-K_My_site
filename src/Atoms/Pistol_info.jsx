import cc9 from "../assets/image/CC9.png";
import hk45t from "../assets/image/HK45_Tactical.png";
import hk45 from "../assets/image/HK45.png";
import hk45c from "../assets/image/HK45c.png";
import p30 from "../assets/image/P30.png";
import p30L from "../assets/image/P30L.png";
import p30sk from "../assets/image/P30SK.png";
import vp9m from "../assets/image/VP9_match_OR.png";
import vp9t from "../assets/image/VP9_tactical_OR.png";
import vp9f from "../assets/image/VP9A1_F.png";
import vp9k from "../assets/image/VP9A1_K.png";
import vp9L from "../assets/image/VP9L_OR.png";
const Pistol_info = () => {
  const pistolListObj = [
    {
      name: "CC9 Pistol",
      info: "항상 은폐하여 소지할 수 있는 신뢰성 높으며 사격하기 편한 권총입니다.",
      price: "$699",
      url: cc9,
    },
    {
      name: "VP9A1 F Pistol",
      info: "7인치 배럴로 높은 내구성과 신뢰성 및 그립감을 자랑합니다.",
      price: "$1,049",
      url: vp9f,
    },
    {
      name: "VP9A1 K Pistol",
      info: "4인치 배럴이라는 짧은 길이로 은닉성이 띄어나며, F와 비교했을 때 절대 꿇리지 않습니다. ",
      price: "$1,049",
      url: vp9k,
    },
    {
      name: "VP9L OR Pistol",
      info: "VP9시리즈 중 가장 많이 팔린 제품이며 5인치 배럴, 20발의 확장탄창을 자랑합니다.",
      price: "$1,029",
      url: vp9L,
    },
    {
      name: "VP9 Match Pistol",
      info: "동급 최고의 인체공학적 설계와 특대형 5.5인치 배럴, 높은 정확도와 일관성과 20발 확장탄창을 자랑합니다.",
      price: "$1,299",
      url: vp9m,
    },
    {
      name: "VP9 Tactical OR Pistol",
      info: "4.7인치 해머 단조 배럴과 총구 및 소음기 높이의 가늠쇠가 특징으로, 더 높은 시야를 확보하는 권총입니다.",
      price: "$1,199",
      url: vp9t,
    },
    {
      name: "P30 Pistol",
      info: "조절 가능한 그립 프레임을 통해 백 스트랩과 그립 패널을 27가지로 교체하여, 자신의 손에 맞춰 사용할 수 있습니다.",
      price: "$949",
      url: p30,
    },
    {
      name: "P30L Pistol",
      info: "일반 P30 권총보다 한층 더 긴 배럴을 사용하였습니다.",
      price: "$949",
      url: p30L,
    },
    {
      name: "P30 SK Pistol",
      info: "일반 P30 권총보다 더 작은 프레임을 사용하여 은닉성을 높인 권총입니다.",
      price: "$949",
      url: p30sk,
    },
    {
      name: "HK45 Pistol",
      info: ".45 ACP 탄을 이용한 권총으로 미국의 9mm M9를 대체할 목적으로 개발되었으나, 이 프로그램은 완료되기 전에 종료되었습니다.",
      price: "$949",
      url: hk45,
    },
    {
      name: "HK45 Tactical Pistol",
      info: "HK45 권총에서 소음기를 장착할 것을 염두에 두고 개발된 권총입니다.",
      price: "$1,129",
      url: hk45t,
    },
    {
      name: "HK45 COMPACT Pistol",
      info: "HK45 권총에서 전체 길이를 작게 만들어 은닉성을 높였습니다.",
      price: "$949",
      url: hk45c,
    },
  ];
  return pistolListObj;
};

export default Pistol_info;
