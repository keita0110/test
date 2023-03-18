<?php

namespace App;

class AlbumHelper_A
{
    public static function albumsToTsvString(array $albums): string
    {
        $tsvString = '';
        foreach($albums as $a) {
            $trackNameArray = array_column($a['tracks'], 'name');
                             // implode 文字連結　最初の','は表示されない
            $trackNamesString = implode(',', $trackNameArray);
            $tsvString .= "{$a['id']}\t{$a['name']}\t{$a['note']}\t{$trackNamesString}\n";
        }
        return $tsvString;
    }
}

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $tsvString = "id\tname\tnote\ttrack_names\r\n"; // 変更: 空文字 → ヘッダー文字列
        foreach($albums as $a) {
            $trackNameArray = array_column($a['tracks'], 'name');
            $trackNamesString = implode(',', $trackNameArray);
            $tsvString .= "{$a['id']}\t{$a['name']}\t{$a['note']}\t{$trackNamesString}\r\n"; // 変更: \n → \r\n
        }
        return $tsvString;
    }
}