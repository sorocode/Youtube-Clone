import Comments from "./components/Comments";
import Header from "./components/Header";
import Info from "./components/Info";
import Player from "./components/Player";
import Profile from "./components/Profile";
import UpNext from "./components/UpNext";

function App() {
  return (
    <div>
      <Header />
      <div className="flex-row md:flex">
        <div>
          <Player />
          <Info />
          <Profile />
        </div>
        <div>
          <UpNext />
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default App;
