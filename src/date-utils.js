/**
 * @fileOverview 日時操作を行うためのJavascript Dateオブジェクトの拡張.
 * @author Yasuyuki Inoue
 * @version 0.0.1
 * 
 * @license date-utils.js
 * (c) 2014 Yasuyuki Inoue. https://github.com/yasu1230/date-utils-js
 * License: MIT
 */

(function() {
	'use strict';

	function polyfill(name, func)
	{
		if(Date.prototype[name] === undefined)
		{
			Date.prototype[name] = func;
		}
	}

	Date.WEEK_JP = ["日曜日", "月曜日", ];

	/**
	 * 
	 */
	Date.isValid = function (y, m, d, h, i, s, ms)
	{
		h = h || 0;
		i = i || 0;
		s = s || 0;
		ms = ms || 0;

		var dt = new Date(y < 100 ? y + 1900 : y, m - 1, d, h, i, s, ms);
		return y == dt.getFullYear()
			&& m == dt.getMonth() + 1
			&& d == dt.getDate()
			&& h == dt.getHours()
			&& i == dt.getMinutes()
			&& s == dt.getSeconds()
			&& ms == dt.getMilliseconds();
	}

	/**
	 * 
	 */
	var same = function (dt1, dt2)
	{
		return dt1.getFullYear() == dt2.getFullYear()
			&& dt1.getMonth() == dt2.getMonth()
			&& dt1.getDate() == dt2.getDate()
			&& dt1.getHours() == dt2.getHours()
			&& dt1.getMinutes() == dt2.getMinutes()
			&& dt1.getSeconds() == dt2.getSeconds()
			&& dt1.getMilliseconds() == dt2.getMilliseconds();
	}

	Date.today = function ()
	{
		return new Date().clearTime();
	}

	/**
	 * 
	 */
	polyfill('clearTime', function () {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);

		return this;
	});

	/**
	 * 
	 */
	polyfill('format', function (format, timestamp) {
		var result = '';
		return result + '';
	});

})();
