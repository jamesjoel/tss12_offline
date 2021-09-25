function EMI(p,r,n)
 {
    var a = r/100/12;
    var b = Math.pow((1+a),n);
    var c = b-1;
    var d = p*a*b;
    var ans = d/c;
    console.log(ans)
}
EMI(500000,8,60);
EMI(1000000,8,60);