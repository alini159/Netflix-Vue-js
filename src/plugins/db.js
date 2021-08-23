import app from "./firebase";

export const db = app.database();
const userName = db.ref("user/name");
const WhatchList = db.ref( "user/watchlist");

export function writeUserName(user) {
  userName
    .set({
      nome: user
    });
}

export function writeWhatchList(JSON) {
    WhatchList
      .set({
        nomeDoFilme: JSON
      });
  }

export function getUserName(user){
      return userName.ref("/"+user);
  }

  export function getWhatlist(){
    return WhatchList;
}
