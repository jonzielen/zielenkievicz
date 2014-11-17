<?php
  $title = '';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'homepage';
  include $_SERVER['DOCUMENT_ROOT'].'/tpls/header.php';
?>
<header class="clearfix">
  <a href="/" id="hp-link">Jon Zielenkievicz <span>- an html5, css3, jquery, javascript, php, mysql explorer...</span></a>
</header>
<nav>
  <ul>
    <?php getNav($mainNav, $title); ?>
  </ul>
</nav>
<div id="homepage" class="body clearfix">
  <section>
    <article class="clearfix">
      <h3>Something went wrong!</h3>
    </article>
  </section>
</div>
<?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/footer.php'; ?>
