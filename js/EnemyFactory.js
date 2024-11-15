const EnemyFactory = function EnemyFactory(status, gearSet, dropList, moves, race, role, type, name)
  { 
    const enemie = {};
    enemie.status = status || {
      hp:20,dmg:1,def:1,spe:1,str:1,krm:-999
    };
    enemie.gearSet = gearSet || [];
    enemie.dropList = dropList || [];
    enemie.race = race || "Abomination";
    enemie.role = role || "EasyPrey";
    enemie.type = type || "Useles";
    enemie.name = name || "Jerry";
    enemie.moves = moves || {
      cry: `${enemie.name} is crying like a baby`,
      talk: {
        opt1: "Why do I exist?",opt2: "I feel pain",opt3: "Kill me"
        }
      };
    return enemie;
  }