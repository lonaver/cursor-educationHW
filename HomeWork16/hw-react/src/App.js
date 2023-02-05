import "./App.css";
import Post from "./components/post/Post";

function App() {
  const ANAKIN_IMAGE =
    "https://i.pinimg.com/736x/09/27/5a/09275a0b75eba63c98c81af8901e6ee4.jpg";

  const RAY_IMAGE =
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

  const DARTHVADER_IMAGE =
    "https://www.shutterstock.com/image-photo/san-benedetto-del-tronto-italy-260nw-239338216.jpg";

  const DART_POST =
    "https://3.bp.blogspot.com/-LGkP5IBg3iE/T8QFexhJvGI/AAAAAAAAAWc/BA2OF7PSJ-c/w1200-h630-p-k-no-nu/darth-vader-and-son-3.jpg";

  const YODA_IMAGE =
    "https://www.fototapete.de/media/catalog/product/1/4/14721_star_wars_yoda_ma_1.jpg";
  const YODA_POST =
    "https://www.creativefabrica.com/wp-content/uploads/2022/10/26/Baby-Yoda-By-Greg-Rutkowski-Weta-Digital-43401561-1.png";
  const CHUBAKA_IMAGE =
    "https://i.pinimg.com/originals/46/0e/13/460e132071327f5c7f2000f909f0b9f1.jpg";
  const CHUBAKA_POST =
    "https://images.immediate.co.uk/production/volatile/sites/3/2019/09/Star-Wars-The-Force-Awakens-han-solo-chewbacca-afb1527.jpg?quality=90&resize=980,654";
  const postData = [
    {
      author: {
        name: "Anakin skywalker",
        photoNick: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      imagePost: RAY_IMAGE,
      date: "26 feb",
      countComment: 482,
      countLook: 146,
      countLikes: 887,
      countDownload: 0,
      theme: "themesky",
    },
    {
      author: {
        name: "Dart Vayder",
        photoNick: DARTHVADER_IMAGE,
        nickname: "@dart_vader",
      },
      content: "Happy fathers day!!! ",
      imagePost: DART_POST,
      date: "26 feb",
      countComment: 1025,
      countLook: 152,
      countLikes: 589,
      countDownload: 0,
      theme: "themegreen",
    },
    {
      author: {
        name: "Yoda",
        photoNick: YODA_IMAGE,
        nickname: "@yoda",
      },
      content: "How far times... when I was young ",
      imagePost: YODA_POST,
      date: "25 feb",
      countComment: 5025,
      countLook: 1529,
      countLikes: 12000,
      countDownload: 400,
      theme: "themesky",
    },
    {
      author: {
        name: "Chubaka",
        photoNick: CHUBAKA_IMAGE,
        nickname: "@chubaka",
      },
      content: "What the funny times ))) ",
      imagePost: CHUBAKA_POST,
      date: "27 feb",
      countComment: 625,
      countLook: 529,
      countLikes: 928,
      countDownload: 25,
      theme: "themegreen",
    },
  ];
  return (
    <div className="App">
      {postData.map((elem) => (
        <Post {...elem}></Post>
      ))}
    </div>
  );
}

export default App;
