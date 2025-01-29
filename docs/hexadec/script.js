// Referencia a los elementos de entrada
const hexInput = document.getElementById("hexInput");
const decInput = document.getElementById("decInput");

// Evento para manejar cambios en el campo hexadecimal
hexInput.addEventListener("input", () => {
    const hexValue = hexInput.value.trim();
    if (/^[0-9a-fA-F]*$/.test(hexValue)) { // Verifica que sea válido
        decInput.value = hexValue ? parseInt(hexValue, 16) : "";
    } else {
        decInput.value = "Invalid Hex";
    }
});

// Evento para manejar cambios en el campo decimal
decInput.addEventListener("input", () => {
    const decValue = decInput.value.trim();
    if (/^\d*$/.test(decValue)) { // Verifica que sea válido
        hexInput.value = decValue ? parseInt(decValue, 10).toString(16).toUpperCase() : "";
    } else {
        hexInput.value = "Invalid Dec";
    }
});
