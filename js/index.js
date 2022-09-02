(function(window, document) {
  var Page = {
    /*
      模型名称：
      男孩：chitose
      小孩：haruto
      全身女孩：hibiki
      黑猫：hijiki
      女孩：izumi
      可爱小女孩koharu
      初音：miku
      小男孩：ni-j
      小女孩：nico
      初音小孩：nipsilon
      小孩：nito
      课桌女孩：shizuku
      猫：tororo
      女孩：tsumiki
      小孩：unitychan
      碗里狗：wanko
      女孩：z16
    */
    models: [ "chitose", "haruto", "hibiki", "hijiki", "izumi", "koharu", "miku", "ni-j", "nico", "nipsilon", "nito", "shizuku", "tororo", "tsumiki", "unitychan", "wanko", "z16" ],
    modelsIndex: 0,
    init: function() {
      this.initLive2d()
    },
    initLive2d: function() {
      this.modelsIndex = Math.floor(Math.random() * ((this.models.length - 1) - 0)) + 0;
      var md = this.models[this.modelsIndex]
      L2Dwidget.init({
        model: {
          jsonPath: "https://unpkg.com/live2d-widget-model-" + md + "@1.0.5/assets/" + md + ".model.json",
          scale: 1
        },
        display: {
          position: "left",
          width: 160,
          height: 380,
          hOffset: 80,
          vOffset: -70
        }, 
        mobile: {
          show: true,
          scale: 1
        }, 
        react: {
          opacityDefault: 0.9,
          opacityOnHover: 0.2
        }
      });
    }
  }
  Page.init()
})(window, document)