;
(function($, window, document, undefined) {
	var timePlayer = function() {
		return this.init.apply(this, arguments);
	};
	timePlayer.prototype = {
		defaults: {

		},
		init: function(node, options){
			this.options = $.extend({}, this.defaults, options);
		}
	};

	var pluginName = 'timePlayer';
	$.fn[pluginName] = function(option) {
		var args = arguments,
			result;

		this.each(function() {
			var $this = $(this),
				data = $.data(this, 'plugin_' + pluginName),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('plugin_' + pluginName, (data = new timePlayer(this, options)));
			}
			if (typeof option === 'string') {
				result = data[option].apply(data, Array.prototype.slice.call(args, 1));
			}
		});

		return result || this;
	};
	Date.prototype.format = function(format) {
	    var date = {
	       "M+": this.getMonth() + 1,
	       "d+": this.getDate(),
	       "h+": this.getHours(),
	       "m+": this.getMinutes(),
	       "s+": this.getSeconds(),
	       "q+": Math.floor((this.getMonth() + 3) / 3),
	       "S+": this.getMilliseconds()
	    };
	    if (/(y+)/i.test(format)) {
	       format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	    }
	    for (var k in date) {
	       if (new RegExp("(" + k + ")").test(format)) {
	           format = format.replace(RegExp.$1, RegExp.$1.length == 1
	              ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
	       }
	    }
	    return format;
	}

})(jQuery, window, document);