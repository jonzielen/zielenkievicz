<?php
  $title = 'Sites';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'sites';
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
        <h2>HomeTeam - Covenant House</h2>
        <a href="http://hometeam.covenanthouse.org/" target="_blank"><img src="/img/sites/hometeam.jpg" alt="HomeTeam - Covenant House" /></a>
        <figcaption>
          <h3>Built with:</h3>
          <ul>
            <li>MVC (CodeIgniter)</li>
            <li>HML5</li>
            <li>CSS3</li>
            <li>Jquery</li>
          </ul>

          <h3>Responsibilities:</h3>
          <ul>
            <li>Build, maintain and update site</li>
          </ul>
        </figcaption>
      </figure>

      <figure>
        <h2>Direct Marketing Fundraisers Association</h2>
        <a href="https://www.dmfa.org/" target="_blank"><img src="/img/sites/dmfa.jpg" alt="Direct Marketing Fundraisers Association" /></a>
        <figcaption>
          <h3>Built with:</h3>
          <ul>
            <li>Drupal 7</li>
            <li>HML5</li>
            <li>Jquery</li>
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
