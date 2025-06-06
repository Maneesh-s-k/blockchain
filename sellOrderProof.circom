pragma circom 2.0.0;

template Num2Bits(n) {
    signal input in;
    signal output out[n];
    var lc1=0;

    var e2=1;
    for (var i = 0; i<n; i++) {
        out[i] <-- (in >> i) & 1;
        out[i] * (out[i] -1 ) === 0;
        lc1 += out[i] * e2;
        e2 = e2+e2;
    }

    lc1 === in;
}

template LessThan(n) {
    assert(n <= 252);
    signal input amountToSell;
    signal input totalBalance;

    signal output out;

    component n2b = Num2Bits(n+1);

    n2b.in <== amountToSell + (1<<n) - totalBalance;

    out <== 1-n2b.out[n];
}

component main{public[amountToSell]} = LessThan(250);