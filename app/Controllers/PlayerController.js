// import store from "../store.js";
// import PlayerService from "../Services/PlayerService.js";
import store from "../store.js"
import PlayerService from "../Services/PlayerService.js"







export default class PlayerController {

  constructor() {
    this.loadPlayerData()
  }
  async loadPlayerData(req, res, next) {
    try {
      return await PlayerService.loadPlayersData()
    } catch (error) {
      next(error)
    }

  }




}









/**renders all players to the screen */
function _drawNFL() { }

//Public

// export default class PlayerController {
//   constructor() {}
// }