
"use client";

import { useState } from "react";

const initialPlayers = [
  "Oyunçu 1",
  "Oyunçu 2",
  "Oyunçu 3",
  "Oyunçu 4"
];

export default function Home() {
  const [players, setPlayers] = useState(initialPlayers);
  const [selected, setSelected] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [roomCode, setRoomCode] = useState("ASK2026");

  function spinBottle() {
    if (spinning) return;

    setSpinning(true);
    setSelected("");

    const winner =
      players[Math.floor(Math.random() * players.length)];

    window.setTimeout(() => {
      setSelected(winner);
      setSpinning(false);
    }, 2000);
  }

  function changePlayer(index: number, value: string) {
    setPlayers((current) =>
      current.map((player, i) =>
        i === index ? value : player
      )
    );
  }

  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <div className="logo">❤️ Aşk yeniden başlar</div>

          <div className="wallet">
            <span>🪙 1000 Gold</span>
            <span>💎 100 Diamond</span>
          </div>
        </header>

        <section className="hero">
          <h1>Aşk yeniden başlar</h1>
          <p>
            Dostlarınla bir araya gəl, şüşəni fırlat
            və əyləncəyə başla!
          </p>
        </section>

        <section className="game">
          <div className="panel">
            <h2 style={{ textAlign: "center", marginBottom: 18 }}>
              🍾 Şüşə oyunu
            </h2>

            <div className="table">
              <div
                className="bottle"
                style={{
                  transform: spinning
                    ? "rotate(1440deg)"
                    : "rotate(0deg)"
                }}
              >
                🍾
              </div>

              <button
                className="spin-button"
                onClick={spinBottle}
                disabled={spinning}
              >
                {spinning ? "Fırlanır..." : "Şüşəni fırlat"}
              </button>
            </div>

            {selected && (
              <h2 style={{ textAlign: "center", marginTop: 20 }}>
                ❤️ Seçilən oyunçu: {selected}
              </h2>
            )}
          </div>

          <div className="panel">
            <h2 style={{ marginBottom: 16 }}>👥 Oyunçular</h2>

            <div className="players">
              {players.map((player, index) => (
                <label className="player" key={index}>
                  <strong>Oyunçu {index + 1}</strong>
                  <input
                    value={player}
                    onChange={(event) =>
                      changePlayer(index, event.target.value)
                    }
                    aria-label={`Oyunçu ${index + 1}`}
                    style={{
                      width: "100%",
                      padding: 8,
                      borderRadius: 8,
                      border: "1px solid #75446d",
                      background: "#120b18",
                      color: "white"
                    }}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="panel">
            <h2>🏠 Oyun otağı</h2>
            <p style={{ marginTop: 12 }}>
              Otaq kodu: {roomCode}
            </p>

            <button
              className="spin-button"
              style={{ marginTop: 14 }}
              onClick={() =>
                setRoomCode(
                  "ASK" +
                  Math.floor(1000 + Math.random() * 9000)
                )
              }
            >
              Yeni otaq kodu
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
