# Instavogue Firebase Setup

Configurazione iniziale di Firebase per l'applicazione Instavogue che genera racconti visivi editoriali per Instagram.

## Uso
1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Importa ed inizializza Firebase nella tua app web:
   ```javascript
   import { app, analyticsPromise } from "./src/firebase.js";

   // opzionale: accedi ad Analytics solo se supportato dal browser
   analyticsPromise.then((analytics) => {
     if (analytics) {
       console.log("Firebase Analytics attivato");
     }
   });
   ```

La configurazione utilizza il formato consigliato da Firebase JS SDK (v7.20.0 e successivi) e include l'ID di misurazione per Google Analytics.
