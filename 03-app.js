function simulateDraw() {
    const draw = [];
    while (draw.length < 5) {
        let num = Math.floor(Math.random() * 49) + 1;
        if (!draw.includes(num)) draw.push(num);
    }
    let chance = Math.floor(Math.random() * 10) + 1;
    document.getElementById('result').innerText = 'Tirage : ' + draw.join(', ') + ' + Chance : ' + chance;
}
