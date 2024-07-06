/* 

Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.1
Description: 

*/

// Codigo
const runeTypes = [0x1f14, 0x1f15, 0x1f16, 0x1f17];

function useRune() {
  let runeFound = null;

  for (let i = 0; i < runeTypes.length && runeFound === null; i++) {
    const rune = client.findType(runeTypes[i]);
    if (rune) {
      runeFound = rune;
      break;
    }
  }

  if (runeFound) {
    player.cast(Spells.Recall);
    target.wait();
    target.entity(runeFound);
  } else {
    client.sysMsg("No hay runa de escape");
  }
}

useRune();

//////////////////////////////////////////////

/* 

CHANGELOG
---------
2024/07/06
Version 0.1

- Primera version del script
- 
---------

*/

//////////////////////////////////////////////

/*

TODO
----
- 

*/

//////////////////////////////////////////////

/*

TO FIX
------
- 

*/

//////////////////////////////////////////////
