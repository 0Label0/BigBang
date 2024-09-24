import pc from 'picocolors';
import app from './app';
import './database'

app.listen(app.get('port'), ()=> {
  console.log(pc.cyan('http://localhost:1234'));
  
})