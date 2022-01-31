<?php
/*
* Plugin Name: TS-WCAG
* Description: Add WCAG
* Version: 0.0.1
* Author: Joker
* License: GPL2
*/

function ts_wcag() {
  wp_enqueue_script('script', plugins_url( 'assets/js/ts-wcag.js' , __FILE__ ), array('jquery'),'',true);
  wp_enqueue_style('style', plugins_url('assets/css/ts-wcag.css',__FILE__ ));
}

add_action('wp_enqueue_scripts', 'ts_wcag');