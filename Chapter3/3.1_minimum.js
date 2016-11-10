function min(n1, n2){
    return n1 > n2 ? n2 : n1;
}

// According to <<EJS>>'s hint,
// solution can also be like:
function min(n1, n2){
    if(n1 < n2)
        return n1;
    else
        return n2;
}