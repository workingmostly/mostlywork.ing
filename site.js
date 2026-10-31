// Local time in Bristol, for any <time data-clock>.
const clocks = document.querySelectorAll("[data-clock]");

if (clocks.length) {
  const format = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const tick = () => {
    const now = new Date();
    for (const clock of clocks) {
      clock.textContent = format.format(now);
      clock.dateTime = now.toISOString();
    }
  };

  tick();
  setInterval(tick, 10000);
}

// Give the ✱ a full turn on hover or tap. A whole turn always lands it exactly
// where it started, however the glyph sits in its font's em box.
for (const footnote of document.querySelectorAll(".footnote")) {
  let turns = 0;
  const spin = () => {
    turns += 1;
    footnote.style.setProperty("--turn", `${turns * 360}deg`);
  };
  footnote.addEventListener("pointerenter", spin);
  footnote.addEventListener("click", spin);
}
