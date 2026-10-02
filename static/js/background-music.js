(() => {
  const audio = document.getElementById("site-background-music");
  const button = document.getElementById("site-music-toggle");
  const nav = document.querySelector(".retro-nav");
  const storageKey = "retro-dispatch-background-music";

  if (!audio || !button) return;
  if (nav) nav.append(button);

  audio.volume = 0.25;

  const setPlayingState = (isPlaying) => {
    button.textContent = `Music: ${isPlaying ? "On" : "Off"}`;
    button.setAttribute("aria-label", `Turn background music ${isPlaying ? "off" : "on"}`);
    button.setAttribute("aria-pressed", String(isPlaying));
  };

  button.addEventListener("click", async () => {
    if (!audio.paused) {
      audio.pause();
      localStorage.setItem(storageKey, "off");
      setPlayingState(false);
      return;
    }

    try {
      await audio.play();
      localStorage.setItem(storageKey, "on");
      setPlayingState(true);
    } catch {
      localStorage.setItem(storageKey, "off");
      setPlayingState(false);
    }
  });

  audio.addEventListener("play", () => setPlayingState(true));
  audio.addEventListener("pause", () => setPlayingState(false));

  if (localStorage.getItem(storageKey) === "on") {
    audio.play().catch(() => {
      localStorage.setItem(storageKey, "off");
      setPlayingState(false);
    });
  }
})();
