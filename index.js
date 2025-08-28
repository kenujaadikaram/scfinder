function main(){
const txt=document.getElementById("area").value;
const txtf=document.getElementById("area2").value;

if(txt.indexOf(txtf)>1){
    alert('yup');
}
 let nt= prompt('range')*-1;
 let tw =1;
 let text = txt;
const array = text.split("");
let ans;
while (nt<txt.indexOf(txtf)) {
   
    console.log(array[(txt.indexOf(txtf)+tw)-2]);
    console.log(tw-1);
    tw=tw+1;
    nt++;
    ans= ans+array[txt.indexOf(txtf)+tw];
    document.getElementById("area").value =ans.replace("undefined", "");
}


}
