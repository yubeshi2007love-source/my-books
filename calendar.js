document.addEventListener('DOMContentLoaded', function() {
    const calendarDiv = document.getElementById('calendar');
    
    let html = '<h2>2025年 新刊・注目作品スケジュール</h2>';
    html += '<table style="width:100%; border-collapse: collapse; margin-top: 20px;">';
    html += '<tr><th style="background:#2c3e50;color:white;padding:12px;">発売日</th><th style="background:#2c3e50;color:white;padding:12px;">作品名</th><th style="background:#2c3e50;color:white;padding:12px;">著者</th><th style="background:#2c3e50;color:white;padding:12px;">ジャンル</th></tr>';
    
    const books = [
        {date: '2025-07-15', title: 'きみと旅する星の夜', author: 'ジョン・グリーン', genre: '青春小説'},
        {date: '2025-07-20', title: 'すべてがFになる', author: '森村誠一', genre: 'ミステリー'},
        {date: '2025-08-05', title: 'はさみ男', author: '伊坂幸太郎', genre: 'ミステリー'},
        {date: '2025-08-12', title: '虐殺器官', author: '伊藤計劃', genre: 'SF'},
        {date: '2025-09-01', title: '幻夜', author: '東野圭吾', genre: 'サスペンス'},
        {date: '2025-09-15', title: '幸せの書', author: '湊かなえ', genre: 'ミステリー'},
        {date: '2025-10-01', title: '獣の奏者', author: '上橋菜穂子', genre: 'ファンタジー'}
    ];
    
    books.forEach(book => {
        html += `<tr style="border-bottom:1px solid #ddd;">
            <td style="padding:12px;">${book.date}</td>
            <td style="padding:12px;">${book.title}</td>
            <td style="padding:12px;">${book.author}</td>
            <td style="padding:12px;">${book.genre}</td>
        </tr>`;
    });
    
    html += '</table>';
    html += '<p style="margin-top: 25px; color:#555;">※発売日は変更される場合があります。最新情報は書店・出版社でご確認ください。</p>';
    
    calendarDiv.innerHTML = html;
});