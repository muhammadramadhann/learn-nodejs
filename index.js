let stok = {
    bahan: 20,
    alatReady: true,
};

const cekStok = () => {
    console.log('Mengecek stok ...');
    setTimeout(() => {
        if (stok.bahan >= 1) {
            console.log(`Stok tersedia sebanyak ${stok.bahan}`);
            return;
        }
        console.log("Stok habis");
    }, 3000);
}

cekStok();