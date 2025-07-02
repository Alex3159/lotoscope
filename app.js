
let frequency = Array(50).fill(0);
let lastDrawIndex = {};

function loadCSV() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (!file) return alert("Veuillez sélectionner un fichier CSV.");

  const reader = new FileReader();
  reader.onload = function(e) {
    const lines = e.target.result.split('\n');
    frequency = Array(50).fill(0);
    lastDrawIndex = {};
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(';');
      if (parts.length >= 7) {
        for (let j = 1; j <= 5; j++) {
          const num = parseInt(parts[j]);
          if (!isNaN(num)) {
            frequency[num]++;
            if (!(num in lastDrawIndex)) lastDrawIndex[num] = lines.length - i;
          }
        }
      }
    }
    alert("CSV chargé avec succès !");
  };
  reader.readAsText(file);
}

function simulateDraw() {
  const draw = [];
  while (draw.length < 5) {
    let num = Math.floor(Math.random() * 49) + 1;
    if (!draw.includes(num)) draw.push(num);
  }
  let chance = Math.floor(Math.random() * 10) + 1;
  document.getElementById('result').innerText = 'Tirage simulé : ' + draw.join(', ') + ' + Chance : ' + chance;
}

function showMostFrequent() {
  const list = [];
  for (let i = 1; i <= 49; i++) list.push({ num: i, count: frequency[i] });
  list.sort((a, b) => b.count - a.count);
  let txt = "Numéros les plus fréquents :\n";
  list.slice(0, 5).forEach(n => {
    txt += `Numéro ${n.num} → ${n.count} fois\n`;
  });
  document.getElementById('result').innerText = txt;
}

function showLeastFrequent() {
  const list = [];
  for (let i = 1; i <= 49; i++) list.push({ num: i, count: frequency[i] });
  list.sort((a, b) => a.count - b.count);
  let txt = "Numéros les moins sortis :\n";
  list.slice(0, 5).forEach(n => {
    txt += `Numéro ${n.num} → ${n.count} fois\n`;
  });
  document.getElementById('result').innerText = txt;
}

function showFrequencies() {
  let txt = "Fréquence de chaque numéro :\n";
  for (let i = 1; i <= 49; i++) {
    txt += `Numéro ${i} → ${frequency[i]} fois\n`;
  }
  document.getElementById('result').innerText = txt;
}

function generateSmartGrid() {
  const scored = [];
  for (let i = 1; i <= 49; i++) {
    const freq = frequency[i];
    const delay = lastDrawIndex[i] || 0;
    const score = freq * 1.5 + delay * 1.2 + Math.random();
    scored.push({ num: i, score });
  }
  scored.sort((a, b) => b.score - a.score);
  const proposal = scored.slice(0, 5).map(n => n.num);
  document.getElementById('result').innerText =
    "Grille intelligente proposée :\n" + proposal.join(' - ');
}
