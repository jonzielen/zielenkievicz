<?php
  $title = 'Html Emails';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'html-emails';
  include $_SERVER['DOCUMENT_ROOT'].'/tpls/header.php';
?>
<header class="clearfix">
  <a href="/" id="hp-link">Jon Zielenkievicz <span>- an html5, css3, jquery, javascript, php, mysql explorer...</span></a>
  <h1><?php echo $title; ?></h1>
</header>
<nav>
  <ul>
    <?php getNav($mainNav, $title); ?>
  </ul>
</nav>
<div id="Html Emails" class="body clearfix">
  <section class="clearfix">
    <article class="clearfix">
      <figure>
        <h2>African Wildlife Foundation</h2>
        <a href="http://www.awf.org/landing/2013-12/holiday1.html" target="_blank"><img src="/img/html-email/awf-2013-12.jpg" alt="African Wildlife Foundation" /></a>
      </figure>

      <figure>
        <h2>Northeast Animal Shelter</h2>
        <a href="http://www.northeastanimalshelter.org/scoop/email/2013_11_hol_ecard/2013_11_ecard2.html" target="_blank"><img src="/img/html-email/neas-2013-12.jpg" alt="Northeast Animal Shelter" /></a>
      </figure>

      <figure>
        <h2>Freedom From Hunger</h2>
        <a href="http://sankynet.mkt5124.com/2013-11-Thanksgiving-Email-2/" target="_blank"><img src="/img/html-email/ffh-2013-12.jpg" alt="Northeast Animal Shelter" /></a>
      </figure>
    </article>
  </section>
</div>
<?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/footer.php'; ?>
