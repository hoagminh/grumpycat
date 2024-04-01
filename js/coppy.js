const btnCopy = document.querySelector(".copy");
const address = document.getElementById("addressWallet").innerText;

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(address);
  alert("Copied!");
});
