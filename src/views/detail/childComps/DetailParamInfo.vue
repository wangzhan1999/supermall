<template>
  <div class="paraminfo" v-if="Object.keys(detailParamsInfo).length !== 0">
    <p>参数信息</p>
    <table class="sizes" :key="index" v-for="(table, index) in detailParamsInfo.sizes">
      <tr :key="indey" v-for="(tr, indey) in table">
        <td :key="indez" v-for="(td, indez) in tr">{{ td }}</td>
      </tr>
    </table>
    <table class="info">
      <tr :key="index" v-for="(infotr, index) in detailParamsInfo.infos">
        <td>{{infotr.key}}</td>
        <td>{{infotr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    detailParamsInfo: Object,
    default() {
      return {}
    }
  }
}
</script>

<style scoped>
  .paraminfo{
    padding: 15px 5vw;
  }
  .sizes{
    width: 90vw;
    font-size: 14px;
  }
  .sizes tr{
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid #f2f5f8;
  }
  .sizes tr:last-of-type{
    border-bottom: 3px solid #f2f5f8;
  }
  .sizes tr td{
    flex: 1;
  }
  .info{
    font-size: 14px;
  }
  .info tr{
    display: block;
    border-bottom: 1px solid #f2f5f8;
    padding: 10px 0;
  }
  .info tr>td:first-of-type{
    width: 25vw;
  }
  .info tr>td:last-of-type{
    width: 75vw;
    color: var(--color-hiht-text);
  }
</style>