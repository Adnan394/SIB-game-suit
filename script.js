let user = document.querySelector(".container");
let score = document.querySelector(".point");
let printHasil = document.querySelector(".hasil");
let printKlik = document.querySelector(".klik");
let print = document.querySelector(".conRules");
let pilianUser = "";
let pilianCom = "";
let getinterval;
let hasil;
let point = 0;
let klik = 0;
let ucapan = "";

user.addEventListener("click", (e) => {
  if (e.target.id == "batu") {
    pilianUser = "batu";
    rules();
    klik++;
  } else if (e.target.id == "gunting") {
    pilianUser = "gunting";
    rules();
    klik++;
  } else if (e.target.id == "kertas") {
    pilianUser = "kertas";
    rules();
    klik++;
  } else {
    pilianUser = undefined;
    alert("TOLONG KLIK IKON YANG TERSEDIA!");
  }
  printKlik.innerText = klik;
  if (klik >= 20) {
    if (point < 1) {
      ucapan = "ASTAGAA BUTUH TUTOR DEK?";
    } else if (point <= 5) {
      ucapan = "LUMAYAN LAHH, BELAJAR LAGI DEK!";
    } else if (point > 5) {
      ucapan = "MANTAPP, SUNGKEM SAMA LORD!";
    }
    print.innerHTML = `
    <div>
      <h2 style="color : #40C9C1">HASIL REKAP</h2>
      <p style="font-weight:500;">SCORE : ${point}</p>
      <p style="font-weight:300;">${ucapan}</p>
    </div>    
      `;
    hasil = "";
    klik = 0;
    cetakScore();
    point = 0;
  }
});

function getCom() {
  getinterval = Math.random();
  if (getinterval <= 0.33) {
    pilianCom = "batu";
  } else if (getinterval <= 0.66) {
    pilianCom = "gunting";
  } else if (getinterval <= 0.99) {
    pilianCom = "kertas";
  }
  return pilianCom;
}

function rules() {
  getCom();
  if (pilianUser == "batu" && pilianCom == "gunting") {
    hasil = "MENANG";
  } else if (pilianUser == "batu" && pilianCom == "kertas") {
    hasil = "KALAH";
  } else if (pilianUser == "gunting" && pilianCom == "kertas") {
    hasil = "MENANG";
  } else if (pilianUser == "gunting" && pilianCom == "batu") {
    hasil = "KALAH";
  } else if (pilianUser == "kertas" && pilianCom == "batu") {
    hasil = "MENANG";
  } else if (pilianUser == "kertas" && pilianCom == "gunting") {
    hasil = "KALAH";
  } else if (pilianUser == pilianCom) {
    hasil = "SERI";
  }
  cetakScore();
  cetakHasil();
  pilianUser = "";
  pilianCom = "";
}

function cetakScore() {
  if (hasil == "MENANG") {
    point++;
    printHasil.innerText = hasil;
    printHasil.style.color = "#40C9C1";
  } else if (hasil == "KALAH") {
    point--;
    printHasil.innerText = hasil;
    printHasil.style.color = "#F27561";
  } else if (hasil == "SERI") {
    point += 0;
    printHasil.innerText = hasil;
    printHasil.style.color = "#D6CB35";
  } else {
    printHasil.innerText = "";
  }
  score.innerHTML = `<p> SCORE : ${point}</p>`;
}

function cetakHasil() {
  print.innerHTML = `
    <div class="col pilUser">
        <h4 style="text-align: center;">ME</h4>
        <img src="img/${pilianUser}.png" width="50px" height="50px" style="border-radius:50%;">
    </div>
    <div class="versus" style="margin-top: 30px;"><h1>VS</h1></div>
    <div class="col pilCom">
        <h4 style="text-align: center;">COMPUTER</h4>
        <img src="img/${pilianCom}.png" width="50px" height="50px" style="border-radius:50%;">
    </div>
    `;
}
