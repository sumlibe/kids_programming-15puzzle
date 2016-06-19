(function() {

// メイン画像
var PICTURE_URL = "mainpic.jpg";

// ゲーム全体で使う変数
var context, image;

// 初期化処理
function init() {
    alert("init");
    // 描画コンテキストの取得
    var canvas = document.getElementById("gameCanvas");
    if (!canvas.getContext) {
        alert("Canvasをサポートしていません");
        return;
    } else {
        alert("Canvasをサポートしています");
    }
    context = canvas.getContext("2d");
    // マウスイベントの設定
    canvas.onmousedown = mouseHandler;
    // メイン画像を読みだす
    image = new Image();
    image.src = PICTURE_URL;
    // メイン画像を読み出したらゲームを初期化
    image.onload = initGame();
}

function initGame() {
    alert("initGame");
}

function drawPuzzle() {
    alert("drawPuzzle");
    context.drawImage(image, 0, 0);
}

window.onload = function() {
    init();
};

})();
