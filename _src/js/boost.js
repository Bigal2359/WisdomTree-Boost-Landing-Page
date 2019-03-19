/* jshint browser: true, jquery: true, devel: true */
/* global boost, TweenMax, ScrollMagic, CSSPlugin, CustomEase */
(function(window, undefined){
  'use strict';

  var $screenSizes = [],
  mediaQuery = $('.mq'),
  password = document.getElementById('password'),
  confirmPassword = document.getElementById('confirm-password');

  var screenElementMobile = {};
  screenElementMobile.pixels = '1px';
  screenElementMobile.name = 'mobile';

  var screenElementTablet = {};
  screenElementTablet.pixels = '2px';
  screenElementTablet.name = 'tablet';

  var screenElementDesktop = {};
  screenElementDesktop.pixels = '3px';
  screenElementDesktop.name = 'desktop';

  $screenSizes = [screenElementMobile, screenElementTablet, screenElementDesktop];

  window.boost = {

    util : {
      
      currentScrnSize : function() {

        var finalScrnSize;

        for(var i=0, j=$screenSizes.length; i<j; i++) {

          if($screenSizes[i].pixels === mediaQuery.css('width')){
            finalScrnSize = $screenSizes[i].name;
          }
        }

        return finalScrnSize;
      }
    },

    clickScrollHandler : {

      buttonScroll : function() {
        $('.cta').on('click', function(){
          $('body, html').animate({
            scrollTop: ($('.l-form').offset().top)
          }, 500);
        });
      }
    },

    flipHandler : {

      setCards : function() {

        CSSPlugin.defaultTransformPerspective = 1000;

        TweenMax.set($('.boxes-small .box .box-content,'+
          '.boxes-medium .box .box-content,'+
          '.box .box-top'), {
          rotationX:-117,
          transformStyle:'preserve-3d',
          transformOrigin:'top center'
        });

        TweenMax.set($('.box .box-side'), {
          rotationY:117,
          transformStyle:'preserve-3d',
          transformOrigin:'center left'
        });

      },

      fadeBKGD : function() {

        var controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
          triggerElement: '.fade-point'
        })
        .setTween('.l-bkgd', 0.5, {
          opacity:0.5
        })
        .addTo(controller);

      },

      flipSmall : function (){

        var controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-1'
        })
        .setTween('.boxes-small .box-intro .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-2'
        })
        .setTween('.boxes-small .box-num-1 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-3'
        })
        .setTween('.boxes-small .box-num-2 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-4'
        })
        .setTween('.boxes-small .box-num-3 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-5'
        })
        .setTween('.boxes-small .box-num-4 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-6'
        })
        .setTween('.boxes-small .box-num-5 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-7'
        })
        .setTween('.boxes-small .box-num-6 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-8'
        })
        .setTween('.boxes-small .box-num-7 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-9'
        })
        .setTween('.boxes-small .box-num-8 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-10'
        })
        .setTween('.boxes-small .box-num-9 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-11'
        })
        .setTween('.boxes-small .box-num-10 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);
      },

      flipMedium : function (){

        var controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-1a'
        })
        .setTween('.boxes-medium .box-intro .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-2a',
          offset:100
        })
        .setTween('.boxes-medium .box-num-1 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-3a'
        })
        .setTween('.boxes-medium .box-num-2 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-4a',
          offset:100
        })
        .setTween('.boxes-medium .box-num-3 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-5a'
        })
        .setTween('.boxes-medium .box-num-4 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-6a',
          offset:100
        })
        .setTween('.boxes-medium .box-num-5 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-7a'
        })
        .setTween('.boxes-medium .box-num-6 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-8a',
          offset:100
        })
        .setTween('.boxes-medium .box-num-7 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-9a'
        })
        .setTween('.boxes-medium .box-num-8 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-10a',
          offset:100
        })
        .setTween('.boxes-medium .box-num-9 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-11a'
        })
        .setTween('.boxes-medium .box-num-10 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);
      },

      flipBig : function (){

        var controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-1b'
        })
        .setTween('.boxes-large .box-intro .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-2b',
          offset:100
        })
        .setTween('.boxes-large .box-num-1 .box-content', 0.5, {
          rotationY:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-3b'
        })
        .setTween('.boxes-large .box-num-2 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-4b',
          offset:100
        })
        .setTween('.boxes-large .box-num-3 .box-content', 0.5, {
          rotationY:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-5b'
        })
        .setTween('.boxes-large .box-num-4 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-6b',
          offset:100
        })
        .setTween('.boxes-large .box-num-5 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-7b'
        })
        .setTween('.boxes-large .box-num-6 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-8b'
        })
        .setTween('.boxes-large .box-num-7 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-9b',
          offset:100
        })
        .setTween('.boxes-large .box-num-8 .box-content', 0.5, {
          rotationY:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-10b'
        })
        .setTween('.boxes-large .box-num-9 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: '.flip-point-11b',
          offset:100
        })
        .setTween('.boxes-large .box-num-10 .box-content', 0.5, {
          rotationX:0,
          visibility:'visible',
          ease: CustomEase.create('custom', 'M0,0 C0.128,0.572' +
            '0.327,0.976 0.582,1.05 0.742,1.096 0.838,1 1,1')
        })
        .addTo(controller);
      },

      startPage: function() {
        this.setCards();
        this.fadeBKGD();
        this.flipSmall();
        this.flipMedium();
        this.flipBig();
      },

      init: function() {
        $(window).scroll(function() {
          boost.flipHandler.startPage();
          $(window).unbind('scroll');
        });
      }
    },

    forms : {

      passwordMatch: function() {
        console.log('validating password');

        if(password.value !== confirmPassword.value) {
          // console.log('confirm password do not match');
          confirmPassword.setCustomValidity('Passwords Do Not Match');
          return false;
        } else {
          // console.log('confirm password match');
          confirmPassword.setCustomValidity('');
          return true;
        }
      },

      inputFocusOut: function() {

        $('input, select').focusout(function() {
          var isValid = true;

          $('input, select').filter('[required]').each(function() {
            if ($(this).val() === '') {
              $('button').prop('disabled', true);
              isValid = false;
              return false;
            }
          });

          if(isValid) {
            $('button').prop('disabled', false);
          }

          boost.forms.passwordMatch();
        });
      },

      submitHandler: function() {

        $('button').on('click', function(){
          $('input, select').addClass('focused');
        });
      },

      init: function() {
        this.inputFocusOut();
        this.submitHandler();
      }
    },

    init: function(/*settings*/){
      this.flipHandler.init();
      this.clickScrollHandler.buttonScroll();
      this.forms.init();
    }
  };
})(this);

window.boost.init();
