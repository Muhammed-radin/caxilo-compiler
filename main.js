// import * from 'js/auto.js';


 var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/html");
let thisWin = window

// setInterval(
//   lang = document.getElementById('lang').value,
//   console.log(lang),
//   editor.session.setMode("ace/mode/"+lang),2000
// )
function run() {
  $("#res").remove()
  $("html").append(`<div id="res"></div>`)
  Msg('running')
  $('#topBar').css('display','none')
  $(".side-bar").css("top","0")
  $("#res").append(editor.getValue())
  document.getElementById('runBtn').disabled = true
 // $("#runBtn").html(`<i class="fa fa-play"></i><l></l>running`)
}
function pass(){
    onHider('editor',true)
    run()
}

function stop() {
  onHider('res',true)
  openModal('editor')
  $('#editor').css('display','block')
  $("#res").remove()
  $("html").append(`<div id="res"></div>`)
  $('#topBar').css('display','block')
  $(".side-bar").css("top","3rem")
  document.getElementById('runBtn').disabled = false
  //$("#runBtn").html(`<i class="fa fa-play"></i><l></l>run`)
}

function liverun() {
  onAlert('liverun issues', 'liverun is actually 500 milisceond refreshing..so your script doesnt work', 'fa fa-warning')
  document.getElementById('runBtn').disabled = true
  document.getElementById('stopBtn').disabled = true
  $("#liveBtn").html(`<i class="fa fa-refresh spin"></i><l></l>live running`)
  setInterval(function() {
    $("#res").remove()
    $("html").append(`<div id="res"></div>`)
    $("#res").append(editor.getValue())
  }, 3000)
}

function saveDoc() {
  onHider('falert', true)
  localStorage.setItem($("#key").val(), editor.getValue())
  Msg('saved..')
}

function openDoc() {
  onHider('falerta', true)
  var key = $('#opn').val()
  if (key ? true : false) {
    if(localStorage.getItem(key) ? true : false){
    var vale = localStorage.getItem(key)
    //document.querySelector('textarea').innerHTML = vale
    editor.setValue(vale)
    Msg('opened...')
    }else {
      alertNot(`not found key:can't open`,'var(--bg)','open','openModal(`falerta`)','fa fa-box','5s','blue')
    }
  } else {
    Msg('this not a key')
  }
}

function openModal(id) {
  $("body").append(`<style></style>`)
  $(id).css('display', 'block')
  // document.getElementById(id).style.display = 'block'
}
var date = new Date()

function sumWin(){
  $("html").append(`<div id="res"></div>`)
  $("style").append(`#editor {
    height: 45vh;
    display: block;
  }
  #res {
    display: block;
    top: 50vh !important;
  }`)
  liverun()
}
function rBtn(){
  alert()
  $("#res").remove()
  $("html").append(`<div id="res"></div>`)
  Msg('running')
  $("#res").append(editor.getValue())
}
function github(){
  window.open('https://github.com/Muhammed-radin/trudown-codeplay','_blank')
}
function elem(querySelector){
 innerVal = document.querySelector(querySelector)
  return innerVal;
}
function fScreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

setInterval(
  ()=>{
    $("#topBar").css("width","100%")
  },1000
)

let key =  document.querySelector('#key')
let opn =  document.querySelector('#opn')
let svBtn =  document.querySelector('#sv-btn')
let opnBtn =  document.querySelector('#opn-btn')


key.addEventListener('keypress',function (e){
  if(e.keyCode === 13){
    svBtn.click()
  }
})
opn.addEventListener('keypress',function (e){
  if(e.keyCode === 13){
    opnBtn.click()
  }
})


// var e = jQuery.Event('keydown')

// e.which = 188
// e.ctrlkey = true 
// console.log(e);
// $("body").trigger(e)

// let body = document.querySelector('body')

// body.addEventListener('keypress',function (e){
//   if(e.keyCode == 188){
//     alert()
//   }
// })
autocomplete()