function emi(p, r, n)
{
    var m = r/100/12;
    var top = Math.pow((1+m), n);
    var bottom = top-1;
    
    var ans = top/bottom;
    var emi = p*m*ans;

    console.log(emi)

}

emi(5000000, 8, 240);