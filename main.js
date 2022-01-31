function run() {
  $("#res").remove()
  $("html").append(`<div id="res"></div>`)
  Msg('running')
  $("#res").append($("textarea").val())
  document.getElementById('runBtn').disabled = true
  $("#runBtn").html(`<i class="fa fa-play"></i><l></l>running`)
}

function stop() {
  $("#res").remove()
  $("html").append(`<div id="res"></div>`)
  document.getElementById('runBtn').disabled = false
  $("#runBtn").html(`<i class="fa fa-play"></i><l></l>run`)
}

function liverun() {
  onAlert('liverun issues', 'liverun is actually 500 milisceond refreshing..so your script doesnt work', 'fa fa-warning')
  document.getElementById('runBtn').disabled = true
  document.getElementById('stopBtn').disabled = true
  $("#liveBtn").html(`<i class="fa fa-refresh spin"></i><l></l>live running`)
  setInterval(function() {
    $("#res").remove()
    $("html").append(`<div id="res"></div>`)
    $("#res").append($("textarea").val())
  }, 500)
}

function saveDoc() {
  onHider('falert', true)
  localStorage.setItem($("#key").val(), $("textarea").val())
  Msg('saved..')
}

function openDoc() {
  onHider('falerta', true)
  var key = $('#opn').val()
  if (key ? true : false) {
    if(localStorage.getItem(key) ? true : false){
    var vale = localStorage.getItem(key)
    document.querySelector('textarea').innerHTML = vale
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