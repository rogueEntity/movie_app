function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "Pasta",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.visitbend.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fpastini-pasta.jpg&f=1&nofb=1"
  },
  {
    id:2,
    name: "Cutlet",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F16%2FTonkatsu_by_luckypines.jpg%2F180px-Tonkatsu_by_luckypines.jpg&f=1&nofb=1"
  },
  {
    id:3,
    name: "Beef Bourguignon",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F01%2FPressure-Cooker-Boeuf-Bourguignon_exps207902_HC143213C03_18_3bC_RMS-1.jpg%3Fresize%3D150%2C150&f=1&nofb=1"
  },
  {
    id:4,
    name: "Cheese Cake",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.epicurious.com%2Fimages%2Farticlesguides%2Fhowtocook%2Fdishes%2Fcakes%2Fcheese-cake_116.jpg&f=1&nofb=1"
  }
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
