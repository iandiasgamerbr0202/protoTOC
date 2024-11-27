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
        if (player.status.sta >= this.cost.amount){
          player.status.sta -= this.cost.amount;
        targetStatus = targetStatus.hp -= player.status.dmg / 2;
        return console.log(`${player.name} used kick`);
        } else {
          return console.log("Not enough Stamina to use kick!");
        };
      }
    },
    dodge:{
      cost: {
        type: "Combo Points",
        amount: 1
      },
      ruleSet: {
        situation: ["Expected impact", "Directional impact"],
        cannot: ["Surprise attack", "Area attack"]
      },
      use: function use(target){
        let targetStatus = target.status;
        if(player.status.comboPoints >= this.cost.amount) {
          player.status.comboPoints -= this.cost.amount;
          return console.log(`${player.name} used dodge`);
        } else {
          return console.log("Not enough Combo Points to use dodge!");
        }
      }
    },
    cammoflage: {
      cost: {
        type: "Combo Points",
        amount: 1
      },
      ruleSet: {
        situation: ["Must use before combat"],
        cannot: ["In combat"]
      },
      use: function use(){
        if (player.status.comboPoints >= this.cost.amount) {
          player.status.comboPoints -= this.cost.amount;
          return console.log(`${player.name} used cammoflage`);
        } else {
          return console.log("Not enough Combo Points to use cammoflage!");
        }
      }
    },
    sprint: {
      cost: {
        type: "Stamina",
        amount: 2
      },
      ruleSet: {
        situation:["Open place", "Must not be in combat"],
        cannot: ["Tired", "Slowed", "Broken leg"]
      },
      use: function use(){
        if (player.status.sta >= this.cost.amount){
          player.status.sta -= this.cost.amount;
          return console.log(`${player.name} used sprint`);
        } else {
          return console.log("Not enough Stamina to use sprint!");
        }
      }
    },
    stealth: {
      cost: {
        type: "Combo Points",
        amount: 1
      },
      ruleSet: {},
      use: function use(){
        if (player.status.comboPoints){
          player.status.comboPoints -= this.cost.amount;
          return console.log(`${player.name} used stealth`);
        } else {
          return console.log("Not enough Combo Points to use stealth!");
        }
      }
    }
  };
  const rogueStarterItems = {
    equiped: {
      armor: {
        head: generate(),
        neck: generate(),
        chest: generate(),
        weist: generate(),
        legs: generate(),
        feets: generate()
      },
      weapon: {
        firstHand: generate(),
        secondHand: generate(),
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
    player.act.combatOptions.roleAttack = basicRoleMoves;
    player.act.combatOptions.weaponAttack = weaponAttack;
    player.bag.equipped.armor = rogueStarterItems.equiped.armor;
    setStatus();
    return alert("YOU CHOOSED ROGUE CLASS");
  };