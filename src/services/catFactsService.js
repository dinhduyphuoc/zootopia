import http from "./http";

export function getFacts() {
  http.get("https://cat-fact.herokuapp.com/facts");
}
