<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laporan Aplikasi Sapu Jagad</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="text-center">
        <b>LAPORAN KEGIATAN SAPU JAGAD</b><br>
        <b>DARI TANGGAL {{$start}} - {{$end}} </b>
    </div>
    </div>
    <br>
    <br>
    <b>Pengajuan per Kecamatan</b>
    <br>
    <br>
     <table id="example1" class="table table-bordered table-striped">
      <thead>
      <tr>
        <td>#</td>
        <td>Kecamatan</td>
        <td>Total</td>
        <td>Cetak KTP-El</td>
        <td>Rekam KTP-El</td>
        <td>KIA</td>
        <td>AKTA</td>
      </tr>
      </thead>
      <tbody>
        @foreach ($kecamatan as $index => $data)
          <tr>
            <td>{{ $index +1 }}</td>
            <td style="text-transform: capitalize;">{{ $data->nama_kecamatan }}</td>
            <td>{{ $data->total }}</td>
            <td>{{ $data->cetakKtp }}</td>
            <td>{{ $data->rekamKtp }}</td>
            <td>{{ $data->kia }}</td>
            <td>{{ $data->akta }}</td>
          </tr>
        @endforeach
      </tbody>
       <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>{{$total}}</td>
          <td>{{$cetakKtp}}</td>
          <td>{{$rekamKtp}}</td>
          <td>{{$kia}}</td>
          <td>{{$akta}}</td>
        </tr>
      </tfoot>
    </table>
    <br>
    <b>Jumlah Pelapor dan Pemohon</b>
    <br>
    <br>
    <table class="table table-bordered table-striped">
      <tr>
        <td width="60">Pelapor</td>
        <td width="10">:</td>
        <td>{{$pelapor}}</td>
      </tr>
      <tr>
        <td>Pemohon</td>
        <td>:</td>
        <td>{{$pemohon}}</td>
      </tr>
    </table>
</body>
</html>