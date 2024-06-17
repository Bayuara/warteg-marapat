// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//slider
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//kalau pembeli klik beli di menu makanan/minuman
function FuncBeli() {
  alert("Pesanan Anda Sudah Kami Terima");
}

//kalau pembeli klik reservasi
function FuncReservasi() {
  alert(
    "Reservasi anda sudah kami terima. Silakan datang sesuai dengan waktu yang ditentukan!"
  );
}

//kalau pembeli klik pesan pad form Pesan di contact.html
function myFunction() {
  alert("Pesan Anda Telah Kami Terima. Terima Kasih Atas Feedback Anda");
}

//search
function search() {
  let filter = document.getElementById("find").value.toUpperCase();

  let item = document.querySelectorAll(".menu-card");

  let l = document.getElementsByClassName("menu-card-title");

  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByClassName("menu-card-title")[0];

    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
