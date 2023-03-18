<?php

namespace App;

class AlbumHelper
{

    public static function albumsToTsvString(array $tables): string
    {
        $result = '';
        foreach ($tables as $table) {
            $result .= "$table[id]\t" . "$table[name]\t" . "$table[note]\t";

            $first = true;
            foreach ($table['tracks'] as $track) {
                if($first){
                    $first = false;
                } else {
                    $result .= ",";
                }
                $result .= $track['name'];

            }
            $result .= "\r\n";
        }
        $head = '';
        $head .= "id\t" . "name\t" . "note\t" . "track_names";

        return "$head\r\n".$result;
    }
}
