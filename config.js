

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1363130481776005140", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "IG : siraphat.tf19", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/8xk9Q72dzB",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Siraphat",
      password: "sira2006",
      host: "127.0.0.1",
      port:  3000,
      secure: false
    }
  ]
}
