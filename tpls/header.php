<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo (($title) ? $title.' | ' : ''); ?>Jon Zielenkievicz - an html5, css3, jquery, javascript, php, mysql explorer...</title>
    <meta name="description" content="<?php echo (($metaDesription) ? $metaDesription : 'Jon Zielenkievicz - an html5, css3, jquery, javascript, php, mysql explorer'); ?>">
    <meta name="keywords" content="<?php echo (($metaKeywords) ? $metaKeywords.', ' : ''); ?>jon zielenkievicz, html5, css3, jquery, javascript, php, mysql, nyc, new york">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/vendor/modernizr-2.6.2.min.js"></script>
  </head>
  <body id="<?php echo (($page) ? $page : 'error'); ?>">
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <div id="wrapper" class="clearfix">
  <?php include $_SERVER['DOCUMENT_ROOT'].'/tpls/nav.php'; ?>
