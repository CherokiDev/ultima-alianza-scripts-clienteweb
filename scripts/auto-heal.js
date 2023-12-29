/* 

Script: Auto Heal
Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.2.1
Description: El script se encarga de curar al personaje cuando este se encuentra herido, ademas de avisar de la vida que tiene tras curarse y limpiar las vendas sucias.

*/

// Configuracion
const dirtyBandagesType = 0xE20;
const waterContainerType = 0x1008;

// Informacion
const version = "0.2.1"

client.sysMsg('Auto Heal by CHEROKI', 33)
client.sysMsg(`Version ${version}`, 66)

// Codigo
let canApplyBandages = true;

journal.clear()

function healPlayer() {
  if (player.hits < player.maxHits && canApplyBandages) {
    player.say('.vendas')
    sleep(10)
    target.wait()
    target.self()
    journal.clear()
    if (journal.waitForText("No necesitas curarte", "System") || journal.waitForText("pero fallas", "System")) {
      canApplyBandages = true
      journal.clear()
      return
    }
    canApplyBandages = false
    journal.clear()
  }

  if (journal.waitForText("Ya puedes usar las vendas", "System") && !canApplyBandages) {
    client.headMsg(`VENDAZO, VIDA ${player.hits}`, player, 66)
    canApplyBandages = true;
  }
}

function clearBandages() {
  const dirtyBandages = client.findType(dirtyBandagesType)
  const waterContainer = client.findType(waterContainerType)
  if (dirtyBandages) {
    player.use(dirtyBandages)
    target.wait(500)
    target.entity(waterContainer)
  }
}

while (true) {
  healPlayer()
  clearBandages()
  sleep(100)
}


//////////////////////////////////////////////

/* 

CHANGELOG
---------
2023-12-28
Version 0.1

- Primera version del script
- Cura al personaje cuando este se encuentra herido y avisa de la vida que tienes tras curarse
---------

2023-12-29
Version 0.2

- Se agrega la funcion de limpiar las vendas sucias
---------

2023-12-29
Version 0.2.1

- Reducido el tiempo de espera para limpiar las vendas sucias a 500ms

*/

//////////////////////////////////////////////

/*

TODO
----
- (DONE) Agregar la funcion de limpiar las vendas sucias

*/

//////////////////////////////////////////////

/*

TO FIX
------
- Amontonar la venda que se limpia con las que ya estan limpias

*/

//////////////////////////////////////////////