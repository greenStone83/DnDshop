let poisons = {
  "Assassin's blood": {
    "price": "150 gp",
    "type": "Ingested",
    "dc": 10,
    "group": "Poison",
    "description": "A creature subjected to this poison must make a DC 10 Constitution saving throw. On a failed save, it takes 6 (1d12) poison damage and is poisoned for 24 hours. On a successful save, the creature takes half damage and isn’t poisoned.",
    "typeDescription": "A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save."
  },
  "Truth serum": {
    "price": "150 gp",
    "type": "Ingested",
    "dc": 11,
    "group": "Poison",
    "description": "A creature subjected to this poison must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. The poisoned creature can’t knowingly speak a lie, as if under the effect of a zone of truth spell.",
    "typeDescription": "A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save."
  },
  "Carrion crawler mucus": {
    "price": "200 gp",
    "type": "Contact",
    "dc": 13,
    "group": "Poison",
    "description": "This poison must be harvested from a dead or incapacitated crawler. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. The poisoned creature is paralyzed. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
    "typeDescription": "Contact poison can be smeared on an object and remains potent until it is touched or washed off. A creature that touches contact poison with exposed skin suffers its effects."
  },
  "Drow poison": {
    "price": "200 gp",
    "type": "Injury",
    "dc": 13,
    "group": "Poison",
    "description": "This poison is typically made only by the drow, and only in a place far removed from sunlight. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the creature is also unconscious while poisoned in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.",
    "typeDescription": "Injury poison can be applied to weapons, ammunition, trap components, and other objects that deal piercing or slashing damage and remains potent until delivered through a wound or washed off. A creature that takes piercing or slashing damage from an object coated with the poison is exposed to its effects."
  },
  "Serpent venom": {
    "price": "200 gp",
    "type": "Injury",
    "dc": 11,
    "group": "Poison",
    "description": "This poison must be harvested from a dead or incapacitated giant poisonous snake. A creature subjected to this poison must succeed on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
    "typeDescription": "Injury poison can be applied to weapons, ammunition, trap components, and other objects that deal piercing or slashing damage and remains potent until delivered through a wound or washed off. A creature that takes piercing or slashing damage from an object coated with the poison is exposed to its effects."
  },
  "Malice": {
    "price": "250 gp",
    "type": "Inhaled",
    "dc": 15,
    "group": "Poison",
    "description": "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become poisoned for 1 hour. The poisoned creature is blinded.",
    "typeDescription": "These poisons are powders or gases that take effect when inhaled. Blowing the powder or releasing the gas subjects creatures in a 5-foot cube to its effect. The resulting cloud dissipates immediately afterward. Holding one’s breath is ineffective against inhaled poisons, as they affect nasal membranes, tear ducts, and other parts of the body."
  },
  "Pale tincture": {
    "price": "250 gp",
    "type": "Ingested",
    "dc": 16,
    "group": "Poison",
    "description": "A creature subjected to this poison must succeed on a DC 16 Constitution saving throw or take 3 (1d6) poison damage and become poisoned. The poisoned creature must repeat the saving throw every 24 hours, taking 3 (1d6) poison damage on a failed save. Until this poison ends, the damage the poison deals can’t be healed by any means. After seven successful saving throws, the effect ends and the creature can heal normally.",
    "typeDescription": "A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save."
  },
  "Essence of ether": {
    "price": "300 gp",
    "type": "Inhaled",
    "dc": 15,
    "group": "Poison",
    "description": "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become poisoned for 8 hours. The poisoned creature is unconscious. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.",
    "typeDescription": "These poisons are powders or gases that take effect when inhaled. Blowing the powder or releasing the gas subjects creatures in a 5-foot cube to its effect. The resulting cloud dissipates immediately afterward. Holding one’s breath is ineffective against inhaled poisons, as they affect nasal membranes, tear ducts, and other parts of the body."
  },
  "Oil of taggit": {
    "price": "400 gp",
    "type": "Contact",
    "dc": 13,
    "group": "Poison",
    "description": "A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or become poisoned for 24 hours. The poisoned creature is unconscious. The creature wakes up if it takes damage.",
    "typeDescription": "Contact poison can be smeared on an object and remains potent until it is touched or washed off. A creature that touches contact poison with exposed skin suffers its effects."
  },
  "Burnt othur fumes": {
    "price": "500 gp",
    "type": "Inhaled",
    "dc": 13,
    "group": "Poison",
    "description": "A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or take 10 (3d6) poison damage, and must repeat the saving throw at the start of each of its turns. On each successive failed save, the character takes 3 (1d6) poison damage. After three successful saves, the poison ends.",
    "typeDescription": "These poisons are powders or gases that take effect when inhaled. Blowing the powder or releasing the gas subjects creatures in a 5-foot cube to its effect. The resulting cloud dissipates immediately afterward. Holding one’s breath is ineffective against inhaled poisons, as they affect nasal membranes, tear ducts, and other parts of the body."
  },
  "Torpor": {
    "price": "600 gp",
    "type": "Ingested",
    "dc": 15,
    "group": "Poison",
    "description": "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become poisoned for 4d6 hours. The poisoned creature is incapacitated.",
    "typeDescription": "A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save."
  },
  "Wyvern poison": {
    "price": "1,200 gp",
    "type": "Injury",
    "dc": 15,
    "group": "Poison",
    "description": "This poison must be harvested from a dead or incapacitated wyvern. A creature subjected to this poison must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
    "typeDescription": "Injury poison can be applied to weapons, ammunition, trap components, and other objects that deal piercing or slashing damage and remains potent until delivered through a wound or washed off. A creature that takes piercing or slashing damage from an object coated with the poison is exposed to its effects."
  },
  "Midnight tears": {
    "price": "1,500 gp",
    "type": "Ingested",
    "dc": 17,
    "group": "Poison",
    "description": "A creature that ingests this poison suffers no effect until the stroke of midnight. If the poison has not been neutralized before then, the creature must succeed on a DC 17 Constitution saving throw, taking 31 (9d6) poison damage on a failed save, or half as much damage on a successful one.",
    "typeDescription": "A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save."
  },
  "Purple worm poison": {
    "price": "2,000 gp",
    "type": "Injury",
    "dc": 19,
    "group": "Poison",
    "description": "This poison must be harvested from a dead or incapacitated purple worm. A creature subjected to this poison must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
    "typeDescription": "Injury poison can be applied to weapons, ammunition, trap components, and other objects that deal piercing or slashing damage and remains potent until delivered through a wound or washed off. A creature that takes piercing or slashing damage from an object coated with the poison is exposed to its effects."
  },
  "Antitoxin": {
    "price": "50 gp",
    "type": "Ingested",
    "dc": "",
    "group": "Poison",
    "description": "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to Undead or constructs.",
    "typeDescription": "A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save."
  },
  "Basic Poison": {
    "price": "100 gp",
    "type": "Contact",
    "dc": 10,
    "group": "Poison",
    "description": "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the Poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.",
    "typeDescription": "Contact poison can be smeared on an object and remains potent until it is touched or washed off. A creature that touches contact poison with exposed skin suffers its effects."
  }
};