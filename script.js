function hitungPermutasi() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);

    if (n < r) {
        alert('Nilai n tidak boleh lebih kecil dari nilai r!');
        return;
    }

    let permutasi = 1;
    for (let i = 1; i <= r; i++) {
        permutasi *= n - i + 1;
    }

    document.getElementById('permutasi').textContent = `Permutasi: ${permutasi}`;
}

function hitungKombinasi() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);

    if (n < r) {
        alert('Nilai n tidak boleh lebih kecil dari nilai r!');
        return;
    }

    let kombinasi = 1;
    for (let i = 1; i <= r; i++) {
        kombinasi *= (n - i + 1) / i;
    }

    document.getElementById('kombinasi').textContent = `Kombinasi: ${kombinasi}`;
}
