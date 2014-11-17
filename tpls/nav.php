<?php
  // main nav
  $mainNav = array(
      'sites'         => '/sites/',
      'responsive'    => '/responsive/',
      'landing pages' => '/landing-pages/',
      'html emails'   => '/html-emails/',
      'links/contact' => '/links/'
    );
?>

<?php
  function getNav($navToGet, $title) {
    foreach($navToGet as $navToGet['key'] => $navToGet['value']) {
      echo '<li><a href="'.$navToGet['value'].'">'.$navToGet['key'].'</a></li>';
    };
  };
?>
