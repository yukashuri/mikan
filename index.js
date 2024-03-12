console.log("Hello!!")

const form = document.querySelector('form');

// onsubmit event
form.onsubmit = function(event) {
  event.preventDefault();
  console.log("Form submitted!!!");
  // この中でフォームの値を得る
  const formData = new FormData(form);
  console.log(formData.get('blog_file'));
  console.log(formData.get('blog_bgm'));
  const date = new Date();
  // ローカルストレージに保存
  // 保存するKeyはIDを入れないと複数のデータが保存できない。正し、取得するときにそのKeyを知らないと困るので、それも検討する
  localStorage.setItem('blog_file_2', formData.get('blog_file'));
  localStorage.setItem('blog_bgm_2', formData.get('blog_bgm'));
  localStorage.setItem('date', date.toISOString());
  // 一覧ページに遷移
  location.href = '/blogs/';
}

