/**
 * MIT License
*/
!function(p,t,o,a){var s="menuAim",e={rowSelector:"> li",handle:"> a",submenuSelector:"*",submenuDirection:"right",openClassName:"open",tolerance:75,activationDelay:300,mouseLocsTracked:3,defaultDelay:300,enterCallback:p.noop,activateCallback:p.noop,deactivateCallback:p.noop,exitCallback:p.noop,exitMenuCallback:p.noop};function n(t,o){this.el=t,this.options=p.extend({},e,o),this._defaults=e,this._name=s,this.init()}n.prototype={init:function(){this.activeRow=null,this.mouseLocs=[],this.lastDelayLoc=null,this.timeoutId=null,this.openDelayId=null,this._hoverTriggerOn()},_mouseMoveDocument:function(t){obj=t.data.obj,obj.mouseLocs.push({x:t.pageX,y:t.pageY}),obj.mouseLocs.length>obj.options.mouseLocsTracked&&obj.mouseLocs.shift()},_mouseLeaveMenu:function(t){obj=t.data.obj,obj.timeoutId&&clearTimeout(obj.timeoutId),obj.openDelayId&&clearTimeout(obj.openDelayId),obj._possiblyDeactivate(obj.activeRow),obj.options.exitMenuCallback(this)},_mouseEnterRow:function(t){obj=t.data.obj,obj.timeoutId&&clearTimeout(obj.timeoutId),obj.options.enterCallback(this),obj._possiblyActivate(this)},_mouseLeaveRow:function(t){t.data.obj.options.exitCallback(this)},_clickRow:function(t){obj=t.data.obj,obj._activate(this),p(obj.el).find(obj.options.rowSelector).find(obj.options.handle).on("click",{obj:obj},obj._clickRowHandle)},_clickRowHandle:function(t){obj=t.data.obj,p(this).closest("li").hasClass(obj.options.openClassName)&&(obj._deactivate(),t.stopPropagation())},_activate:function(t){var o=this;t!=this.activeRow&&(this.openDelayId&&clearTimeout(this.openDelayId),0<parseInt(o.options.activationDelay,0)?o.activeRow?o._activateWithoutDelay(t):this.openDelayId=setTimeout(function(){o._activateWithoutDelay(t)},o.options.activationDelay):o._activateWithoutDelay(t))},_activateWithoutDelay:function(t){this.activeRow&&this.options.deactivateCallback(this.activeRow),this.options.activateCallback(t),this.activeRow=t},_deactivate:function(){this.openDelayId&&clearTimeout(this.openDelayId),this.activeRow&&(this.options.deactivateCallback(this.activeRow),this.activeRow=null)},_possiblyActivate:function(t){var o=this._activationDelay(),e=this;o?this.timeoutId=setTimeout(function(){e._possiblyActivate(t)},o):this._activate(t)},_possiblyDeactivate:function(t){var o=this._activationDelay(),e=this;o?this.timeoutId=setTimeout(function(){e._possiblyDeactivate(t)},o):(this.options.deactivateCallback(t),this.activeRow=null)},_activationDelay:function(){if(!this.activeRow||!p(this.activeRow).is(this.options.submenuSelector))return 0;var t=p(this.el).offset(),o={x:t.left,y:t.top-this.options.tolerance},e={x:t.left+p(this.el).outerWidth(),y:o.y},i={x:t.left,y:t.top+p(this.el).outerHeight()+this.options.tolerance},a={x:t.left+p(this.el).outerWidth(),y:i.y},s=this.mouseLocs[this.mouseLocs.length-1],n=this.mouseLocs[0];if(!s)return 0;if(n||(n=s),n.x<t.left||n.x>a.x||n.y<t.top||n.y>a.y)return 0;if(this.lastDelayLoc&&s.x==this.lastDelayLoc.x&&s.y==this.lastDelayLoc.y)return 0;function l(t,o){return(o.y-t.y)/(o.x-t.x)}var c=e,u=a;"left"==this.options.submenuDirection?(c=i,u=o):"below"==this.options.submenuDirection?(c=a,u=i):"above"==this.options.submenuDirection&&(c=o,u=e);var h=l(s,c),r=l(s,u),v=l(n,c),b=l(n,u);return h<v&&b<r?(this.lastDelayLoc=s,this.options.defaultDelay):(this.lastDelayLoc=null,0)},_outsideMenuClick:function(t){var o=t.data.obj;p(o.el).not(t.target)&&0===p(o.el).has(t.target).length&&(o.options.deactivateCallback(o.activeRow),o.activeRow=null)},_hoverTriggerOn:function(){p(this.el).on("mouseleave",{obj:this},this._mouseLeaveMenu).find(this.options.rowSelector).on("mouseenter",{obj:this},this._mouseEnterRow).on("mouseleave",{obj:this},this._mouseLeaveRow),p(t).on("blur",{obj:this},this._mouseLeaveMenu),p(o).on("mousemove",{obj:this},this._mouseMoveDocument)},_hoverTriggerOff:function(){p(this.el).off("mouseleave",this._mouseLeaveMenu).find(this.options.rowSelector).off("mouseenter",this._mouseEnterRow).off("mouseleave",this._mouseLeaveRow),p(t).off("blur",this._mouseLeaveMenu),p(o).off("mousemove",{obj:this},this._mouseMoveDocument)}},p.fn[s]=function(o){var e,i=arguments;return o===a||"object"==typeof o?this.each(function(){p.data(this,"plugin_"+s)||p.data(this,"plugin_"+s,new n(this,o))}):"string"==typeof o&&"_"!==o[0]&&"init"!==o?(this.each(function(){var t=p.data(this,"plugin_"+s);t instanceof n&&"function"==typeof t[o]&&(e=t[o].apply(t,Array.prototype.slice.call(i,1))),"destroy"===o&&p.data(this,"plugin_"+s,null)}),e!==a?e:this):void 0}}(jQuery,window,document);