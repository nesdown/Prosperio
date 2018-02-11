function openNav(navmenu) {
  document.getElementById(navmenu).style.width = "30%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  if (navmenu == "settingsSidenav") {
    document.getElementById("main").style.marginLeft = "30%";
  } else if (navmenu == "statsSidenav") {
    document.getElementById("main").style.marginRight = "30%";
  }
}

function closeNav(navmenu) {
  document.getElementById(navmenu).style.width = "0";
  document.body.style.backgroundColor = "white";
  if (navmenu == "settingsSidenav") {
    document.getElementById("main").style.marginLeft = "0";
  } else if (navmenu == "statsSidenav") {
    document.getElementById("main").style.marginRight = "0";
  }
}