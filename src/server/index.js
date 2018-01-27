import WebServer from './server';

let webServer = new WebServer();

webServer.start()
  .then(() => {
    console.log(`Server started and listening to port ${webServer.port}`)
  })
  .catch(err => {
    console.error(err);
    console.error('Failed to start web server!');
  });
