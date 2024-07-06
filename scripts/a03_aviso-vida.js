/* 

Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.1
Description: Cada vez que la vida del pj cambia, se muestra un mensaje en la cabeza del pj con el valor de vida actual y maxima
y el color del mensaje cambia segun si la vida sube o baja

*/

// Configuracion

// Informacion
const scriptName = "Aviso vida";
const version = 0.1;

client.sysMsg(`${scriptName} by CHEROKI`, 40);
client.sysMsg(`Version ${version}`, 66);

// Codigo
let oldHit = 0;

let COLOR_GREEN = 0x44;
let COLOR_YELLOW = 0x84e;
let COLOR_RED = 0x22;

function checkHits() {
  sleep(150);
  if (player.hits > oldHit) {
    client.headMsg(`HP ${player.hits}/${player.maxHits}`, player, COLOR_GREEN);
  } else if (player.hits < oldHit) {
    client.headMsg(`HP ${player.hits}/${player.maxHits}`, player, COLOR_RED);
  }

  oldHit = player.hits;
}

while (true) {
  checkHits();
}

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
