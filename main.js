
 var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/html");
editor.setValue('')

function run() {
  $("#res").remove()
  $("html").append(`<div id="res"></div>`)
  Msg('running')
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
  $("#res").remove()
  $("html").append(`<div id="res"></div>`)
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
  }, 500)
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
  document.getElementById(id).style.display = 'block'
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