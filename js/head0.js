//这里负责初始导航栏
document.addEventListener('DOMContentLoaded', function() {  
    var navbar = document.querySelector('.navbar');  
    var isNavbarVisible = true; // 初始时导航栏是可见的  
    var scrollThreshold = 10; // 定义一个阈值，当滚动超过这个值时隐藏导航栏  
  
    window.addEventListener('scroll', function() {  
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;  
  
        // 检查是否应该显示或隐藏导航栏  
        var shouldShowNavbar = scrollTop <= scrollThreshold; // 当scrollTop小于或等于阈值时显示导航栏  
  
        // 如果导航栏的可见性状态应该改变，则更新类和状态  
        if (shouldShowNavbar !== isNavbarVisible) {  
            if (shouldShowNavbar) {  
                navbar.classList.add('visible');  
                navbar.classList.remove('hidden'); // 如果有'hidden'类，则移除它  
                isNavbarVisible = true;  
            } else {  
                navbar.classList.remove('visible');  
                navbar.classList.add('hidden'); // 添加'hidden'类来隐藏导航栏  
                isNavbarVisible = false;  
            }  
        }  
    });  
});