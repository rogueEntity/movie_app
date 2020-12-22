function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Pasta",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.epicurious.com%2Fphotos%2F55f72d733c346243461d496e%2F2%3A1%2Fw_1260%252Ch_630%2F09112015_15minute_pastasauce_tomato.jpg&f=1&nofb=1"
  },
  {
    name: "Cutlet",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpull-revisfoodography.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fveg-cutlet-1.jpg&f=1&nofb=1"
  },
  {
    name: "Beef Bourguignon",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshare1.canvasholidays.com%2Fblog%2Fapp%2Fuploads%2F2015%2F06%2Fbeef-bourguignon.jpg&f=1&nofb=1"
  },
  {
    name: "Cream Cheese Cake",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.livewellbakeoften.com%2Fwp-content%2Fuploads%2F2017%2F04%2FCarrot-Cake-with-Cream-Cheese-Frosting-4.jpg%3Fresize%3D1360%252C2040%26ssl%3D1&f=1&nofb=1"
  }
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
