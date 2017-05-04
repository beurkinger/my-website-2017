<?php

class JsonReponse {

  private $code = 200;
  private $content = null;

  function __construct ($content, $code = 200) {
    $this->content = $content;
    $this->code = $code;
  }

  public function send() {
    http_response_code($this->code);
    header('Content-type: application/json');
    echo json_encode($this->content);
  }
}
