module.exports = (p,r,n)=>{
    var b = r/100/12;
    var c = Math.pow((1+b),n);
    var d = c-1;
    var e = p*b*c;
    var ans = e/d;
    return ans;
}
// module.exports = emi;