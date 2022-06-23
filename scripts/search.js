function toggleEngine() {

  var gSearch = document.getElementById("gSearch");
  var bSearch = document.getElementById("bSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);

  if (logo.indexOf("brave.png") != -1) {
    document.getElementById("engineLogo").src = "icons/google.png";
    gSearch.style.display = "block";
    bSearch.style.display = "none";
  } 
  
  else {
    document.getElementById("engineLogo").src = "icons/brave.png";
    bSearch.style.display = "block";
    gSearch.style.display = "none";
  }

  document.getElementById("textField").reset();
}
