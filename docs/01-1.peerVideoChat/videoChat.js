navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
 
var localStream;    // 自分の映像ストリームを保存しておく変数
var connectedCall;  // 接続したコールを保存しておく変数
 
var peer = new Peer({ key: 'px6645j12izilik9', debug: 3});

window.onload = function(){
    displayMyCamera();
}

//Get peer id
peer.on('open', function(){
    connectedCall = call;
    document.getElementById("my-id").innerHTML = peer.id;
    call.answer(localStream);

    call.on('stream', function(stream){
        var url = URL.createObjectURL(stream);
        document.getElementById("peer-video").src = url;
    });
});

//take calling from other peer
peer.on('call', function(call){
    connectedCall = call;
        $("#peer-id").text(call.peer);
    call.answer(localStream);
 
    call.on('stream', function(stream){
        var url = URL.createObjectURL(stream);
        $('#peer-video').prop('src', url);
    });
});
 
/*$(function() {
 
    //recieve calling from other peer
    $('#call-start').click(function(){
        var peer_id = $('#peer-id-input').val();
        var call = peer.call(peer_id, localStream);
            
        call.on('stream', function(stream){
            $("#peer-id").text(call.peer);
            var url = URL.createObjectURL(stream);
            $('#peer-video').prop('src', url);
        });
    });
 
    // End　Callボタンクリック時の動作
    $('#call-end').click(function(){
        connectedCall.close();
    });
});*/

function displayMyCamera(){
    navigator.getUserMedia({audio: true, video: true}, function(stream){
        localStream = stream;
        document.getElementById("my-video").src = URL.createObjectURL(stream);
    }, function() { alert("Error!"); });
}

function callStart(){
    var peer_id = document.getElementById("peer-id-input").value;
    var call = peer.call(peer_id, localStream);
    call.on('stream', function(stream){
        document.getElementById("PeerID").innerHTML = peer_id;
        var url = URL.createObjectURL(stream);
        document.getElementById("peer-video").src = url;
    });
}

function callEnd() {
    connectedCall.close();
}