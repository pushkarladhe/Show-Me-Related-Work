<template>

  <div class="card" v-bind:style="cardStyle">
    <div class="md-subheading card-header card-outline-info h6 customBox testBox">
        {{boxHeaderProp}}
    </div>

    <!--Test
    <div class="testBox">
        {{ testBoxHeader }}
    </div>-->


    <div class="card-block" v-bind:style="cardBlockStyle">
         <div  v-bind:style="cardBlockContentStyle">
         <slot></slot>
         </div>
     </div> 
  </div>

</template>


<script>
  export default {
      data () {
        return {
          testBoxHeader: 'This is a box component'
        }
      },
      props: ['boxHeaderProp', 'cardStyle','cardBlockStyle', 'cardBlockContentStyle']
  };
</script>


<style>
.customBox{
  background: #35342f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
