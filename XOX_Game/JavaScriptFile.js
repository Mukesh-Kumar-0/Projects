var a=false;
function Clo(i)
{
    document.getElementById(i).innerText='O';
    document.getElementById(i).value="user";
    document.getElementById(i).disabled=true;
    
    F1();
    f2();
 }
function F1()
{
if(document.getElementById('b1').value=='null')
{
    document.getElementById('b1').innerText='X';
    document.getElementById('b1').value="Defined";
    document.getElementById('b1').disabled=true;
}
else if(document.getElementById('b3').value=='null')
{
    document.getElementById('b3').innerText='X';
    document.getElementById('b3').value="Defined";
    document.getElementById('b3').disabled=true;
}
else if(document.getElementById('b7').value=='null')
{
    document.getElementById('b7').innerText='X';
    document.getElementById('b7').value="Defined";
    document.getElementById('b7').disabled=true;
}
else if(document.getElementById('b4').value=='null')
{
    document.getElementById('b4').innerText='X';
    document.getElementById('b4').value="Defined";
    document.getElementById('b4').disabled=true;
}
else if(document.getElementById('b6').value=='null')
{
    document.getElementById('b6').innerText='X';
    document.getElementById('b6').value="Defined";
    document.getElementById('b6').disabled=true;
}
else if(document.getElementById('b2').value=='null')
{
    document.getElementById('b2').innerText='X';
    document.getElementById('b2').value="Defined";
    document.getElementById('b2').disabled=true;
}
else if(document.getElementById('b8').value=='null')
{
    document.getElementById('b8').innerText='X';
    document.getElementById('b8').value="Defined";
    document.getElementById('b8').disabled=true;
}
else if(document.getElementById('b9').value=='null')
{
    document.getElementById('b9').innerText='X';
    document.getElementById('b9').value="Defined";
    document.getElementById('b9').disabled=true;
}
else if(document.getElementById('b5').value=='null')
{
    document.getElementById('b5').value="Defined";
    document.getElementById('b5').disabled=true;
}
var j=1;
var s=1;
for(j=1;j<=7;j++)
{
    switch(j)
    {
        case 1:{
            if((document.getElementById('b3').value=='user'&&document.getElementById('b6').value=='user'&&document.getElementById('b9').value)=='user')
            {
                alert("USER WON THIS MATCH");
                j=j+1;
                a=true;
                location.reload()
                break;
            }
            break;
        }
        case 2:
            {
            if(document.getElementById('b1').value=='user'&&document.getElementById('b2').value=='user'&&document.getElementById('b3').value=='user')
            {
                alert("USER WON THIS MATCH");
                a=true;
                j=j+1;
                location.reload()
                break;
            }
            break;
        }
        case 3:
            {
                if(document.getElementById('b7').value=='user'&&document.getElementById('b8').value=='user'&&document.getElementById('b9').value=='user')
            {
                alert("USER WON THIS MATCH");
                a=true;
                j=j+1;
                location.reload()
                break;
            }
            break;
            }
        case 4:
            {
                if(document.getElementById('b1').value=='user'&&document.getElementById('b5').value=='user'&&document.getElementById('b9').value=='user')
            {
                alert("USER WON THIS MATCH BY");
                a=true;
                j=j+1;
                location.reload()
                break;
            }
            break;
            }
        case 5:
            {

                if(document.getElementById('b3').value=='user'&&document.getElementById('b5').value=='user'&&document.getElementById('b7').value=='user')
            {
                alert("USER WON THIS MATCH BY");
                a=true;
                j=j+1;
                location.reload()
                break;
            }
            break;
            }
        case 6:
            {
                if(document.getElementById('b4').value=='user'&&document.getElementById('b5').value=='user'&&document.getElementById('b6').value=='user')
            {
                alert("USER WON THIS MATCH BY");
                a=true;
                j=j+1;
                location.reload()
                break;
            }
            break;
            }
        case 7:
            {
                if(document.getElementById('b2').value=='user'&&document.getElementById('b5').value=='user'&&document.getElementById('b8').value=='user')
                {
                    alert("USER WON THIS MATCH BY");
                    a=true;
                    j=j+1;
                    location.reload()
                    break;
                }
                break;
            }

            
        
    }

}
for(s=1;s<=6;s++)
{
    switch(s)
    {
        case 1:{
            if((document.getElementById('b3').value=='Defined'&&document.getElementById('b6').value=='Defined'&&document.getElementById('b9').value)=='Defined')
            {
                alert("COMPUTER WON!");
                a=true;
                s=s+1;
                location.reload()
                break;
            }
            break;
        }
        case 2:
            {
            if(document.getElementById('b1').value=='Defined'&&document.getElementById('b2').value=='Defined'&&document.getElementById('b3').value=='Defined')
            {
                alert("COMPUTER WON !");
                a=true;
                s=s+1;
                location.reload()
                break;
            }
            break;
        }
        case 3:
            {
                if(document.getElementById('b7').value=='Defined'&&document.getElementById('b8').value=='Defined'&&document.getElementById('b9').value=='Defined')
            {
                alert("COMPUTER WON !");
                a=true;
                s=s+1;
                location.reload()
                break;
            }
            break;
            }
        case 4:
            {
                if(document.getElementById('b1').value=='Defined'&&document.getElementById('b5').value=='Defined'&&document.getElementById('b9').value=='Defined')
            {
                alert("COMPUTER WON !");
                a=true;
                s=s+1;
                location.reload()
                break;
            }
            break;
            }
        case 5:
            {

                if(document.getElementById('b3').value=='Defined'&&document.getElementById('b5').value=='Defined'&&document.getElementById('b7').value=='Defined')
            {
                alert("COMPUTER WON !");
                a=true;
                s=s+1;
                location.reload()
                break;
            }
            break;
            }
        case 6:
            {
                if(document.getElementById('b4').value=='Defined'&&document.getElementById('b5').value=='Defined'&&document.getElementById('b6').value=='Defined')
            {
                alert("COMPUTER WON !");
                a=true;
                s=s+1;
                location.reload()
                break;
            }
            break;
            }
        
    }
   
}
}
function f2()
{
    if(document.getElementById('b1').value!='null')
    {
        if(document.getElementById('b2').value!='null')
        {
            if(document.getElementById('b3').value!='null')
            {
                if(document.getElementById('b4').value!='null')
                {
                    if(document.getElementById('b5').value!='null')
                    {
                        if(document.getElementById('b6').value!='null')
                        {
                            if(document.getElementById('b7').value!='null')
                            {
                                if(document.getElementById('b8').value!='null')
                                {
                                    if(document.getElementById('b9').value!='null')
                                    {
                                        alert("Match Draw");
                                        location.reload()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}