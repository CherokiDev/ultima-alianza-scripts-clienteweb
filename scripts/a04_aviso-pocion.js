/* 

Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.1
Description: 

*/

// Configuracion

// Informacion
const scriptName = "Aviso pocion";
const version = 0.1;

client.sysMsg(`${scriptName} by CHEROKI`, 40);
client.sysMsg(`Version ${version}`, 66);

// Codigo
journal.clear();

function timePotion() {
  if (journal.waitForText("Pones el frascos", "System", 1000)) {
    client.headMsg(`POCION OFF`, player, 40);
    journal.clear();
    sleep(16000);
    for (let count = 5; count > 0; count--) {
      client.headMsg(`Pocion en ${count} s`, player, 0xa5a);
      journal.clear();
      if (journal.waitForText("Ya puedes tomar", "System", 1000)) {
        client.headMsg(`POCION ON`, player, 96);
        return;
      }
    }
    for (let count = 6; count > 0; count--) {
      journal.clear();
      if (journal.waitForText("Ya puedes tomar", "System", 1000)) {
        client.headMsg(`Pocion ON`, player, 96);
        return;
      }
    }
  }
}

while (true) {
  timePotion();
}

//////////////////////////////////////////////

/* 

CHANGELOG
---------
-fecha-
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
