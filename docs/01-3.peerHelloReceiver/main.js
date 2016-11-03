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

peer.on('connection', function(conn) {
    document.getElementById("peer-id").innerHTML = conn.peer;
    conn.on('data', function(data){
        console.log(data);
        document.getElementById("receive_message").innerHTML = data;
    });
});