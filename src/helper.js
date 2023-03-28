import axios from 'axios';
async function regSw () {
  if ('serviceWorker' in navigator) {
    let url = "Client/public/sw.js";
    const reg = await navigator.serviceWorker.register (url, {scope: '/'});
    console.log ('service config is', {reg});
    return reg;
  }
  throw Error ('serviceworker not supported');
}