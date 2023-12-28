/* 

Script: Auto Heal
Author: CHEROKI
Server: Ultima Alianza
Current Version: 0.1
Description: El script se encarga de curar al personaje cuando este se encuentra herido

*/

// Configuracion
const dirtyBandages = 0xE20;
const waterContainer = 0x1008;

const version = 0.1

client.sysMsg('Auto Heal by CHEROKI', 33)
client.sysMsg(`Version ${version}`, 66)


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
  if (dirtyBandages && dirtyBandages.amount > 10) {
    player.useType(dirtyBandages.graphic, undefined, player.backpack)
    target.wait()
    target.entity(waterContainer)
  }
}

while (true) {
  healPlayer()
  clearBandages()
  sleep(100)
}

/* 
CHANGELOG
---------
2023-12-28
Version 0.1

- Primera version del script
- Cura al personaje cuando este se encuentra herido y avisa de la vida que tiene tras curarse
---------

*/