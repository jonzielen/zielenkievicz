<?php
  $title = 'Links';
  $metaKeywords = '';
  $metaDesription = '';
  $page = 'links';
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
<div id="link" class="body clearfix">
  <section>
    <article class="clearfix">
      <h2>View My Code:</h2>
      <ul>
        <li><a href="https://github.com/jonzielen" target="_blank">https://github.com/jonzielen</a></li>
      </ul>

      <h2>Online:</h2>
      <ul>
        <li><a href="http://www.linkedin.com/in/jonzielenkievicz" target="_blank">http://www.linkedin.com/in/jonzielenkievicz</a></li>
        <li><a href="https://twitter.com/jonzielen" target="_blank">https://twitter.com/jonzielen</a></li>
      </ul>

      <h2>Work Experience:</h2>
      <ul>
        <li><a href="/doc/Jonathan-Zielenkievicz-Resume.pdf" target="_blank">Resume</a></li>
      </ul>

      <h2>Sites I Like:</h2>
      <ul>
        <li><a href="http://stackoverflow.com/" target="_blank">http://stackoverflow.com/</a></li>
        <li><a href="http://www.fontsquirrel.com/" target="_blank">http://www.fontsquirrel.com/</a></li>
        <li><a href="http://html5boilerplate.com/" target="_blank">http://html5boilerplate.com/</a></li>
        <li><a href="http://www.smashingmagazine.com/" target="_blank">http://www.smashingmagazine.com/</a></li>
        <li><a href="http://www.sublimetext.com/" target="_blank">http://www.sublimetext.com/</a></li>
      </ul>

      <h2>Contact:</h2>
      <ul>
        <li><a href="mailto:jonzielen@gmail.com">jonzielen@gmail.com</a></li>
      </ul>
    </article>
  </section>

  <aside>
    <a class="twitter-timeline" href="https://twitter.com/jonzielen" data-widget-id="399669331568500736">Tweets by @jonzielen</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
  </aside>
</div>
<?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/footer.php'; ?>
