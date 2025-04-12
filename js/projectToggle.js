function toggleSectionWithFetch(id, filePath) {
  const section = document.getElementById(`section-${id}`);
  const content = document.getElementById(`content-${id}`);
  const btn = document.getElementById(`btn-${id}`);
  const ids = ['tumor', 'llm'];

  ids.forEach(sec => {
    const secDiv = document.getElementById(`section-${sec}`);
    const secBtn = document.getElementById(`btn-${sec}`);
    if (sec === id) {
      const isOpen = !secDiv.classList.contains('hidden');
      secDiv.classList.toggle('hidden');
      secBtn.innerText = isOpen ? '보기 ▼' : '보기 ▲';

      // ✅ fetch는 열릴 때만 실행 & 한 번만
      if (!isOpen && content && content.innerHTML.trim() === '로딩 중...' && filePath) {
        fetch(filePath)
          .then(res => res.text())
          .then(html => content.innerHTML = html)
          .catch(err => content.innerHTML = `<p class="text-red-400">불러오기 실패: ${err.message}</p>`);
      }
    } else {
      document.getElementById(`section-${sec}`).classList.add('hidden');
      document.getElementById(`btn-${sec}`).innerText = '보기 ▼';
    }
  });
}