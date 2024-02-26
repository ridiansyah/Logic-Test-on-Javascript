const input = "SeLamAT PAGi semua halOo";

function FormatJudul(input) {
  let varReturn = "";
  if (input) {
    varReturn = input
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  }
  return "Format Judul: " + varReturn;
}
function FormatBiasa(input) {
  let varReturn = "";
  if (input) {
    varReturn = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }
  return "Format Biasa: " + varReturn;
}
console.log(FormatJudul(input));
console.log(FormatBiasa(input));
