function loadJobs(){var e=jQuery(".jobs-content"),t=jQuery(".jobs-loader"),o=jQuery(".jobs-empty"),n=1*e.attr("data-page"),a={};return jobsLoading||"true"==e.attr("data-prevent")?!1:(jQuery("select.jobs-filter").each(function(e){a[jQuery(this).attr("name")]=jQuery(this).val()}),n=n>0?n:1,jobsLoading=!0,t.fadeIn(200),o.fadeOut(0),void jQuery.ajax({url:ajaxurl,type:"post",data:{action:"jobsAjaxGetList",page:n,filters:a},success:function(a){a.success&&a.result?(e.append(a.result).attr("data-page",++n),e.find(".jobs-item:even").addClass("even")):(e.attr("data-prevent",!0),1==n&&o.fadeIn(200)),jobsLoading=!1,t.fadeOut(0)},error:function(e){jobsLoading=!1,t.fadeOut(0),o.fadeIn(200)},dataType:"json"}))}function setCookie(e,t,o){var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);var a=n.toUTCString(),r=location.protocol.indexOf("https")>-1?"; secure":"";document.cookie=e+"="+t+"; expires="+a+"; path=/"+r}function getCookie(e){for(var t=e+"=",o=document.cookie.split(";"),n=0,a=o.length;a>n;n++){for(var r=o[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}var jobsLoading=!1;jQuery(document).ready(function(e){e(".fbn-mask--phone").mask("0",{translation:{0:{pattern:/[\s\d\)\(-]/,recursive:!0}}}),e(".fbn-mask--digits").mask("0",{translation:{0:{pattern:/[\d]/,recursive:!0}}}),e(".fbn-mask--letters").mask("S",{translation:{S:{pattern:/[\sA-Za-z-]/,recursive:!0}}}),e(".datepicker").datepicker({format:"dd.mm.yyyy",orientation:"bottom left"}),e(window).scroll(function(){e(window).scrollTop()>0?e("#topbottom_arr").addClass("up"):e("#topbottom_arr").removeClass("up")}),e("#topbottom_arr").click(function(t){t.preventDefault();var o=e("html, body");return e(this).hasClass("up")?o.stop().animate({scrollTop:0},500,"swing"):o.stop().animate({scrollTop:e(window).height()},500,"swing"),!1}),e(".toggle-menu").on("click",function(t){return t.preventDefault(),e(this).toggleClass("active"),e(".navbar-collapse").toggleClass("collapse"),e(".header__block--right.showSearch").removeClass("showSearch"),!1}),e(window).on("resize",function(){e(window).outerWidth()>991&&(e(".toggle-menu").removeClass("active"),e(".navbar-collapse").addClass("collapse"),e(".header__block--right.showSearch").removeClass("showSearch"))}),e(".header-search > a").on("click",function(){e(".header__block--right").toggleClass("showSearch")}),e(".header-line .select-country, .header .internet-banking-header").hover(function(){e(this).children(".sub-menu").slideDown(200)},function(){e(this).children(".sub-menu").slideUp(0)}),e("body").hasClass("page-template-jobs")&&(e(window).on("load",function(){loadJobs()}),e(window).on("scroll",function(){e(".jobs-item:last").length&&e(window).scrollTop()>e(".jobs-item:last").offset().top-2*e(".jobs-item:last").outerHeight(!0)&&loadJobs()}),e("select.jobs-filter").on("change",function(){e(".jobs-content").html("").removeAttr("data-page").removeAttr("data-prevent"),loadJobs()})),e(".industry-filter--industry").on("change",function(){location.href=e(this).val()}),e(".job-apply__button").on("click",function(){e(this).hide(),e(".job-apply__form").slideDown(200)}),e(".tablist .tab").on("click",function(){e(this).addClass("active").siblings().removeClass("active")}),e(".navbar .dropdown").click(function(t){t.hasOwnProperty("originalEvent")&&(document.location=e(".dropdown-toggle",this).attr("href"))}),e(".dropdown").hover(function(){e(".dropdown-toggle",this).trigger("click")}),setTimeout(function(){var t=getCookie("cookie-agreement");t||e(".cookie-agreement").removeClass("hidden")},1e3),e(document).on("click",".cookie-agreement__close, .cookie-agreement__submit",function(t){return t.preventDefault(),setCookie("cookie-agreement",!0,365),e(".cookie-agreement").addClass("hidden"),!1})});