/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	loadPlaylist();
}

	//추가1
function handleButtonClick(e){
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	
	if(songName ==""){
		alert("곡을 입력하세요");
	}else{
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		save(songName);
	}
}

