//console.log("Hello!!")
const postCountElement = document.getElementById('postCount');

const form = document.querySelector('form');

// onsubmit event
form.onsubmit = function(event) {
  event.preventDefault();
  // この中でフォームの値を得る
  const formData = new FormData(form);
  const audioFile = formData.get('blog_file');

  fileToBase64(audioFile).then(base64String => {
    const date = new Date();
    // Base64文字列をlocalStorageに保存
    localStorage.setItem('mikan_savedAudioFile_' + date.toISOString(), base64String);
  }).catch(error => {
    console.error('Error converting file to Base64', error);
  });

  location.href = 'playback.html';
}


function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(event) {
      resolve(event.target.result); // Base64 encoded string
    };
    reader.onerror = function(error) {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

function goToFirstPage() {
  location.href = 'first_page.html'; // 音声投稿ページのURLを指定
}