<?php
  $title = 'Landing Pages';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'landing-pages';
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
        <h2>World Society for the Protection of Animals</h2>
        <a href="http://wspa.thankyou4caring.org/sanky-sem-and-social/lapsed-donor-video-landing-pages/bears" target="_blank"><img src="/img/landing/wspa-dogs.jpg" alt="World Society for the Protection of Animals" /></a>
        <figcaption>
          <h3>Built with:</h3>
          <ul>
            <li>HML</li>
            <li>CSS</li>
            <li>Blackbaud NetCommunity</li>
          </ul>

          <h3>Responsibilities:</h3>
          <ul>
            <li>Build, maintain and update site</li>
          </ul>
        </figcaption>
      </figure>

      <figure>
        <h2>World Society for the Protection of Animals</h2>
        <a href="https://wspa.thankyou4caring.org/help-end-dog-abuse-1" target="_blank"><img src="/img/landing/wspa-bears.jpg" alt="World Society for the Protection of Animals" /></a>
        <figcaption>
          <h3>Built with:</h3>
          <ul>
            <li>HML</li>
            <li>CSS</li>
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
