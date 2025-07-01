const frequency = Array(50).fill(0);
const sampleDraws = [
    [5, 12, 23, 34, 45],
    [7, 19, 23, 29, 33],
    [5, 8, 23, 35, 44],
    [2, 11, 23, 38, 46],
    [7, 14, 20, 23, 48],
    [1, 12, 20, 23, 47]
];

// Calculer les fréquences
sampleDraws.forEach(draw => {
    draw.forEach(num => {
        frequency[num]++;
    });
});

function simulateDraw() {
    const draw = [];
    while (draw.length < 5) {
        let num = Math.floor(Math.random() * 49) + 1;
        if (!draw.includes(num)) draw.push(num);
    }
    let chance = Math.floor(Math.random() * 10) + 1;
    document.getElementById('result').innerText = 'Tirage : ' + draw.join(', ') + ' + Chance : ' + chance;
}

function showMostFrequent() {
    let freqList = [];
    for (let i = 1; i <= 49; i++) {
        freqList.push({num: i, count: frequency[i]});
    }
    freqList.sort((a, b) => b.count - a.count);
    let result = 'Numéros les plus fréquents:\n';
    freqList.slice(0, 5).forEach(f => {
        result += `Numéro ${f.num} → ${f.count} fois\n`;
    });
    document.getElementById('result').innerText = result;
}

function showLeastFrequent() {
    let freqList = [];
    for (let i = 1; i <= 49; i++) {
        freqList.push({num: i, count: frequency[i]});
    }
    freqList.sort((a, b) => a.count - b.count);
    let result = 'Numéros les moins sortis:\n';
    freqList.slice(0, 5).forEach(f => {
        result += `Numéro ${f.num} → ${f.count} fois\n`;
    });
    document.getElementById('result').innerText = result;
}

function showFrequencies() {
    let result = 'Fréquence de chaque numéro:\n';
    for (let i = 1; i <= 49; i++) {
        result += `Numéro ${i} → ${frequency[i]} fois\n`;
    }
    document.getElementById('result').innerText = result;
}
