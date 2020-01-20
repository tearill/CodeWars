let wave = w =>[...w].map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1)).filter(a => a != w)

console.log(wave('hello'));