/* playlist_store.js
 * 
 * 재생목록의 항목을 저장하고 가져오는 사전준비 코드
 */

function save(item) {
	var playlistArray = getStoreArray("playlist");
	playlistArray.push(item);
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
	var playlistArray = getSavedSongs();
	var ul = document.getElementById("playlist");
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = playlistArray[i];
			ul.appendChild(li);
		}
	}
}

function getSavedSongs() {
	return getStoreArray("playlist");
}

function getStoreArray(key) {
	var playlistArray = localStorage.getItem(key);
	if (playlistArray == null || playlistArray == "") {
		playlistArray = new Array();
	}
	else {
		playlistArray = JSON.parse(playlistArray);
	}
	return playlistArray;
}

function removeAll(){
	if(confirm('모두 지울까요?')){
		localStorage.clear();
	}
}

// 추가 1
function remove(songName){
	if(confirm(songName+'을 지울까요?')){
	   var playlistArray = getSavedSongs();
	   if (playlistArray != null) {
		  for (var i = 0; i < playlistArray.length; i++) {//저장된 songName을 모두 지우기 위해
		  if(playlistArray[i]==songName)
			 playlistArray.splice(i--,1);
		  }
		  localStorage.setItem("playlist", JSON.stringify(playlistArray));
	   }
	}
	location.reload();
 }
