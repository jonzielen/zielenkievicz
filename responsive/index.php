<?php
  $title = 'Responsive';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'responsive';
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
  <section>
    <article class="clearfix">
      <figure>
        <h2>African Wildlife Foundation</h2>
        <a href="https://my.awf.org/support-african-wildlife" target="_blank"><img src="/img/responsive/awf-support.jpg" alt="African Wildlife Foundation" /></a>
        <figcaption>
          <h3>Built with:</h3>
          <ul>
            <li>HML5</li>
            <li>CSS3</li>
            <li>Jquery</li>
            <li>Blackbaud NetCommunity</li>
          </ul>

          <h3>Responsibilities:</h3>
          <ul>
            <li>Build, maintain and update site</li>
          </ul>
        </figcaption>
      </figure>
    </article>
  </section>
</div>
<?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/footer.php'; ?>
