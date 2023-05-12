function insert(num)
{
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
} 

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}

function calcular()
{
    var res = document.getElementById('resultado').innerHTML; 
    if(res)
    {
        document.getElementById('resultado').innerHTML = eval(res);
    }else
    {
        document.getElementById('resultado').innerHTML = '...'
        
    }
}