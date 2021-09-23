module.exports.si = (p, r, n)=>{
    var a = p*r*n;
    var b = a/100;
    return b;
}

module.exports.ci=(p, r, t)=>{
    var a = r/1200;
    var b = 1+a;
    var c = 12*t;
    var e = Math.pow(b, c);
    var f = e*p;
    return f;
}