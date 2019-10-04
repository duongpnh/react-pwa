if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js', { scope: '/' })
      .then(reg => {
        const data = {
          type: 'CACHE_URLS',
          payload: [
            location.href,
            ...performance.getEntriesByType('resource').map(r => r.name)
          ]
        };
        reg.active.postMessage(data);
      })
      .catch(err => console.log(`Error: ${err}`));
    
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt event fired');
      e.preventDefault();
      e.prompt();
      e.userChoice.then(choice => {
          if (choice.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
          } else {
              console.log('User dismissed the A2HS prompt');
          }
      })
    });
  })
}