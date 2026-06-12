let megaList = { ...adventuringGear, ...armor, ...magic, ...poisons, ...potions, ...toolsAndKits, ...weapons };

/*
// build maps of normalized key -> original key
const map1 = new Map(
  Object.keys(megaList).map(k => [k.toLowerCase(), k])
);

const map2 = new Map(
  Object.keys(items).map(k => [k.toLowerCase(), k])
);

// Keys in obj1 but not obj2 (case-insensitive)
const onlyInObj1 = [...map1.keys()]
  .filter(k => !map2.has(k))
  .map(k => map1.get(k));

// Keys in obj2 but not obj1 (case-insensitive)
const onlyInObj2 = [...map2.keys()]
  .filter(k => !map1.has(k))
  .map(k => map2.get(k));


// still a few unaccoutned for
console.log("Keys in megaList but not items:", onlyInObj1);
console.log("Keys in items but not megaList:", onlyInObj2);
*/

/*
to do-
delete duplicats
merge lists

all data except for name, weight, and group displayed on hover
get attunement values
change odds of getting certain items

clean up the scaling feature?

fix armor price
return price.slice(0, -6) + '$' + price.slice(-6, -3);
*/

let customItems = {
    "Custom Flag": {
        price: '20 gp',
        description: 'Publiiiii will make you a flag with any design you want. Hang it up out front of your house!',
        group: 'Decor',
    },
    "Custom Light": {
        price: '10 gp',
        description: 'Publiiii will make you a light with any pattern or effect you want. Give your living room a whole new vibe!',
        group: 'Decor',
    },
    "Custom Tablecloth": {
        price: '10 gp',
        description: 'Publiiiiii will make you a tablecloth of any shape and size with any design you want. Perfect for your desk, table, TV stand, or anything like that!',
        group: 'Decor',
    }
};

let newItems = {
    "Wacky Inflatable Arms Man": {
        price: '15 gp',
        description: 'Advertise your business right on your front lawn! You can even put decals on him if you have any.',
        group: 'Decor',
    },
    "Nerf Gun Shelf": {
        price: '15 gp',
        description: 'A bright orange and blue shelf perfect for displaying your Nerf arsenal!',
        group: 'Decor',
    },
};

megaList = { ...megaList, ...newItems, ...customItems };

// convert price to dollars
function convertPrice(item) {
    let price = megaList[item].price;
    const rates = {
        gp: 1,
        sp: 0.1,
        cp: 0.01,
    };
    price = price.replace(',', '');
    const [amount, type] = price.split(' ');
    let dollars = parseFloat(amount) * rates[type];
    if (dollars > 500) {
        delete megaList[item];
        return;
    }
    //const formatted = dollars % 1 === 0 ? dollars.toFixed(0) : dollars.toFixed(2);
    //megaList[item].price = `$${formatted}`;
    dollars = dollars.toLocaleString();
    if (dollars.charAt(dollars.length - 2) === '.') {
        dollars += '0';
    }
    megaList[item].price = `$${dollars}`;
}

// filter out items with descriptions too long or prices too high
function filterList() {
    for (let item in megaList) {
        if (megaList[item].description && megaList[item].description.length > 1000) {
            delete megaList[item];
        } else if (megaList[item].price.charAt(0) === 'Y') {
            //delete megaList[item];
        } else if (megaList[item].price.charAt(0) === 'A') {
            delete megaList[item];
        } else {
            convertPrice(item);
        }
    }
}

// swap item name if in Zack's list
function swapName(input) {
    const ZackItems = {
        "Onyx Dog": "Perry The Puppy Statue",
        "Obsidian Steed": "Roy The Puppy Statue",
        "Instrument of the Bards - Doss Lute": "Linkin Park Squier Guitar",
        "Arrows (20)": "Nerf Darts (20)",
        "Blowgun Needle (50)": "Nerf Darts (20)",
        "Crossbow Bolts (20)": "Nerf Darts (20)",
        "Club": "Frying Pan",
        "Dagger": "Nerf Swift Justice",
        "Greatclub": "Squishmallow",
        "Handaxe": "Nerf Vigilance",
        "Light hammer": "Nerf Marvel Thor's Hammer Strike",
        "Mace": "Nerf Battlemaster Mace",
        "Sickle": "Nerf Fortnite R-HT",
        "Battleaxe": "Nerf Warlock",
        "Greataxe": "Nerf D&D Holga's Greataxe",
        "Lance": "Egg Pawn's Lance",
        "Longsword": "Nerf Marauder",
        "Maul": "Egg Hammer's Hammer",
        "Rapier": "Nerf Vendetta",
        "Shortsword": "Nerf Zombie Strike Machete",
        "Trident": "Nerf Minecraft Trident",
        "Crossbow, light": "Nerf N-Strike Nite Finder",
        "Dart": "Nerf Dart of Throwing",
        "Shortbow": "Nerf Minecraft Bow",
        "Blowgun": "Nerf Jolt",
        "Crossbow, hand": "Nerf RoughCut",
        "Crossbow, heavy": "Nerf Deploy CS-6",
        "Longbow": "Nerf Stratobow",
        "Dulcimer": "Acoustic Guitar",
        "Lute": "Electric Guitar",
        "Shawm": "Saxophone",
        "Potion of Supreme Healing": "Potion of Epic Healing",
        "Potion of Heroism": "Potion of Epicness"
    };
    return ZackItems[input] || input;
}

function createDivs(count) {
    filterList();

    let scale = window.innerWidth;
    if (window.innerWidth / window.innerHeight < 16 / 9) {
        scale = window.innerHeight * (16 / 9);
    }

    for (let i = 0; i < count; i++) {

        const keys = Object.keys(megaList);
        if (keys.length === 0) {
            return;
        }
        let item;
        if (i === 0) {
            const customKeys = Object.keys(customItems);
            item = customKeys[Math.floor(Math.random() * customKeys.length)];;
        } else {
            item = keys[Math.floor(Math.random() * keys.length)];
        }

        const div = document.createElement('div');
        //window.innerWidth
        /*
        div.style.left = '8%';
        div.style.top = `${(19.6 + i * 5.34)}%`;
        div.style.width = '36.1%';
        div.style.height = `6%`;
        */
        div.style.left = 0.08 * scale + 'px';
        div.style.top = (0.196 + i * 0.0534) * scale * (9 / 16) + 'px';
        div.style.width = 0.361 * scale + 'px';
        div.style.height = 0.06 * scale * (9 / 16) + 'px';

        div.addEventListener('mouseover', () => {
            document.getElementById('hoverDiv').style.display = 'block';

            //go through each object property and add to hoverP with line breaks
            let innerHTML = '';
            if (megaList[item].description) {
                innerHTML += `<strong>${megaList[item].description}</strong><br><br>`;
            }
            for (let key in megaList[item]) {
                if (key === 'price' || key === 'weight' || key === 'description') {
                    continue;
                }
                if (megaList[item][key] === '') {
                    continue;
                }
                innerHTML += `${key}: ${megaList[item][key]}<br>`;
            }
            document.getElementById('hoverP').innerHTML = innerHTML;
        });
        div.addEventListener('mouseout', () => {
            document.getElementById('hoverDiv').style.display = 'none';
            document.getElementById('hoverP').innerHTML = '';
        });

        const p = document.createElement('p');
        p.textContent = swapName(item);
        div.appendChild(p);

        const p2 = document.createElement('p');
        p2.textContent = megaList[item].price;
        div.appendChild(p2);

        document.body.appendChild(div);
        //delete megaList[item];
    }
}

createDivs(11);
