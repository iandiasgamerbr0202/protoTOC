const mainStart = function mainStart() {
  const windowScreen = document.getElementById("windowScreen");
  windowScreen.innerHTML = `
    <h1>CREATE<br> YOUR<br> CHARACTER</h1>
    <hr><br>
    <input type="button" id="warriorButton" value="Warrior">
    <input type="button" id="rangerButton" value="Ranger">
    <input type="button" id="rogueButton" value="Rogue">
    <input type="button" id="brawlerButton" value="Brawler">`;

  // Add event listeners
  document.getElementById("warriorButton").addEventListener("click", playerChoosedWarrior);
  document.getElementById("rangerButton").addEventListener("click", playerChoosedRanger);
  document.getElementById("rogueButton").addEventListener("click", playerChoosedRogue);
  document.getElementById("brawlerButton").addEventListener("click", playerChoosedBrawler);
};
