<template>
    <div  class="content">
        <div class="navBar">
            <div class="block">
                <i class="returnIcon returnStyle">&#xe655;</i>
            </div>
            <div style="flex: 1;">
                <div class="okButton">
                    <span>通过</span>
                </div>
            </div>
            <div class="navRight">
                <i class="returnIcon expandStyle">&#xe68d;</i>
            </div>
        </div>
        <div class="main">
            <div class="logoCard">
                <p class="text1">校园防疫    人人有责</p>
                <p class=text2>浙江工业大学宣</p>
                <div class="card">
                    <p>Everyone is responsible for edidemic prevention on campus</p>
                </div>
            </div>
            <div class="textContent">
                <p>
                    <span style="font-size:24px;">张依</span>
                    <span>校园通行码</span>
                    <span>Campus Pass Code</span>
                </p>
                <p>
                    管理学院
                </p>
                <p>331100199605165210</p>
                <p>生成时间 Generation time:</p>
                <p>2020-06-02 00:00:00</p>
                <p>到期时间 Expire Time</p>
                <p>2020-06-02 23:59:59</p>
            </div>

        </div>

    </div>
</template>
<style lang="less">
.content{
    background: #fff;
    padding-top: 50px;
    .navBar{
        width: 100%;
        height: 42px;
        background: #f5f5f5;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        .block{
            height: 100%;
            background: #4399df;
            width: 37px;
            text-align: center;
            line-height: 42px;
            font-size: 18px;
            color: #fff;
        }
        .okButton{
            width: 86px;
            height: 34px;
            background: #fff;
            color: #449271;
            font-size: 13px;
            line-height: 34px;
            text-align: center;
            border: 1px solid #e9e9e9;
            border-radius: 4px;
            box-shadow:#e9e9e9 0 2px 12px;
            margin-left: 9px;
        }
        .navRight{
            font-size: 30px;
        }
    }
    .main{
        margin-left: 12px;
        width: 86%;
        .logoCard{
            padding-top: 20px;
            height: 120px;
            background: #a674d2;
            position: relative;
            p{
                color: #fff;
                &.text1{
                    text-align: right;
                    font-size: 32px;
                    font-family:PingFangSC-Bold,PingFang SC;
                    font-weight:600;
                    transform: scale(1.05,1.05);
                    margin-right: 30px;
                }
                &.text2{
                    font-size: 18px;
                    text-align: right;
                    margin-right: 45px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    line-height: 16px;
                    transform: scale(1.13,1);
                    margin-top: 10px
                }
            }
            .card{
                width: 83%;
                margin: 0 auto;
                padding-top: 48px;
                background: #fff;
                position: absolute;
                bottom: -42px;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 10px 10px 0 0;
                p{
                    width: 107%;
                    color: #000 !important;
                    font-size: 12px;
                    text-align: center;
                    transform: translateX(-12px);
                }
            }
        }
        .textContent{
            width: 83%;
            padding-top: 42px;
            font-size: 12px;
            margin-left: 12px;
            text-align: center;
        }
    }
}
</style>

<script>
export default{
    data(){
        return{
            text:'方法'
        }
    }
}
</script>