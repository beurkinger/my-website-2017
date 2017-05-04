<?php

class JsonReponse {

  private $code = 200;
  private $content = null;

  function __construct ($content, $code = 200) {
    $this->content = $content;
    $this->$code = $code;
  }

  public function send() {
    header('Content-type: application/json');
    http_response_code($this->code);
    echo json_encode($this->content);
  }
}
