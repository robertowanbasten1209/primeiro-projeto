function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // ^ tbm pode ser feito assim:
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem
    img.setAttribute("src", "./assent/assets/avatar-light.png")
  } else {
    // se tiver sem light mode, mantar a imagem normal
    img.setAttribute("src", "./assent/assets/Avatar.png")
  }
}
