'use strict';

var previousClickedMenuLink = undefined;

$('#akku_modal').on('click', function (e) {
  var cld = cloudinary.Cloudinary.new({ cloud_name: 'due5usvkm' });
  var demoplayer = cld.videoPlayer('doc-player').width(600);
  demoplayer.source(
    'https://res.cloudinary.com/azwraith/video/upload/v1620644035/akku_n50rcv.mp4'
  );
});

$('#infytrip_modal').on('click', function (e) {
  var cld = cloudinary.Cloudinary.new({ cloud_name: 'due5usvkm' });
  var demoplayer = cld.videoPlayer('infytrip-client-player').width(600);
  demoplayer.source(
    'https://res.cloudinary.com/azwraith/video/upload/v1620644035/infytrip_y1micy.mp4'
  );

  var cld2 = cloudinary.Cloudinary.new({ cloud_name: 'due5usvkm' });
  var demoplayer2 = cld2.videoPlayer('infytrip-dashboard-player').width(600);
  demoplayer2.source(
    'https://res.cloudinary.com/azwraith/video/upload/v1620643966/infytrip_dashboard_fk3hrz.mp4'
  );
});

$('#kunyov2_modal').on('click', function (e) {
  var cld = cloudinary.Cloudinary.new({ cloud_name: 'due5usvkm' });
  var demoplayer = cld.videoPlayer('kunyov2-player').width(600);
  demoplayer.source(
    'https://res.cloudinary.com/azwraith/video/upload/v1620644013/kunyov2_qzeq5y.mp4'
  );
});

$('#marketing_modal').on('click', function (e) {
  var cld = cloudinary.Cloudinary.new({ cloud_name: 'due5usvkm' });
  var demoplayer = cld.videoPlayer('marketing-player').width(600);
  demoplayer.source(
    'https://res.cloudinary.com/azwraith/video/upload/v1620643989/kunyomarketing_dnr0vm.mp4'
  );
});

$('#logistics_modal').on('click', function (e) {
  var cld = cloudinary.Cloudinary.new({ cloud_name: 'due5usvkm' });
  var demoplayer = cld.videoPlayer('logistics-player').width(600);
  demoplayer.source(
    'https://res.cloudinary.com/azwraith/video/upload/v1620644141/Kunyo_logistics_qvb4se.mp4'
  );
});

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
