<template>
<div class="button" @click="touchBox">
    <p id="hi" @click="touchMe($event)">点击我</p>
</div>
</template>
<style lang="less">
.button{
    width: 120px;
    height: 80px;
    background: #ccc;
    color: #fff;
    font-size: 26px;
    text-align: center;
    line-height: 80px;
}
</style>

<script>
export default{
    data(){
        return{
            res:{
                name:'chenning',
                age:'12'
            },
            obj:{
                hihi:'this',
                time:'date',
                name:'chen'
            },
            number:90.78
        }
    },
    mounted(){
        this.handleTest()
    },
    methods:{
        touchMe(e){
            console.log('点击我了')
            console.log(location)
            e.stopPropagation();
        },
        touchBox(){
            console.log('也点击我了')
        },
        handleTest(){
            //向下取证
            // let arr = Object.keys(this.res);
            // arr.forEach((item)=>{
            //     if (item==='name'){
            //         console.log('123')
            //         console.log(Object.assign(this.res,this.obj))
            //     }
            // })
            // 几天几小时几分钟几秒
        },
        goBack(){
            
        }
    }
}
</script>