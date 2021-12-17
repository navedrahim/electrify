import "./Home.css"

function Home() {
  return (
    <div className="welcome">
      <div className="image-container">
        <img className="home-pic" src="https://i.imgur.com/hf08J1b.jpg"/>
      </div>
      <div className="message">
        Welcome to Electrify! Here you can find information on electric cars available in the US. If you are interested in electric vehicles, you
        have come to the right place. Click "Browse Cars" if you want to learn
        more about the future of mobility.
      </div>
    </div>
  );
}

export default Home;
