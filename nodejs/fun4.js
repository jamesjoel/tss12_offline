// function simple_int(p, r, n )
// {
//     var x = p*r;
//     var y = r+1;
//     var z = x*y*n;
//     var a = n-1;
//     var b = a*y;
//     var c = z/b;
//     console.log(c);

// }

function emi(p, r, n)
{
    var m = r/100/12;
    var a = Math.pow(m, n);
    var b = a-1;

    var x = p*r*a;

    var ans = x/b;

    console.log(ans);
}

emi(100000, 10, 12);
// simple_int(50000, 7.5, 5);