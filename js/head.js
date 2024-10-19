//这里负责变化导航栏
document.addEventListener('DOMContentLoaded', function() {  
    var navbar = document.querySelector('.navbar');  
    var lastScrollTop = 0;  
    var isNavbarVisible = false; // 跟踪导航栏的可见性状态  
    var scrollThreshold = 10; // 定义一个阈值来处理滚动到顶部的逻辑  
  
    window.addEventListener('scroll', function() {  
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;  
  
        // 检查是否应该显示或隐藏导航栏  
        var shouldShowNavbar = scrollTop > scrollThreshold;  
  
        // 如果导航栏的可见性状态应该改变，则更新类和状态  
        if (shouldShowNavbar !== isNavbarVisible) {  
            if (shouldShowNavbar) {  
                navbar.classList.add('visible');  
                isNavbarVisible = true;  
            } else {  
                navbar.classList.remove('visible');  
                isNavbarVisible = false;  
            }  
        }  
  
        // 更新 lastScrollTop 以便下次比较（虽然在这个优化版本中它实际上没有被直接使用）  
        lastScrollTop = scrollTop;  
    });  
});