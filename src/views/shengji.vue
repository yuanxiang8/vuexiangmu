<template>
    <div>
        <div><router-link to="/wode"><img src="img/8.png"></router-link></div>
        <div class="tui">
            <div class="tui1">
                <h4>12个月</h4>
                <span>￥45</span>
                <p>￥144</p>
            </div>

            <div class="tui2">
                <h4>3个月</h4>
                <span>￥18</span>
                <p>￥36</p>
            </div>

            <div class="tui3">
                <h4>1个月</h4>
                <span>￥8</span>
                <p>￥14</p>
            </div>

            <div class="gong">
                <img src="img/9.png" class="img1">
                <span>您获得2折开通会员特权！</span>
                <input type="button" value="立即开通" id="bu1">
            </div>
        </div>

        <div class="te">
            <h2>VIP特权</h2>
            <ul>
                <li><img src="img/10.png" class="img2"><a>1000+精品名厨菜谱</a></li>
                <li><img src="img/10.png" class="img2"><a>每周上新</a></li>
                <li><img src="img/10.png" class="img2"><a>会员免打扰特权</a></li>
                <li><img src="img/10.png" class="img2"><a>VIP尊贵身份标识</a></li>
            </ul>
        </div>

        <div class="hui">
            <span>会员使用说明</span>
            <ol>
                <li>1、会员服务一经开通，不支持退款；</li>
                <li>2、如果遇到苹果手机支付问题，建议参考AppStore支付流程；</li>
                <li>3、若会员开通出现异常，请添加微信：caipu0520，我们会在2个工作日内出处理结果。</li>
                <li>4、会员常见问题、会员服务协议、用户隐私协议。</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .tui{
        border: 1px solid white;
        height: 140px;
        margin-top: 20px;
    }
    .tui1{
        border: 1px solid #e0e0e0;
        width: 110px;
        height: 120px;
        border-radius: 10px;
        margin-left: 20px;
    }
    h4{
        margin-left: 28px;
        margin-top: 25px;
    }
    .tui1 span{
        color: #e3b45c;
        font-size: 22px;
        margin-left: 30px;
    }
    .tui1 p{
        color: #999999;
        text-decoration: line-through;
        margin-left: 35px;
    }
    .tui1:hover{
        border: 1px solid orangered;
    }
    .tui2{
        border: 1px solid #e0e0e0;
        width: 110px;
        height: 120px;
        border-radius: 10px;
        position: relative;
        top: -122px;
        left: 150px;
    }
    h4{
        margin-left: 28px;
        margin-top: 25px;
    }
    .tui2 span{
        color: #e3b45c;
        font-size: 22px;
        margin-left: 26px;
    }
    .tui2 p{
        color: #999999;
        text-decoration: line-through;
        margin-left: 35px;
    }
    .tui2:hover{
        border: 1px solid orangered;
    }
    .tui3{
        border: 1px solid #e0e0e0;
        width: 110px;
        height: 120px;
        border-radius: 10px;
        position: relative;
        top: -244px;
        left: 280px;
    }
    h4{
        margin-left: 35px;
        margin-top: 25px;
    }
    .tui3 span{
        color: #e3b45c;
        font-size: 22px;
        margin-left: 32px;
    }
    .tui3 p{
        color: #999999;
        text-decoration: line-through;
        margin-left: 38px;
    }
    .tui3:hover{
        border: 1px solid orangered;
    }
    .gong{
        border: 1px solid white;
        height: 80px;
        width: 99%;
        position: absolute;
        top: 430px;
    }
    .img1{
        width: 50px;
        margin-left: 20px;
    }
    .gong span{
        position: relative;
        top: -3px;
        left: 3px;
    }
    #bu1{
        width: 99%;
        height: 40px;
        background-color: #fff1d2;
        border: 1px solid #fff1d2;
        color: #bd8f25;
        margin-top: 10px;
    }
    .te{
        border: 1px solid white;
        width: 99%;
        height: 520px;
        margin-top: 120px;
    }
    h2{
        margin-left: 20px;
    }
    .img2{
        width: 80px;
        margin-left: 20px;
        margin-top: 20px;
    }
    .te ul li a{
        position: relative;
        top: -40px;
        left: 10px;
        font-size: 20px;
    }
    .hui{
        border: 1px solid white;
        width: 99%;
        height: 260px;
    }
    .hui span{
        margin-left: 20px;
        font-weight: bold;
    }
    .hui ol li{
        color: #999999;
        margin-top: 10px;
        margin-left: 20px;
    }
</style>