keyUpPlayMusic = (e) => {
  console.log(e.keyCode);
  const code = e.keyCode
  let keyId = ''
  let content = ''
  switch(code){
    case 81:
      keyId = 'Q';
      content = 'clap';
      break;
    case 87:
      keyId = 'W';
      content = 'clap';
      break;
    case 69:
      keyId = 'E';
      content = 'clap';
      break;
    case 65:
      keyId = 'A';
      content = 'clap';
      break;
    case 83:
      keyId = 'S';
      content = 'clap';
      break;
    case 68:
      keyId = 'D';
      content = 'clap';
      break;
    case 90:
      keyId = 'Z';
      content = 'clap';
      break;
    case 88:
      keyId = 'X';
      content = 'clap';
      break;
    case 67:
      keyId = 'C';
      content = 'clap';
      break;
    default:
      console.log(keyId);
  }
  this.playMusic(keyId,content)
}