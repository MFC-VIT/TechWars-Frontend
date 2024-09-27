import { atom } from "recoil";

export const teamAtom = atom({
  key: "teamAtom",
  default: {
    name: "",
    score: 0,
    isQuizOver: false,
    territories: []
  }
})