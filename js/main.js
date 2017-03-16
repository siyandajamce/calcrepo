const typingDislaybox= document.getElementById('typing-display');
const result=document.getElementById('result-display-box');



function buttonOnClick(value){
  if (value=='clear') {
    typingDislaybox.innerHTML='';
    value.innerHTML='';
    return;

  }
  if (value!=='=') {


typingDislaybox.innerHTML+=value;
}else{

  const exp=typingDislaybox.innerHTML;

  const res=eval(exp);

  result.innerHTML=res;
}
}
