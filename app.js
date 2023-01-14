

function submit(e) {
  const value = document.querySelector('input[name="rating"]:checked').value;
  const selection = document.getElementById("selection");
  selection.innerHTML =`you selected ${value}  out of 5`
let cont = document.getElementById("remove")
cont.classList.add("hidden")
let thanks = document.getElementById("thanks");
  thanks.classList.remove("hidden");
}