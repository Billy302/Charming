<?php

// https://phpspreadsheet.readthedocs.io/en/latest/


require __DIR__.'/../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();
$sheet->setCellValue('A1', 'Hello World !')
    ->setCellValue('B1', '哈囉');

$writer = new Xlsx($spreadsheet);
$writer->save('hello world.xlsx');
echo 'ok';