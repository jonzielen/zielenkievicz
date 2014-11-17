<?php
  $title = '';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'homepage';
  include $_SERVER['DOCUMENT_ROOT'].'/tpls/header.php';
?>
<header class="clearfix">
  <h1 id="hp-logo">Jon Zielenkievicz <span>- an html5, css3, jquery, javascript, php, mysql explorer...</span></h1>
</header>
<nav>
  <ul>
    <?php getNav($mainNav, $title); ?>
  </ul>
</nav>
<div id="homepage" class="body clearfix">
  <section>
    <article class="clearfix">
      <h2>Welcome!</h2>
      <p>Hi, I'm Jon, a Web Developer at <a href="http://www.flycommunications.com/" target="_blank">Fly Communications</a>.</p>
      <p>I enjoy building web sites, pages and html emails using html5, css3, jquery and php. Within these pages you will find some examples of my work.</p>
      <p class="italic">Enjoy!</p>
    </article>
  </section>
</div>
<?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/footer.php'; ?>
