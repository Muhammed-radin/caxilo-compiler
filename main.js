console.log($("textarea").val());

function run() {
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
  document.getElementById('runBtn').disabled = true
  document.getElementById('stopBtn').disabled = true
  $("#liveBtn").html(`<i class="fa fa-headset"></i><l></l>live running`)
  setInterval(function() {
    $("#res").remove()
    $("html").append(`<div id="res"></div>`)
    $("#res").append($("textarea").val())
  }, 500)
}