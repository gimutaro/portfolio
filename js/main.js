// 画像が読み込めない場合のフォールバック処理
document.addEventListener('DOMContentLoaded', function() {
    // ゲーム画像の要素を取得
    const gameImages = document.querySelectorAll('.game-image img');
    
    // 各画像に対してエラーハンドリングを追加
    gameImages.forEach(img => {
        img.onerror = function() {
            // 画像が読み込めない場合、親要素にゲームタイトルをテキストで表示
            const gameTitle = this.closest('.game-card').querySelector('.game-title').textContent;
            this.style.display = 'none';
            this.parentElement.textContent = gameTitle;
        };
    });
});