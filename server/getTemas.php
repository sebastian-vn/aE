<?php

include "lib.php";

$api = new ae();

if (isset($_POST)) {
    $json = $api->getTemas();
} else {
    $json = "No se recibieron los datos adecuados";
}

echo json_encode($json);

