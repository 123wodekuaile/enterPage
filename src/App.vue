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
                <img class="logoStyle" src="./assets/images/logo3.png" alt="">
            </div>
            <div class="card">
                <p>Everyone is responsible for edidemic prevention on campus</p>
            </div>
            <div class="textContent">
                <p class="marginT10">
                    <span class="bigText marginR10" style="color:#000;">张依</span>
                    <span class="bigText marginR10" style="color:#3b4841">校园通行码</span>
                    <span class="middleText" style="color:#3b4841">Campus Pass Code</span>
                </p>
                <p style="margin-top: 0.45rem;">
                    <span style="color:#000;font-size:0.48rem">管理学院</span>
                </p>
                <p style="font-size:0.44rem;color:#000;margin-top:0.2rem">33250119960516022x</p>
                <p style="margin-top:0.4rem;font-size:0.26rem;color:#a1a1a1;">生成时间 Generation time:</p>
                <p style="margin-top:0.32rem;font-size:0.3rem;color:#000;">2020-06-08 00:00:00</p>
                <p style="margin-top:0.32rem;font-size:0.26rem;color:#a1a1a1;">到期时间 Expire Time</p>
                <p style="margin-top:0.32rem;font-size:0.3rem;color:#000;">2020-06-08 23:59:59</p>
                <div style="margin-top:0.32rem;">
                    <img class="imgStyle" src="./assets/images/ercode.png" alt="">
                </div>
                <p style="text-align: left;font-size: 0.26rem;line-height:0.5rem;margin-top:0.5rem;"> <span style="margin-right:0.5rem;"></span> 凭此码可在学校朝晖校区、屏峰校区、莫干山校区范围内配合有效证件通行，请主动出示，配合检查。</p>
                <p style="text-align: left;font-size: 0.26rem;line-height:0.5rem"> <span style="margin-right:0.5rem;"></span> This code can be used to pass with valid documents in the Zhaohui campus.Pingfeng campus and Moganshan campus,plaease zhudong chushiyixi thanks for gad</p>
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
        height: 1.17rem;
        background: #f5f5f5;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        .block{
            height: 100%;
            background: #4399df;
            width: 0.98rem;
            text-align: center;
            line-height: 1.1rem;
            font-size: 18px;
            color: #fff;
        }
        .okButton{
            width: 2.36rem;
            height: 0.94rem;
            background: #fff;            
            text-align: center;
            border: 1px solid #e9e9e9;
            border-radius: 4px;
            box-shadow:#e9e9e9 0 3px 12px;
            margin-left: 9px;
            span{
                color: #449271;
                font-size: 14px;
                line-height: 0.94rem;
                font-family: PingFangSC-Medium,PingFang SC;;
                font-weight: 600;
            }
        }
        .navRight{
            font-size: 30px;
        }
    }
    .main{
        margin-left: 0.26rem;
        margin-right: 1.07rem;
        .logoCard{
            padding-top: 0.2rem;
            height: 3rem;
            background: #a674d2;
            width: 100%;
            position: relative;
            .logoStyle{
                z-index: 1;
                width: 2.9rem;
                height: 2.9rem;
                position: absolute;
                top: 0;
                left: 0.45rem;
                top: 0.45rem;
                opacity: 0.7;
            }
            p{
                color: #fff;
                &.text1{
                    text-align: center;
                    font-size: 32px;
                    font-family:PingFangSC-Bold,PingFang SC;
                    font-weight:600;
                    transform: scale(1.01,1.01);
                    z-index: 99;
                    position: relative;
                }
                &.text2{
                    font-size: 18px;
                    text-align: right;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    line-height: 16px;
                    transform: scale(1.13,1);
                    margin-top: 8px;
                    margin-right: 1.27rem;
                    opacity: 0.8;
                    z-index: 99;
                }
            }
        }
        .card{
                width: 7.25rem;
                padding-top: 1rem;
                margin: 0 auto;
                background: #fff;
                border-radius: 10px 10px 0 0;
                margin-top: -0.9rem;
                position: relative;
                z-index: 2;
                p{
                    width: 107%;
                    color: #000 !important;
                    font-size: 12px;
                    text-align: center;
                    transform: translateX(-12px);
                }
            }
        .textContent{
            text-align: center;
            .marginR10{
                margin-right: 0.32rem;
            }
            .marginT10{
                margin-top: 0.64rem;
            }
            .bigText{
                font-size: 0.5rem;
            }
            .middleText{
                font-size: 0.34rem;
            }
            .imgStyle{
                width: 4rem;
                height: 4rem;
            }
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