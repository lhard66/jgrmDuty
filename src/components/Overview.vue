<template>
  <div>
    <h3>值日预览</h3>
    <div class="panel panel-default" v-for="item in ['一','二','三','四','五','六']">
      <div class="panel-heading">周{{item}}
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
            分配成员
            <span class="caret"></span>
          </button>
        </div>
      </div>
      <div class="panel-body">
        <div class="label-item" v-for="item in [1,2,3,4,5,6]">
          <span class="label label-primary">刘天青</span>
          <i class="glyphicon glyphicon-remove"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //通过ajax拿到假数据
    this.$http.get('/static/data.json').then((response) => {
      console.log(response)
    })
    return {
      msg: 123
    }
  }
}
</script>
<style>
/*bootstrap 部分*/

.panel-heading {
  padding: 5px 15px;
}

.dropdown {
  display: inline-block;
  top: 1px;
  left: 95px;
}

.panel {
  width: 245px;
  height: 150px;
  float: left;
  margin-right: 10px;
}


/*自定义部分*/

.label-item {
  width: 70px;
  height: 30px;
  float: left;
  cursor: default;
}

.label-item:hover i {
  display: block;
}

.label-item>i {
  display: none;
  position: relative;
  top: -25px;
  right: -45px;
  color: #D84A4A;
  cursor: pointer;
}


/*.label-item{
  >.remove{
    display:none;
  }
  &:hover .remove{
    display:block;
  }
}*/
</style>
