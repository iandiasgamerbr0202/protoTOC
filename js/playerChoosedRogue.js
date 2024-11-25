const playerChoosedRogue = function playerChoosedRogue(){
  const setStatus =   function setStatus(){
    let damage = player.status.dmg;
    const equipedItems = player.bag.equipped;
    damage = (equipedItems.weapon.firstHand.itemStatus.str + equipedItems.weapon.firstHand.dmg) / 2;
    player.status.dmg = damage;
    return console.log("status updated");
  };
  const basicRoleMoves = {
    kick: {
      cost: {
        type: "Stamina",
        amount: null
      },
      ruleSet: {
        situation: [],
        cannot: []
      },
      use: function (){

      }
    },
    dodge:{
      cost: {
        type: "Combo Points",
        amount: 1
      },
      ruleSet: {
        situation: [],
        cannot: []
      },
      use: function (){

      }
    },
    cammoflage: {
      cost: {
        type: "Combo Points",
        amount: 1
      },
      ruleSet: {
        situation: [],
        cannot: []
      },
      use: function (){

      }
    },
    sprint: {
      cost: {
        type: "Stamina",
        amount: null
      },
      ruleSet: {
        situation:{},
        cannot: []
      },
      use: function (){

      }
    },
    stealth: {
      cost: {
        type: "Combo Points",
        amount: 1
      },
      ruleSet: {},
      use: function (){

      }
    }
  };
  const rogueStarterItems = {
    equiped: {
      armor: {},
      weapon: {
        firstHand: {},
        secondHand: {}
      }
    },
    stored: {}

  };
  const weaponAttack = {};
    player.role = "Rogue";
    player.status.lvl = 1;
    player.status.hp = 40;
    player.status.def = 3;
    player.status.str = 5;
    player.status.spd = 16;
    player.status.agi = 15;
    player.status.sta = 14;
    player.status.krm = 0;
    player.status.krm + 1;
    player.status.comboPoints = 0;
    player.status.int = 13;
    player.status.dex = 10;
    return alert("YOU CHOOSED ROGUE CLASS");
  };