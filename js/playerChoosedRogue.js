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
        amount: 5
      },
      ruleSet: {
        situation: ["One target", "Cancelling target moves"],
        cannot: ["Paralyzed", "Broken leg or legs"]
      },
      use: function use(target){
        let targetStatus = target.status;
        player.status.sta - this.cost.amount;
        targetStatus = targetStatus.hp -= player.status.dmg / 2;
        return console.log(`${player.name} used kick`);
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
      use: function use(target){
        let targetStatus = target.status;
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
      use: function use(target){
        let targetStatus = target.status;
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
      use: function use(target){
        let targetStatus = target.status;
      }
    },
    stealth: {
      cost: {
        type: "Combo Points",
        amount: 1
      },
      ruleSet: {},
      use: function use(target){
        let targetStatus = target.status;
      }
    }
  };
  const rogueStarterItems = {
    equiped: {
      armor: {
        head: {},
        neck: {},
        chest: {},
        weist: {},
        legs: {},
        feets: {}
      },
      weapon: {
        firstHand: generate(),
        secondHand: nulll,
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