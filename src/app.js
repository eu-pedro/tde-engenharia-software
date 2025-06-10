export function appContainer() {
  navigator.vibrate(9000)

  const app = document.querySelector('#app')
  app.innerHTML = `
    <div>
      <h1>TDE de Engenharia</h1>
      <p>Feito por: </p>
      <span>Pedro Henrique,</span>
      <span>Carlos Geovane,</span>
      <span>Luis Gustavo,</span>
      <span>Gian Carlos,</span>
      <span> e </span>
      <span>Adrysson Rhuan</span>
     
    </div>
  `
}