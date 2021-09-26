<?php

function TanggalID($format, $tanggal="now", $bahasa="id")
{
    $en = array("Sun","Mon","Tue","Wed","Thu","Fri","Sat","Jan","Feb",
        "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");


    $id = array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu",
        "Januari","Pebruari","Maret","April","Mei","Juni","Juli","Agustus","September",
        "Oktober","Nopember","Desember");


    // mengganti kata yang berada pada array en dengan array id, fr (default id)
    return str_replace($en,$$bahasa,date($format,strtotime($tanggal)));
}