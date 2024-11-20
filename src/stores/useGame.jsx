import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const useGame = create(
  subscribeWithSelector((set) => ({
    blocksCount: 3,
    phase: "ready",
    start: () => {
      set((state) => (state.phase === "ready" ? { phase: "playing" } : {}));
    },
    restart: () => {
      set((state) =>
        state.phase === "playing" || state.phase === "ended"
          ? { phase: "ready" }
          : {}
      );
    },
    end: () => {
      set((state) => (state.phase === "playing" ? { phase: "ended" } : {}));
    },
  }))
);

export default useGame;
