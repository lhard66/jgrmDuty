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
        <div v-for="item in [1,2,3,4,5,6]">
          <span class="label label-primary">刘天青</span>
          <i class="glyphicon glyphicon-remove"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.panel-heading{
  padding: 5px 15px;
}
.dropdown{
  display: inline-block;
  top: 1px;
  left: 95px;
}

#app .panel{
  width: 245px;
  height: 150px;
  float: left;
  margin-right: 10px;
}
#app .panel-body>div{
  width: 70px;
  height: 30px;
  float: left;
}
#app .panel-body>span{
}
#app .panel-body>div>i{
  top: -5px;
  right: 10px;
  color: #D84A4A;
  cursor: pointer;

}
</style>
