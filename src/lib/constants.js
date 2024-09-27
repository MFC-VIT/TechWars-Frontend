const DEPLOY_BE_URI = import.meta.env.VITE_BACKEND_URI;
const DEV_BE_URI = "http://localhost:8080";
export const BASE_URL =
  (import.meta.env.VITE_NODE_ENV == "production" ? DEPLOY_BE_URI : DEV_BE_URI) +
  "/api/v1";

export const TEAM_LOGIN = BASE_URL + "/team/login";
export const TEAM_START_QUIZ = BASE_URL + "/quiz/start?questions=10";
export const QUIZ_VERIFY_ANS = BASE_URL + "/quiz/question/verify";
export const GET_TEAM_IN_LOBBY = BASE_URL + "/lobby/teams";
export const SUBMIT_QUIZ = BASE_URL + "/quiz/submit";
export const GET_ALL_TERRITORIES = BASE_URL + "/territory/all";
export const GET_TEAM_DATA = BASE_URL + "/team/";
export const CREATE_LOBBY = BASE_URL + "/admin/lobby/create";
export const MIGRATE_TEAM = BASE_URL + "/admin/team/migrate/force";
export const STARTEND_QUIZ = BASE_URL + "/admin/quiz/";
export const TERRITORY_CHANGE = BASE_URL + "/admin/territory/transfer";
export const GET_SCORE = BASE_URL + "/admin/lobby";
export const UPDATE_SCORE = BASE_URL + "/admin/team/score";
export const LEADERBOARD_DATA = BASE_URL + "/team/score/all";
