'use strict';

var previousClickedMenuLink = undefined;

$(document).on('ready', function (event) {
  console.log('ready');

  var portfolioItems = $('.portfolio-cards').children();
  console.log({ portfolioItems });

  portfolioItems.hide();

  portfolioItems.each(function (index, value) {
    var item = $(value);
    if (item.data('portfolio-tag') === 'web-sites') {
      item.fadeIn({ duration: 500 });
    }
  });

  previousClickedMenuLink = $('#web_sites_href');

  $('#web_sites_href').addClass('portfolio-menu__link--active');
});
//Filter project cards
$('.portfolio-menu').on('click', 'a', function (event) {
  event.preventDefault();

  if (previousClickedMenuLink) {
    previousClickedMenuLink.removeClass('portfolio-menu__link--active');
  }
  var link = $(event.target);
  link.addClass('portfolio-menu__link--active');
  previousClickedMenuLink = link;

  var targetTag = $(event.target).data('portfolio-target-tag');
  var portfolioItems = $('.portfolio-cards').children();

  console.log({ targetTag });

  if (targetTag === 'all') {
    portfolioItems.fadeIn({ duration: 500 });
  } else {
    portfolioItems.hide();
  }

  portfolioItems.each(function (index, value) {
    var item = $(value);
    if (item.data('portfolio-tag') === targetTag) {
      item.fadeIn({ duration: 500 });
    }
  });
});
