//这里负责音频相关
document.addEventListener('click', function(event) {
    if (event.target.closest('a')) {                    
     return;                                     //  检查<a> 标签
    }
    if (event.target.closest('span')) {                    
        return;                                   
       }
    if (event.target.closest('video')) {                    
        return;                                   
       }
    // 新audio
    const newAudio = document.createElement('audio');
    newAudio.src = 'static/sound/ciallo.aac';
    newAudio.preload = 'auto'; // 预加载
    newAudio.autoplay = true;  // 自动播放
    newAudio.controls = false; // 隐藏控件

    // 播放
    newAudio.play().catch(error => {
        console.error('Error playing audio:', error);
    });

    // 清理
    newAudio.addEventListener('ended', function() {
        newAudio.remove();
    });
});