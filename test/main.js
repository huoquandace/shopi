const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onscroll = function () {
  relativizeSidebarOnScrollToFooter();
  collapseSidebarOnScrollToFooter();
};

window.onload = e => {
  $('.bottom_collapse_btn').addEventListener('click', function () {
    toggleSidebar(false)
    userSidebarStatus = false
  })
  $('.top_collapse_btn > svg').addEventListener('click', function () {
    toggleSidebar(true)
    userSidebarStatus = true
  })
}

var userSidebarStatus = true
var lastScrollTop = 0;

function relativizeSidebarOnScrollToFooter() {
  sidebar = $(".sidebar")
  if (document.documentElement.scrollTop + window.innerHeight >= $("footer").offsetTop) {
    sidebar.style.position = 'absolute';
    sidebar.style.top = 'auto';
  } else {
    sidebar.style.position = 'fixed';
    sidebar.style.top = `${getVar('--header-height')}rem`;
  }
}

function collapseSidebarOnScrollToFooter() {
  st = document.documentElement.scrollTop;
  if (st < lastScrollTop) {
    if(document.documentElement.scrollTop + window.innerHeight < document.documentElement.offsetHeight - 100) {
      if (userSidebarStatus) toggleSidebar(true)
    }
  }
  else {
    if(document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 100 ) {
      toggleSidebar(false)
    }
  }
  lastScrollTop = st;
}


function toggleSidebar(sts) {
  if (sts) {
    $(".sidebar").classList.add('open')
    $(".sidebar").classList.remove('close')

    $(".top_collapse_btn").classList.remove('out')
    $(".top_collapse_btn").classList.add('in')
    
    $(".content").classList.add('collapse')
    $(".content").classList.remove('full')
  } else {
    $(".sidebar").classList.add('close')
    $(".sidebar").classList.remove('open')
    
    $(".top_collapse_btn").classList.add('out')
    $(".top_collapse_btn").classList.remove('in')

    $(".content").classList.add('full')
    $(".content").classList.remove('collapse')
  }
}

/* utils */

function is_numeric(str) {
  return /^\d+$/.test(str);
}

function getVar(variable) {
  value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  for (var i = 0; i < value.length; i++) {
    if (!is_numeric(value.charAt(i))) {
      return parseInt(value.slice(0, -i - 1))
    }
  }
};