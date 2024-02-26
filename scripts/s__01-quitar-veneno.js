/* 

Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.1
Description: 

*/

// Configuracion
// No requiere de ninguna configuracion, tan solo ejecutar el script (boton de play)

// Informacion
const scriptName = "Quitar veneno";
const version = 0.1;

client.sysMsg(`${scriptName} by CHEROKI`, 40);
client.sysMsg(`Version ${version}`, 66);

// Codigo

function checkPoison() {
  if (player.isPoisoned) {
    player.cast(Spells.Cure);
    target.wait();
    target.self();
    sleep(2000);
  }
}

while (true) {
  checkPoison();
}

//////////////////////////////////////////////

/* 

CHANGELOG
---------
2024-02-26
Version 0.1

- Primera version del script
- Quita el veneno del personaje automaticamente
---------

*/

//////////////////////////////////////////////

/*

TODO
----
- Comprobar si se buguea cuando el pj es paralizado

*/

//////////////////////////////////////////////

/*

TO FIX
------
- 

*/

//////////////////////////////////////////////
