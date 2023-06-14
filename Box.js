// Registering component in log-component.js
AFRAME.registerComponent('move-box', {
    schema: {
      moveX: {type: "number", default: 1}
    },
    tick:function (){
        var pos = this.el.getAttribute("position")
        //var rotate = this.el.getAttribute("rotation")
        pos.x = this.data.moveX
        //rotate.x = this.data.moveX
        //rotate.y = this.data.moveY
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
        //this.el.setAttribute("rotation", {x:rotate.x, y:rotate.y, z:rotate.z})
    }
  });
