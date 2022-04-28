function call(a)
{
    var text=document.getElementById('display').value;
    if(text !=''){
    if(text=='0'){
    document.getElementById('display').value='';  
    }
    document.getElementById('display').value=document.getElementById('display').value+a;
    setTimeout(function () {
        document.getElementById('display').value="";
    }, 100000);
}}
function clear1()
{
    var val=document.getElementById('display').value;
    if(val.length==1)
    {
        val=document.getElementById('display').value='0';
    }
    else {
    document.getElementById('display').value=val.substr(0,val.length-1);
    // setTimeout(function () {
    //     document.getElementById('display').value="";
    // }, 10000);
}}
function enter()
{
    var expression=document.getElementById('display').value;
    var result=eval(expression);
    document.getElementById('display').value=document.getElementById('display').value+'='+result;
}
function ac()
{
    var text=document.getElementById('display').value='0'; 
}
