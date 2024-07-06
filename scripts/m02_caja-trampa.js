/* 

Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.1
Description: 

*/

// Codigo
const cajaTrampaType = 0x9b0;

function useCajaTrampa() {
  const cajaTrampa = client.findType(cajaTrampaType, 0x21);

  if (cajaTrampa) {
    player.click(cajaTrampa);
  } else {
    client.sysMsg("No hay cajas trampa");
  }
}

useCajaTrampa();

//////////////////////////////////////////////

/* 

CHANGELOG
---------
2024-07-06
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
