
//Uptime Robot 24/7 Host
//*************************************************************
const http = require('http');
const express = require('express');
const app = express();
const content = `<head>
<title>Redirecting...</title>
<font size="4" style="font-family:arial;">
Redirecting to Support page...
<br />
<a href="https://yairbot-suppirt.glitch.me/">Click here</a>, if nothing happens.
<br />
<br />
Powered by: Glitch.com
</font>
  <meta http-equiv='refresh' content='0; URL=https://yairbot-support.glitch.me'>
</head>`;

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

app.get('/', (request, response) => {
return response.send(content)
});
//*************************************************************
