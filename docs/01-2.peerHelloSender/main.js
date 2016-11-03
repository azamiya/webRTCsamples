var peer = new Peer({
    key: 'px6645j12izilik9',
    debug: 3
});

window.onload = function(){
    getMyID();
}

function getMyID() {
    peer.on('open', function(){
        document.getElementById("my-id").innerHTML = peer.id;
    });
}

function callStart(){
    var peer_id = document.getElementById("peer-id-input").value;
    var conn = peer.connect(peer_id);
    conn.on('open', function() {
        conn.send('HelloWorld');
    });
}