/**
 * check.js
 * @authors mk
 * @date    2017-05-21
 * @version 1.0.0
 */

module.exports = {
	checkLogin: function (req, res, next) {
		if (!req.session.user) {
			req.flash('error','未登录');
			return res.redirect('/login')
		}
		next();
	},
	checkNoLogin: function (req, res, next) {
		if (req.session.user) {
			req.flash('error','已登录');
			return res.redirect('back');
		}
		next();
	}
}