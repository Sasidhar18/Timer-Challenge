import { useRef, useState } from "react";

const Player = () => {
  const playerRef = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleClick = () => {
    setPlayerName(playerRef.current.value.toUpperCase());
    playerRef.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Player'}</h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={handleClick}>SetName</button>
      </p>
    </section>
  );
};

export default Player;
