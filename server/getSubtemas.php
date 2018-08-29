<?php

include 'lib.php';

$api = new ae();

if (isset($_POST['tema'])) {
  $json = $api->getSubtemas($_POST['tema']);
} else {
  $json = "No se recibieron los datos adecuados";
}

echo json_encode($json);