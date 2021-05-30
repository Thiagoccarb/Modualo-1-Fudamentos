function checkEnd (word,wordEnd){
  a=word.split('');
  b=wordEnd.split('');
  check = true;
  for (i=0; i<b.length; i+=1) {
      if (a[a.length - b.length + i] != b[i]){
          check = false;
        }
    }
  return check;
}     


console.log(checkEnd ('thiago', 'go'));