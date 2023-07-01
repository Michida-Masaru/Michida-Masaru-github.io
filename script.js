"use strict";

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
// console.log(menu);
// console.log(navbar);
window.addEventListener("scroll", () => {
  if (window.scrollY >= menu.offsetTop) {
    navbar.classList.add("sticked");
  } else {
    navbar.classList.remove("sticked");
  }
});

// // 画像の入れ替え
let num = 0;
// 画像１
let pics_src1 = new Array("pic11.jpg", "pic12.jpg", "pic13.jpg");
function slideshow1() {
  if (num == pics_src1.length - 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic1").src = pics_src1[num];
}

// // 画像２
let pics_src2 = new Array("pic21.jpg", "pic22.jpg", "pic23.jpg");
function slideshow2() {
  if (num == pics_src2.length - 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic2").src = pics_src2[num];
}

// // 画像３
let pics_src3 = new Array(
  "pic31.jpg",
  "pic32.jpg",
  "pic33.jpg",
  "pic34.jpg",
  "pic35.jpg",
  "pic36.jpg"
);

function slideshow3() {
  if (num == pics_src3.length - 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic3").src = pics_src3[num];
}

// //画像４
let pics_src4 = new Array(
  "pic41.jpg",
  "pic42.jpg",
  "pic43.jpg",
  "pic44.jpg",
  "pic45.jpg"
);
function slideshow4() {
  if (num == pics_src4.length - 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic4").src = pics_src4[num];
}

// // 画像5
let pics_src5 = new Array("pic51.jpg", "pic52.jpg", "pic53.jpg");
function slideshow5() {
  if (num == pics_src5.length - 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic5").src = pics_src5[num];
}
