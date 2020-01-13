function digital_root(n) {
    return (n - 1) % 9 + 1;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));