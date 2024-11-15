const player = {
  role: null,
  name: null,
  status: {
    lvl:null,
    hp: null,
    exp:null,
    def:null,
    str:null,
    spd:null,
    agi:null,
    end:null,
    sta:null,
    krm:null,
    int:null,
    dex:null,
    focus: null,
    comboPoints:null,
    dmg:null
  },
  bag: {
    equipped: {
      armor: {
        head: {},
        neck: {},
        chest: {},
        weist: {},
        legs: {},
        feets: {}
      },
      usageBelt: {
      ruleSet: {
        beltCapacity: 3,
        itemStackBySlot: {
          consumables: 2,
          gear: 1,
        },
      },
      slot: [],
    },
      weapon: {
        firstHand: {},
        secondHand: {},
      },
    },
    stored: {
      ruleSet: {
        bagCapacity: 40,
        itemStackBySlot: {
          consumables: 5,
          gear: 1,
        },
      },
      slot: [],
    },
  },
  act: {
    combatOptions: {
      roleAttack: {},
      weaponAttack: {},
      moves: {
        punch: {
          learned: true, //default
          cost: {
            type: "Stamina",
            amount: 2
          },
          ruleSet: {
            situation: "Combat",
            cannot: ["Broken arm","Both arms"]
          }
        },
        kick: {
          learned: false, //default
          cost: {
            type: "Stamina",
            amount: 1
          },
          ruleSet: {
            situation: ["Stop charged attacks", "Try to drop the enemie's weapon"],
            cannot: ["Broken leg","Totally solid target","Moving objects"]
          }
        },
        pull: {
          learned: true, //default
          cost: {
            type: "Stamina",
            amount: "1 Meter"
          },
          ruleSet: {
            situation: ["You pull your enemie on combat", "You pull an object to move it"],
            cannot: ["Be bigger than you", "Be too small", "Exceed your strenght capacity", "Be liquid", "Be flaming", "Be imovable"]
          }
        },
        block: {
          learned: false, //default
          cost: {
            type: null,
            amount: 0,
            costEvery: null
          },
          ruleSet: {
            situation: "You block a commom move with hands/shield",
            cannot: ["Block smash", "reflect", "Block special moves", "Block air attacks"]
          }
        }
      }
    },
    globalOptions: {
      talk: {},
      grab: {
        learned: true, //default,
        cost: {
          type: null,
          amount: 0,
          costEvery: null
        },
        ruleSet: {
          situation: "Object must be storable",
          cannot: ["Be alive","Bigger than you", "Reach your strenght limit", "Overpass your bag capacity"]
        }
      },
      climb: {
        learned: false, //default,
        cost: {
          type: "Stamina",
          amount: 0.5,
          costEvery: "1 Meter"
        },
        ruleSet: {
          situation: "Object must be bigger than you",
          cannot: ["Flat wall", "Thin wall", "Combat situation", "Unconscious", "Asleep", "Paralyzed", "Broken arm", "Broken legs"]
        }
      },
      swim: {
        learned: false, //default
        cost: {
          type: "Stamina",
          amount: 0.2,
          costEvery: "1 Meter"
        },
        ruleSet: {
            situation: "Water must be above your waist",
            cannot: ["Ground", "Quicksand", "Lava", "Scorching water", "Broken arm", "Broken legs", "Unconscious", "Asleep", "Paralyzed"]
          }
      },
      useItem: {
        larned: true, //default
        cost: {},
        ruleSet: {}
      },
    }
  },
  target_s: [
    {
      id:null,lvl:null,hp: null,exp:null,def:null,str:null,spd:null,agi:null,end:null,sta:null,krm:null,int:null,dex:null,attention:false
    },
    {
      id:null,lvl:null,hp: null,exp:null,def:null,str:null,spd:null,agi:null,end:null,sta:null,krm:null,int:null,dex:null,attention:false
    },
    {
      id:null,lvl:null,hp: null,exp:null,def:null,str:null,spd:null,agi:null,end:null,sta:null,krm:null,int:null,dex:null,attention:false
    }
  ]
};