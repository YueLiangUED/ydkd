(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    $('.clear').on('touchend','li',function () {
        var $this = $(this);
        //console.log($this.context.id);
        if($this.context.id == 'baozhuang'){//报装进度查询跳转
            window.location.href = '';
        }else if($this.context.id == 'baozhang'){//宽带报障进度查询跳转
            window.location.href = '';
        }else if($this.context.id == 'xiaoqu'){//开通小区查询跳转
            window.location.href = '';
        }else if($this.context.id == 'xufei'){//宽带续费跳转
            window.location.href = '';
        }else if($this.context.id == 'xiugai'){//修改联系电话跳转
            window.location.href = '';
        }else if($this.context.id == 'paizhang'){//宽带自助排障跳转
            window.location.href = '';
        }
    });
});
