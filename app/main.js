import PlayerController from "./Controllers/PlayerController.js"
// import PlayerController from ". /Controlllers/PlayerController.js"



class App {
  playerController = new PlayerController()
}

window["app"] = new App()
// class App {
//   playerController = new PlayerController()
// }

// window["app"] = new App();
