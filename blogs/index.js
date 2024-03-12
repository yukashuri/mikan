console.log("Hello!! 一覧！")

const ul = document.querySelector('ul');

// ブログ一覧ページが表示されたときのイベントを設定
document.addEventListener('DOMContentLoaded', function() {

  // ローカルストレージからデータを10個分取得
  for(let i = 0; i < 10; i++) {
    const blog_file = localStorage.getItem(`blog_file_${i}`);
    const blog_bgm = localStorage.getItem(`blog_bgm_${i}`);
    console.log(blog_file);
    // ローカルストレージにデータがある場合は、リストに追加
    if (blog_file && blog_bgm) {
      const li = document.createElement('li');
      
      console.log(blog_file);
      li.textContent = `${blog_file} - ${blog_bgm}`;
      ul.appendChild(li);


      li.onclick = function() {
        // 一覧ページに遷移
        location.hash = `${i}`;
      }
  }
  }
});

// ハッシュ変更イベントを監視
window.addEventListener('hashchange', () => {
    console.log(window.location.hash);

    const content = `
      <h1>${window.location.hash}</h1>
      <a href="/blogs/">一覧に戻る</a>
      <video controls autoplay>
    `
    // JSでvideoタグを生成
    const video = document.createElement('video');
    // ローカルストレージから持ってくる
    video.src = `./videos/${window.location.hash}.mp4`;
    video.controls = true;
    video.autoplay = true;
    // body の中身を書き換え
    document.querySelector('body').innerHTML = content;
    // 追加
    document.querySelector('body').appendChild(video);
});
