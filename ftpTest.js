let sftp = new Client();
 
sftp.connect({
  host: '127.0.0.1',
  port: '8080',
  username: 'username',
  password: 'saraza'
}).then(() => {
  return sftp.list('/pathname');
}).then(data => {
  console.log(data, 'the data info');
}).catch(err => {
  console.log(err, 'catch error');
});
