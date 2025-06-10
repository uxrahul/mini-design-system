// Toggle dropdowns with animation and icon swap
    document.querySelectorAll('.menu-title').forEach(title => {
      title.addEventListener('click', () => {
        const menuItem = title.parentElement;
        const submenu = menuItem.querySelector('ul');
        const icon = title.querySelector('i');

        menuItem.classList.toggle('open');

        if (menuItem.classList.contains('open')) {
          submenu.style.maxHeight = submenu.scrollHeight + "px";
          icon.classList.remove('bx-chevron-down');
          icon.classList.add('bx-chevron-up');
        } else {
          submenu.style.maxHeight = null;
          icon.classList.remove('bx-chevron-up');
          icon.classList.add('bx-chevron-down');
        }
      });
    });

    // Toggle sidebar collapse
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    // Link active state
    // Highlight active sidebar link and parent menu title
    document.querySelectorAll('.menu-item ul li a').forEach(link => {
      link.addEventListener('click', () => {
        // Remove active from all links
        document.querySelectorAll('.menu-item ul li a').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.menu-title').forEach(el => el.classList.remove('active'));

        // Add active to clicked link
        link.classList.add('active');

        // Also activate parent menu-title
        const parentMenuItem = link.closest('.menu-item');
        const parentTitle = parentMenuItem.querySelector('.menu-title');
        if (parentTitle) {
          parentTitle.classList.add('active');
        }
      });
    });