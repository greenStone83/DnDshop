let weapons = {
  "Club": {
    "price": "1 sp",
    "damage": "1d4 Bludgeon",
    "weight": "2 lb.",
    "properties": "Light",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Dagger": {
    "price": "2 gp",
    "damage": "1d4 Piercing",
    "weight": "1 lb.",
    "properties": "Finesse, Light, Thrown (20/60)",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Greatclub": {
    "price": "2 sp",
    "damage": "1d8 Bludgeon",
    "weight": "10 lb.",
    "properties": "Two-handed",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Handaxe": {
    "price": "5 gp",
    "damage": "1d6 Slashing",
    "weight": "2 lb.",
    "properties": "Light, Thrown (20/60)",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Javelin": {
    "price": "5 sp",
    "damage": "1d6 Piercing",
    "weight": "2 lb.",
    "properties": "Thrown (30/120)",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Light hammer": {
    "price": "2 gp",
    "damage": "1d4 Bludgeon",
    "weight": "2 lb.",
    "properties": "Light, Thrown (20/60)",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Mace": {
    "price": "5 gp",
    "damage": "1d6 Bludgeon",
    "weight": "5 lb.",
    "properties": "-",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Quarterstaff": {
    "price": "2 sp",
    "damage": "1d6 Bludgeon",
    "weight": "5 lb.",
    "properties": "Versatile (1d8)",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Sickle": {
    "price": "1 gp",
    "damage": "1d4 Slashing",
    "weight": "2 lb.",
    "properties": "Light",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Spear": {
    "price": "1 gp",
    "damage": "1d6 Piercing",
    "weight": "3 lb.",
    "properties": "Thrown (20/60), Versatile (1d8)",
    "type": "Simple Melee",
    "group": "Weapons"
  },
  "Crossbow, light": {
    "price": "25 gp",
    "damage": "1d6 Piercing",
    "weight": "5 lb.",
    "properties": "Ammunition (80/320), Loading, Two-handed",
    "type": "Simple Ranged",
    "group": "Weapons"
  },
  "Dart": {
    "price": "5 cp",
    "damage": "1d4 Piercing",
    "weight": ".25 lb.",
    "properties": "Finesse, Thrown (20/60)",
    "type": "Simple Ranged",
    "group": "Weapons"
  },
  "Shortbow": {
    "price": "25 gp",
    "damage": "1d6 Piercing",
    "weight": "2 lb.",
    "properties": "Ammunition (80/320), Two-handed",
    "type": "Simple Ranged",
    "group": "Weapons"
  },
  "Sling": {
    "price": "1 sp",
    "damage": "1d4 Bludgeon",
    "weight": "-",
    "properties": "Ammunition (30/120)",
    "type": "Simple Ranged",
    "group": "Weapons"
  },
  "Battleaxe": {
    "price": "10 gp",
    "damage": "1d8 Slashing",
    "weight": "4 lb.",
    "properties": "Versatile (1d10)",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Flail": {
    "price": "10 gp",
    "damage": "1d8 Bludgeon",
    "weight": "2 lb.",
    "properties": "-",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Glaive": {
    "price": "20 gp",
    "damage": "1d10 Slashing",
    "weight": "6 lb.",
    "properties": "Heavy, Reach, Two-handed",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Greataxe": {
    "price": "30 gp",
    "damage": "1d12 Slashing",
    "weight": "7 lb.",
    "properties": "Heavy, Two-handed",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Greatsword": {
    "price": "50 gp",
    "damage": "2d6 Slashing",
    "weight": "6 lb.",
    "properties": "Heavy, Two-handed",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Halberd": {
    "price": "20 gp",
    "damage": "1d10 Slashing",
    "weight": "6 lb.",
    "properties": "Heavy, Reach, Two-handed",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Lance": {
    "price": "10 gp",
    "damage": "1d12 Piercing",
    "weight": "6 lb.",
    "properties": "Reach, Special",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Longsword": {
    "price": "15 gp",
    "damage": "1d8 Slashing",
    "weight": "3 lb.",
    "properties": "Versatile (1d10)",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Maul": {
    "price": "10 gp",
    "damage": "2d6 Bludgeon",
    "weight": "10 lb.",
    "properties": "Heavy, Two-handed",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Morningstar": {
    "price": "15 gp",
    "damage": "1d8 Piercing",
    "weight": "4 lb.",
    "properties": "-",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Pike": {
    "price": "5 gp",
    "damage": "1d10 Piercing",
    "weight": "18 lb.",
    "properties": "Heavy, Reach, Two-handed",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Rapier": {
    "price": "25 gp",
    "damage": "1d8 Piercing",
    "weight": "2 lb.",
    "properties": "Finesse",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Scimitar": {
    "price": "25 gp",
    "damage": "1d6 Slashing",
    "weight": "3 lb.",
    "properties": "Finesse, Light",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Shortsword": {
    "price": "10 gp",
    "damage": "1d6 Slashing",
    "weight": "2 lb.",
    "properties": "Finesse, Light",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Trident": {
    "price": "5 gp",
    "damage": "1d6 Piercing",
    "weight": "5 lb.",
    "properties": "Thrown (20/60), Versatile (1d8)",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "War pick": {
    "price": "5 gp",
    "damage": "1d8 Piercing",
    "weight": "2 lb.",
    "properties": "-",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Warhammer": {
    "price": "15 gp",
    "damage": "1d8 Bludgeon",
    "weight": "2 lb.",
    "properties": "Versatile (1d10)",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Whip": {
    "price": "2 gp",
    "damage": "1d4 Slashing",
    "weight": "3 lb.",
    "properties": "Finesse, Reach",
    "type": "Martial Melee",
    "group": "Weapons"
  },
  "Blowgun": {
    "price": "10 gp",
    "damage": "1 Piercing",
    "weight": "1 lb.",
    "properties": "Ammunition (25/100), Loading",
    "type": "Martial Ranged",
    "group": "Weapons"
  },
  "Crossbow, hand": {
    "price": "75 gp",
    "damage": "1d6 Piercing",
    "weight": "3 lb.",
    "properties": "Ammunition (30/120), Loading, Light",
    "type": "Martial Ranged",
    "group": "Weapons"
  },
  "Crossbow, heavy": {
    "price": "50 gp",
    "damage": "1d10 Piercing",
    "weight": "18 lb.",
    "properties": "Ammunition (100/400), Loading, Two-handed, Heavy",
    "type": "Martial Ranged",
    "group": "Weapons"
  },
  "Longbow": {
    "price": "50 gp",
    "damage": "1d8 Piercing",
    "weight": "2 lb.",
    "properties": "Ammunition (150/600), Heavy, Two-handed",
    "type": "Martial Ranged",
    "group": "Weapons"
  },
  "Net": {
    "price": "1 gp",
    "damage": "-",
    "weight": "3 lb.",
    "properties": "Special, Thrown (5/15)",
    "type": "Martial Ranged",
    "group": "Weapons"
  }
};