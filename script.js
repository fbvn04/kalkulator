// script.js

// Function to calculate permutation
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

// Function to calculate combination
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

// Function to clear input fields and results
function clearFields() {
    document.getElementById('n').value = '';
    document.getElementById('r').value = '';
    document.getElementById('permutasi').textContent = 'Permutasi: 0';
    document.getElementById('kombinasi').textContent = 'Kombinasi: 0';
}
