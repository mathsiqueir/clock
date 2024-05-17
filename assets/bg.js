
const backgroundAtributes = `linear-gradient(75deg,blue,lightblue)`;
const background = document.getElementById('bg')
export const button = document
  .getElementById("btn")
  .addEventListener("click", changeBackground);

export function changeBackground() {
	background.style.backgroundImage = backgroundAtributes
}
