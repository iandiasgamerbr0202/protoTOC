let existingIDs = new Set(); // Store IDs to prevent duplicates

function generateID() {
    let newID;
    do {
        newID = Math.floor(100000 + Math.random() * 900000); // Generates a number between 100000 and 999999
    } while (existingIDs.has(newID));
    
    existingIDs.add(newID);
    return newID.toString();
}

function  generate(itemName,itemAdvantages, itemNerfs, itemWeight, itemAmount, itemStatus, healingAmount = 0,dmg = 0){
  const id = generateID();
  const name = itemName;
  const advantages = itemAdvantages;
  const nerfs = itemNerfs;
  const weight = itemWeight;
  const amount = itemAmount;
  const status = itemStatus;
  const heal = healingAmount;
  const damage = dmg;
  const generatedItem = {
    itemID: id,
    itemName: name,
    itemAdvantages: advantages,
    itemNerfs: nerfs,
    itemWeight: weight,
    itemAmount: amount || 1,	
    itemStatus: status,
    healingAmount: heal,
    dmg: damage
  };
  return generatedItem;
}

