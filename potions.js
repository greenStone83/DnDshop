let potions = {
  "Potion of Healing": {
    "price": "50 gp",
    "rarity": "Common",
    "group": "Potion",
    "description": "You regain 2d4 + 2 hit points when you drink this potion. \n\n• The potion's red liquid glimmers when agitated."
  },
  "Potion of Greater Healing": {
    "price": "150 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "You regain 4d4 + 4 hit points when you drink this potion. \n\n• The potion's red liquid glimmers when agitated."
  },
  "Potion of Superior Healing": {
    "price": "450 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "You regain 8d4 + 8 hit points when you drink this potion. \n\n• The potion's red liquid glimmers when agitated."
  },
  "Potion of Supreme Healing": {
    "price": "1,350 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "You regain 10d4 + 20 hit points when you drink this potion. \n\n• The potion's red liquid glimmers when agitated."
  },
  "Elixir of Health": {
    "price": "120 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "When you drink this potion, it cures any disease afflicting you, and it removes the blinded, deafened, paralyzed, and poisoned conditions. \n\n• The clear red liquid has tiny bubbles of light in it."
  },
  "Potion of Poison": {
    "price": "100 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned.\n\n At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. \n\nAt the end of each of your turns, you can repeat the saving throw. \n\nOn a successful save, the poison damage you take on your subsequent turns decreases by 1d6. \n\nThe poison ends when the damage decreases to 0.\n\n• This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. An identify spell reveals its true nature."
  },
  "Philter of Love": {
    "price": "90 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. \n\nIf the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. \n\n• This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart."
  },
  "Potion of Fire Breath": {
    "price": "150 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "fter drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. \n\nThe target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. \n\nThe effect ends after you exhale the fire three times or when 1 hour has passed. \n\n• This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened."
  },
  "Potion of Climbing": {
    "price": "180 gp",
    "rarity": "Common",
    "group": "Potion",
    "description": "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. \n\nDuring this time, you have advantage on Strength (Athletics) checks you make to climb. \n\n• The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors."
  },
  "Potion of Heroism": {
    "price": "180 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "You gain 10 temporary hit points that last for 1 hour. \n\nFor the same duration, you are under the effect of the bless spell (no concentration required). \n\n• This blue potion bubbles and steams as if boiling."
  },
  "Potion of Invisibility": {
    "price": "180 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. \n\nThe effect ends early if you attack or cast a spell.\n\n• This potion's container looks empty but feels as though it holds liquid."
  },
  "Potion of Mind Reading": {
    "price": "180 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "When you drink this potion, you gain the effect of the detect thoughts spell (save DC 13). \n\n• The potion's dense, purple liquid has an ovoid cloud of pink floating in it."
  },
  "Potion of Water Breathing": {
    "price": "180 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "You can breathe underwater for 1 hour after drinking this potion.\n\n•  Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it."
  },
  "Potion of Animal Friendship": {
    "price": "200 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "When you drink this potion, you can cast the animal friendship spell (save DC 13) for 1 hour at will. \n\n• Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair."
  },
  "Potion of Diminution": {
    "price": "270 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "When you drink this potion, you gain the \"reduce\" effect of the enlarge/reduce spell for 1d4 hours (no concentration required). \n\n• The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process."
  },
  "Potion of Growth": {
    "price": "270 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "When you drink this potion, you gain the \"enlarge\" effect of the enlarge/reduce spell for 1d4 hours (no concentration required). \n\n• The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process."
  },
  "Potion of Gaseous Form": {
    "price": "300 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "When you drink this potion, you gain the effect of the gaseous form spell for 1 hour (no concentration required) or until you end the effect as a bonus action. \n\n• This potion's container seems to hold fog that moves and pours like water."
  },
  "Potion of Resistance": {
    "price": "300 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "When you drink this potion, you gain resistance to 1 type of damage for 1 hour.\n\n(The resistance is pre-determined)"
  },
  "Potion of Speed": {
    "price": "400 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "When you drink this potion, you gain the effect of the haste spell for 1 minute (no concentration required). \n\n• The potion's yellow fluid is streaked with black and swirl on its own."
  },
  "Potion of Flying": {
    "price": "500 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. \n\nIf you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. \n\n• This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it."
  },
  "Potion of Clairvoyance": {
    "price": "960 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "When you drink this potion, you gain the effect of the clairvoyance spell. \n\n• An eyeball bobs in this yellowish liquid but vanishes when the potion is opened."
  },
  "Potion of Vitality": {
    "price": "960 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. \n\nFor the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. \n\n• The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat."
  },
  "Potion of Invulnerability": {
    "price": "3,840 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "For 1 minute after you drink this potion, you have resistance to all damage. \n\n• The potion's syrupy liquid looks like liquefied iron."
  },
  "Oil of Etherealness": {
    "price": "1,920 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. \n\nThe oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). \n\nApplying the oil takes 10 minutes. The affected creature then gains the effect of the etherealness spell for 1 hour."
  },
  "Oil of Sharpness": {
    "price": "3,200 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. \n\nApplying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls."
  },
  "Oil of Slipperiness": {
    "price": "480 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. \n\nThe oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). \n\nApplying the oil takes 10 minutes. The affected creature then gains the effect of a freedom of movement spell for 8 hours.\n\nAlternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the grease spell in that area for 8 hours."
  },
  "Potion of Longevity": {
    "price": "9,000 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "When you drink this potion, your physical age is reduced by 1d6 + 6 years, \n(If you are under 13 years of age this potion has no effect)\n\nEach time you subsequently drink a potion of longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years. \n\n• Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened."
  },
  "Potion of Hill Giant Strength": {
    "price": "400 gp",
    "rarity": "Uncommon",
    "group": "Potion",
    "description": "When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n\n• This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant."
  },
  "Potion of Frost Giant Strength": {
    "price": "750 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n\n• This potion's transparent liquid has floating in it a sliver of fingernail from a frost giant."
  },
  "Potion of Fire Giant Strength": {
    "price": "1,300 gp",
    "rarity": "Rare",
    "group": "Potion",
    "description": "When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n\n• This potion's transparent liquid has floating in it a sliver of fingernail from a fire giant."
  },
  "Potion of Cloud Giant Strength": {
    "price": "1,990 gp",
    "rarity": "Very Rare",
    "group": "Potion",
    "description": "When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n\n• This potion's transparent liquid has floating in it a sliver of fingernail from a cloud giant."
  },
  "Potion of Storm Giant Strength": {
    "price": "3,000 gp",
    "rarity": "Legendary",
    "group": "Potion",
    "description": "When you drink this potion, your Strength score changes to 29 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n\n• This potion's transparent liquid has floating in it a sliver of fingernail from a storm giant."
  }
};