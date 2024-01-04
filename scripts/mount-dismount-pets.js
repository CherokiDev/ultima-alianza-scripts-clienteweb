/* 

Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.1
Description: El script se encarga de montar y desmontar las monturas que se le indiquen en la configuracion.

*/

// Configuracion
let pets = [0x1619E12, 0x1584142, 0x111111]; // agregar aqui el serial de las monturas que queramos usar
// ejemplo: let pets = [0x0000000, 0x1111111, 0x2222222];

// Informacion
const scriptName = 'Mount-Dismount-Pets'
const version = 0.1

// client.sysMsg(`${scriptName} by CHEROKI`, 33)
// client.sysMsg(`Version ${version}`, 66)

// Codigo
let foundObject;

for (let i = 0; i < pets.length; i++) {
  foundObject = client.findObject(pets[i]);
  if (foundObject) {
    player.use(foundObject);
    break;
  }
}

if (!foundObject) {
  player.use(player.serial);
}

//////////////////////////////////////////////

/* 

CHANGELOG
---------
2024-01-04
Version 0.1

- Primera version del script
- Monta y desmonta las monturas que se le indiquen en la configuracion
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