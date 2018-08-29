<?php

include "consultas.php";

class ae{
  private $con;

  public function __construct(){
    $this->connectDB();
  }

  public function connectDB(){
        //DEV
       $database = "d2e761vplbo44n";
       $uid = "yhydnpvsdpyacm";
       $pwd = "d2102bd6f425fcc0bce7925a606832252d3d1c7e084f3b211ef6f538e1db02d6";
       $host = "ec2-54-235-242-63.compute-1.amazonaws.com";

       /* //PRODUCCION
       $database = "gestjjlg_gestion_educativa";
       $uid = "gestjjlg_usr_gestion";
       $pwd = "r!Hh7XNv22E(";
       $host = "127.0.0.1";  */

        //establecer la conexión
       $this->con = new PDO("pgsql:host=$host;port=5432;dbname=$database;user=$uid;password=$pwd");
       if (!$this->con) {
           die('error de conexión');
       }
  }

  public function getTemas(){
    return getTemasQuery($this->con);
  }

  public function getSubtemas($tema){
    return getSubtemasQuery($this->con, $tema);
  }

}

?>