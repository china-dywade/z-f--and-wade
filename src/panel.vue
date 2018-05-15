<template>
    <div class="panelContainer c-t-m">
        <p>{{prop.title}}</p>
        <div class="panel-cpmponents-container">
            <component :is='item.com' v-for='(item,i) in comList' :key='i'></component>
        </div>
    </div>
</template>

<script>

export default {
    props:['prop'],
    data(){
      return {
        comList:[]
      }
    },
    created:function(){
      let _com = () => import ('../src/panellist/' + this.prop.components);
      this.comList.push({com:_com})
    }
}
</script>

<style>


</style>
