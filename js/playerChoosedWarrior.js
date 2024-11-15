const playerChoosedWarrior = function playerChoosedWarrior(){
  function setStatus(){
    let damage = player.status.dmg;
    const equipedItems = player.bag.equipped;
    damage = (equipedItems.weapon.firstHand.itemStatus.str + equipedItems.weapon.firstHand.dmg) / 2;
    player.status.dmg = damage;
    return console.log("status updated");
  };
    const basicRoleMoves = {
      warCry: {
        cost: {
          type: "Stamina",
          amount: 1
        },
        ruleSet: {
          situation:["Multiple enemies combat", "Calling attention"],
          cannot: ["Single enemie", "Paralyzed"]
        },
        use: function(){
          if (player.status.sta >= 5 && basicRoleMoves.warCry.cost.type === "Stamina"){
            player.status.sta - basicRoleMoves.warCry.cost.amount
          } else if (player.status.sta < basicRoleMoves.warCry.cost.amount){
            return console.log("Not enough Stamina to use War Cry!")
          } else if (basicRoleMoves.warCry.cost.type !== "Stamina"){
            return console.log("Incompatible cost type!")
          }
          else if (player.target_s[0].id === null && player.target_s[1] === null && player.target_s[2] === null ){
            return console.log("There is no target(s)")
          } else {
            player.target_s[0].attention = true;
            player.target_s[1].stunned = true;
            player.target_s[2].attention = true;
            return console.log(`${player.name} use War Cry!`)
          }
        }
      },
      rage: {
        cost: {
          type: "Stamina",
          amount: 5
        },
        ruleSet: {
          situation: "HP must be lower than 50%",
          cannot: "Full health"
        },
        use: function(){
          if (player.status.hp <= player.status.hp / 2){
            player.status.stamina = player.status.hp - basicRoleMoves.rage.cost
            player.status.bonus = {str: {effect:+5, time: 3}, spd: {effect:+5, time: 3}, dmg: {effect:+5, time:3}}
            return console.log(`${player.name} use Rage!`)
          }
        }
      },
      sparingAttack: {
        cost:{
          type: "Stamina",
          amount: 0,
        },
        ruleSet: {
          situation: "Last attack to eliminate the enemie",
          cannot: ["Use as regular attack", "Use without weapon"]
        },
        use: function(target){
          if (target.hp + target.def <= player.status.dmg + player.status.str){
            player.status.exp += target.status.exp;
            player.status.krm += target.status.krm;
            target.status.hp = 0;
            player.status.hp += 10;
            return console.log(`${player.name} sparingly hit ${target.name} and killed it!`)
          }
        }
      },
    };
    const warriorStarterItems = {
      equiped:  {
        armor: {
          head: null,
          neck: null,
          chest: generate("Leather Chest",null,null,0.5,1,{def:3,str:0,agi:0,spd:0,},0, 0),
          weist: generate("Leather Belt", null, null, 1, 1, {def:0,str:0,agi:1,spd:0}, 0, 0),
          legs: generate("Leather Pants", null, null, 1, 1, {def:1,str:0,agi:0,spd:1}, 0, 0),
          feets: generate("Leather Boots", null, null, 0.3, 1, {def:0,str:0,agi:2,spd:0}, 0, 0)
        },
        weapon: {
          firstHand: generate("Short Sword", "Faster and lighter", "Short range", 1, 1, {def:0,str:3,agi:2,spd:2}, 0, 5),
          secondHand: {}
        }
      },
      stored: {
        slot: [generate("Small healing potion", "Quick reload", "Less heal", 0.1, 3, {}, 10, 0)]
      }
    };
    player.role = "Warrior";
    player.status.lvl = 1;
    player.status.hp = 50;
    player.status.exp = 0;
    player.status.def = 5;
    player.status.str = 15;
    player.status.spd = 10;
    player.status.agi = 5;
    player.status.end = 10;
    player.status.sta = 10;
    player.status.krm = 0;
    player.status.int = 5;
    player.status.dex = 5;
    player.bag.stored.slot += warriorStarterItems.stored.slot;
    player.act.combatOptions.roleAttack = basicRoleMoves;
    player.bag.equipped.weapon = warriorStarterItems.equiped.weapon;
    player.act.combatOptions.weaponAttack = {
      slash: {
        cost: {
          type: null,
        },
        ruleSet: {
          situation: ["Single enemy combat"],
          cannot: ["Paralyzed"]
        },
        use: function(target){

        }
      },
      stab: {
        cost: {
          type: "Stamina",
          amount: 1,
        },
        ruleSt: {
          situation: ["Single enemy combat"],
          cannot: ["Paralyzed", "Without stamina"]
        }
      },
    }
    player.bag.equipped.armor.head = warriorStarterItems.equiped.armor.head;
    player.bag.equipped.armor.neck = warriorStarterItems.equiped.armor.neck;
    player.bag.equipped.armor.chest = warriorStarterItems.equiped.armor.chest;
    player.bag.equipped.armor.weist = warriorStarterItems.equiped.armor.weist;
    player.bag.equipped.armor.legs = warriorStarterItems.equiped.armor.legs;
    player.bag.equipped.armor.feets = warriorStarterItems.equiped.armor.feets;
    player.status.dmg = setStatus();
    return console.log("YOU CHOOSED WARRIOR CLASS");
  };