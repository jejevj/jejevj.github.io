var home = document.getElementById("home-menu");
var gear = document.getElementById("gear-menu");
var gear2 = document.getElementById("gear2");
var deskripsi = document.getElementById("deskripsi");
var lang = document.getElementById("lang");
var web = document.getElementById("penawaran-web");
var hubungi = document.getElementById("hubungi");
var latest_vid = document.getElementById("latest-vid");
var latest_proj = document.getElementById("latest-proj");
var cekWeb = document.getElementById("cekWeb");
var cekGit = document.getElementById("cekGit");
var disini = document.getElementById("here");
var desk_gear = document.getElementById("deskripsi_gear");
var buy = document.getElementById("buy");
var switched = false;

function gantiBahasa() {
  // alert(lang.innerHTML);
  if (lang.innerHTML == "Switch Language") {
    home.innerHTML = "Beranda";
    lang.innerHTML = "Ubah Bahasa";
    gear.innerHTML = "Alat Tempur";
    deskripsi.innerHTML = "Programmer &#128187; berusia 20 tahun tinggal di Jakarta, Indonesia&#128205; membuat website atas nama  &#128184; Pernah menjadi pembicara dibeberapa tempat&#128483;&#65039;.";
    web.innerHTML = "Ingin membuat aplikasi berbasis website?";
    hubungi.innerHTML = " Hubungi Saya!";
    latest_vid.innerHTML = "Video Terakhir";
    latest_proj.innerHTML = "Proyek Terakhir";
    cekWeb.innerHTML = "Cek websitenya ";
    disini.innerHTML = "disini!";
    cekGit.innerHTML = "atau cek akun github saya.";
    desk_gear.innerHTML = "Alat yang aku gunain untuk buat website. Ohiya, juga ada link affiliasi jika kamu tertarik untuk beli juga. Beberapa tools ada yang tidak saya miliki, namun bisa saya rekomendasikan.";
  } else {
    home.innerHTML = "Home";
    lang.innerHTML = "Switch Language";
    gear.innerHTML = "Gear";
    deskripsi.innerHTML = "20 year old programmer &#128187; based in Jakarta, Indonesia&#128205; making website under the name of &#128184; Was a public speaker at somewhere&#128483;&#65039;.";
    web.innerHTML = "Want to create a Web Based App?";
    hubungi.innerHTML = " Contact Me!";
    latest_vid.innerHTML = "Latest Video";
    latest_proj.innerHTML = "Latest Project";
    cekWeb.innerHTML = "Check the website ";
    disini.innerHTML = "here!";
    cekGit.innerHTML = "or check my github account.";
    desk_gear.innerHTML = "Tools or gear that I used in making website. Also affiliate link if you interested to brought! Some tools aren't mine,, but i can give you recommendation.";
  }
  switched = true;
}

function gantiBahasaGear() {
  // alert(lang.innerHTML);
  if (lang.innerHTML == "Switch Language") {
    home.innerHTML = "Beranda";
    lang.innerHTML = "Ubah Bahasa";
    gear.innerHTML = "Alat Tempur";
    desk_gear.innerHTML = "Alat yang aku gunain untuk buat website. Ohiya, juga ada link afiliasi jika kamu tertarik untuk beli juga. Beberapa tools ada yang tidak saya miliki, namun bisa saya rekomendasikan.";
    gear2.innerHTML = gear.innerHTML;
    buy.innerHTML = "Beli";
} else {
    home.innerHTML = "Home";
    lang.innerHTML = "Switch Language";
    gear.innerHTML = "Gear";
    desk_gear.innerHTML = "Tools or gear that I used in making website. Also affiliate link if you interested to brought! Some tools aren't mine,, but i can give you recommendation.";
    gear2.innerHTML = gear.innerHTML;
    buy.innerHTML = "Buy";
}
switched = true;
}
