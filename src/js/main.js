import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';
import '../../node_modules/masonry-layout/dist/masonry.pkgd.min';
import '../../node_modules/swiper/swiper-bundle.js';


import { App } from './parts/app.js'
import { Plugins } from './parts/plugins.js'
import { Parts } from './parts/parts.js'
import { Header } from './parts/header.js';
import { Home } from './parts/home.js';


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
  window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();

  window.header = new Header();
  window.header.init();

  window.home = new Home();
  window.home.init();
});

// ===========================================================================
