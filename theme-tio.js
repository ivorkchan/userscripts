// ==UserScript==
// @name             TIO
// @version          0.1
// @description      Theme for TIO
// @author           IvorkChan
// @match            https://tio.freemdict.com/en/
// @grant            none
// ==/UserScript==

document.head.innerHTML = document.head.innerHTML.replace("/static/css/tio.css", "");
document.head.innerHTML = document.head.innerHTML.replace(
  /<style>[\w\W]*<\/style>/,
  '<style>body{margin:0;padding:0;font-family:IBM Plex Sans,Roboto,Open Sans,sans-serif;line-height:1.4}.pg_book,br,small{display:none}.hl,b{color:#dc143c;font-weight:400}.topbar{position:fixed;top:0;right:0;left:0;background:#789;box-shadow:0 1px 2px rgb(0 0 0/20%)}.topbar form{display:flex;padding:1rem;height:2.5rem}.addsearch{margin-right:1rem;padding:0 1rem;width:calc(100% - 6rem);background-color:#fff;color:#666;cursor:text}.addsearch,.myButton{border:none;border-radius:10px;box-shadow:0 1px 2px rgb(0 0 0/20%)}.myButton{padding:0;width:5rem;background-color:#eee;color:#333;cursor:pointer}.tio_container{margin-top:5.5rem}.tio_container,.tioresult{display:flex;flex-direction:column}.tioresult{margin:0 1rem 1rem;padding:1rem 1rem 1rem 2rem;border-radius:10px;box-shadow:0 2px 12px rgb(0 0 0/15%)}.tioresult:nth-child(4n+1){display:none}.tioresult:nth-child(-n+3){font-size:16px;font-family:Lucida Sans Unicode,sans-serif}.abc{margin:0;padding:0;white-space:nowrap}.pg_exam,.pg_exam_def{margin:.375rem 0;color:#333}.pg_exam:before,.pg_exam_def:before{display:inline-block;margin-left:-1rem;width:1rem;content:"‣"}zh_cn{display:block}ze_cn,zh_cn_def{display:inline;padding-left:.25rem}ze_cn,zh_cn,zh_cn_def{color:#999;font-size:15px;font-family:Microsoft YaHei,PingFang HK,sans-serif}.fc_key_word{color:teal}#topbtn{position:fixed;right:2rem;bottom:1rem;padding:0;width:2.5rem;height:2.5rem;border:none;border-radius:2.5rem;background-color:#789;box-shadow:0 1px 2px rgb(0 0 0/20%);color:#fff;cursor:pointer}#topbtn,.addsearch,.myButton{font-weight:500;font-size:14px}</style>'
);
document.body.innerHTML = document.body.innerHTML.replace("Back to Top", "↑");
document.body.innerHTML = document.body.innerHTML.replace(/#FF5D00/g, "#999");
document.body.innerHTML = document.body.innerHTML.replace(/〔/g, "[");
document.body.innerHTML = document.body.innerHTML.replace(/〕/g, "]");
document.body.innerHTML = document.body.innerHTML.replace(/[\u2044\u2215\u2571\uff0f]/g, "/");
document.body.innerHTML = document.body.innerHTML.replace(/\(([\u4E00-\u9FFF]*)\)/g, "（$1）");
document.body.innerHTML = document.body.innerHTML.replace(/\[([\u4E00-\u9FFF]*)\]/g, "【$1】");
document.body.innerHTML = document.body.innerHTML.replace(/\.{3}/g, "…");
document.body.innerHTML = document.body.innerHTML.replace(/\.{6}/g, "……");
document.body.innerHTML = document.body.innerHTML.replace(/\s\./g, ".");
document.body.innerHTML = document.body.innerHTML.replace(/\s\,/g, ",");
document.body.innerHTML = document.body.innerHTML.replace(/\s\s/g, " ");
document.body.innerHTML = document.body.innerHTML.replace(/(?<=[\u4E00-\u9FFF])\s/g, "");
document.body.innerHTML = document.body.innerHTML.replace(/,\s?(?=[\u4E00-\u9FFF])/g, "，");
document.body.innerHTML = document.body.innerHTML.replace(/;\s?(?=[\u4E00-\u9FFF])/g, "；");
document.body.innerHTML = document.body.innerHTML.replace(/(?<=[\u4E00-\u9FFF])…\s?(?=[\u4E00-\u9FFF])/g, "……");
document.body.innerHTML = document.body.innerHTML.replace(/[，；：,;:]</g, "<");

(function () {
  "use strict";
  // Back to Top
  document.getElementById("topbtn").onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  // Hide Origins
  var book_btn = document.createElement("button");
  book_btn.textContent = "Hide";
  book_btn.style =
    "position:fixed;right:2rem;bottom:4rem;padding:0;width:2.5rem;height:2.5rem;border:none;border-radius:2.5rem;background-color:#789;box-shadow:0 1px 2px rgb(0 0 0 / 20%);color:#fff;cursor:pointer;";
  document.body.appendChild(book_btn);
  var is_click_book = true;
  book_btn.addEventListener("click", function () {
    let laiyuan = document.getElementsByClassName("pg_book");
    if (is_click_book) {
      for (var i = 0; i < laiyuan.length; i++) {
        laiyuan[i].style.display = "none";
      }
      book_btn.textContent = "Show";
    } else {
      for (var j = 0; j < laiyuan.length; j++) {
        laiyuan[j].style.display = "inline-block";
      }
      book_btn.textContent = "Hide";
    }
    is_click_book = !is_click_book;
  });
})();
