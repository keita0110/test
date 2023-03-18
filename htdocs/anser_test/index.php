<?php
require_once(__DIR__ . '/app/anser.php');

// 多次元配列
$albums = [
    [
        "id" => 1,
        "name" => "ALBUM01",
        "note" => "NOTE01",
        "tracks" => [
            ["id" => 101, "name" => "TRACK0101"],
            ["id" => 102, "name" => "TRACK0102"],
            ["id" => 103, "name" => "TRACK0103"],
        ],
    ],
    [
        "id" => 2,
        "name" => "ALBUM02",
        "note" => "NOTE02",
        "tracks" => [
            ["id" => 201, "name" => "TRACK0201"],
        ],
    ],
    [
        "id" => 3,
        "note" => "NOTE03",
        "name" => "ALBUM03",
        "tracks" => [
            ["id" => 301, "name" => "TRACK0301"],
            ["name" => "TRACK0302", "id" => 302],
            ["id" => 303, "name" => "TRACK0303"],
        ],
    ],
];

ob_start(); // 出力バッファリング開始（echo、var_dumpした内容を内部バッファに保存）

// 対象メソッドの実行
$result = \App\AlbumHelper::albumsToTsvString($albums);

$outContents = ob_get_clean(); // 出力バッファ取得・出力バッファ消去・出力バッファリング停止

// 戻り値エラー判定（$isError が true の場合にエラー）
$isError = !is_string($result) || empty($result);

// TSVファイルダウンロード判定（tsvパラメータが「true」になっているか）
if (($_REQUEST['tsv'] ?? '') === 'true') {
    if ($isError) {
        // エラー
        http_response_code(500);
        exit(1); // ここで処理終了
    }

    // TSVファイルダウンロード
    header('Content-type: text/tab-separated-values');
    header("Content-Disposition: attachment;filename=kadai02.tsv");
    echo $result;
    exit(0); // ここで処理終了
}

// 画面表示処理
$urlTsvDownload = $_SERVER['PHP_SELF'] . '?tsv=true';
if ($isError) {
    $urlTsvDownload = null;
    // var_dumpの内容を文字列として取得し、$result に格納
    ob_start();
    var_dump($result);
    $result = "エラー: 戻り値が不正です。\r\n\r\n" . ob_get_clean();
}

?>
<!-- ↓↓↓HTML -->
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>課題02</title>
    <style>
        pre {
            border: 1px solid black;
        }

        /** Bootstrapっぽいボタン */
        a {
            padding: 6px 12px;
            display: inline-block;
            font-weight: 400;
            line-height: 1.5;
            color: #fff;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            border-radius: 0.375rem;
            background-color: #0d6efd;
        }
    </style>
</head>

<body>
    <h1>課題02</h1>
    <?php if (!empty($outContents)) { ?>
    <section>
        <h2>不正出力</h2>
        <p>メソッド内で不正な出力を検知しました（var_dump、echo等）。</p>
        <pre><?= $outContents ?></pre>
    </section>
    <?php } ?>

    <section>
        <h2>TSV出力結果</h2>
        <pre><?= $result ?></pre>
        <?php if (!empty($urlTsvDownload)) { ?>
            <a href="<?= $urlTsvDownload ?>">TSVダウンロード</a>
        <?php } ?>
    </section>
</body>

</html>