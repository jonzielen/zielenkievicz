<?php
  $title = 'PHP';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'php';
  include $_SERVER['DOCUMENT_ROOT'].'/tpls/header.php';
?>
<header class="clearfix">
  <div id="home-link">
    <a href="/">home</a>
  </div>
  <h1>PHP</h1>
</header>
<?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/nav.php'; ?>
<div id="php" class="body clearfix">
  <section>
    <article class="clearfix">
      <h2>Hello! My name is Jon Zielenkievicz.</h2>
    </article>
  </section>

  <aside>
    <a class="twitter-timeline" href="https://twitter.com/jonzielen" data-widget-id="399669331568500736">Tweets by @jonzielen</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
  </aside>
</div>
<?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/footer.php'; ?>
