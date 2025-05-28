

var closeSidebarElements = document.getElementsByClassName("_close-sidebar");

for (var i = 0; i < closeSidebarElements.length; i++) {
    closeSidebarElements[i].addEventListener("click", function() {
        document.getElementsByClassName("page-wrapper")[0].classList.toggle("toggled");
    });
}

// Collapsible Sidebar Menu
$.sidebarMenu = function(menu) {
  var animationSpeed = 300;
  
  $(menu).on('click', 'li a', function(e) {
    var $this = $(this);
    var checkElement = $this.next();

    if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
    }

    //If the menu is not visible
    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
      //Get the parent menu
      var parent = $this.parents('ul').first();
      //Close all open menus within the parent
      var ul = parent.find('ul:visible').slideUp(animationSpeed);
      //Remove the menu-open class from the parent
      ul.removeClass('menu-open');
      //Get the parent li
      var parent_li = $this.parent("li");

      //Open the target menu and add the menu-open class
      checkElement.slideDown(animationSpeed, function() {
        //Add the class active to the parent li
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is('.treeview-menu')) {
      e.preventDefault();
    }
  });
}

$.sidebarMenu($('.sidebar-menu'))

document.getElementById('theme-light').addEventListener('click', function() {
  document.body.setAttribute('data-bs-theme', 'light');
  document.getElementById('theme-dark').classList.remove('active');
  this.classList.add('active');
});

document.getElementById('theme-dark').addEventListener('click', function() {
  document.body.setAttribute('data-bs-theme', 'dark');
  document.getElementById('theme-light').classList.remove('active');
  this.classList.add('active');
});