import Header from "./Components/Header";
import Player from "./Components/Player";
import TimerChallenge from "./Components/TimerChallenge";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" time='1' />
        <TimerChallenge title="Doable" time='5' />
        <TimerChallenge title="little tuf" time='10' />
        <TimerChallenge title="Difficult" time='15' />
      </div>
    </>
  );
}

export default App;
