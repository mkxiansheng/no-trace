/**
 * signOut.js
 * @authors mk
 * @date    2017-05-21
 * @version 1.0.0
 */

"use strict";

const express = require('express');
const router = express.Router();

const checkLogin = require('../middleware/check').checkLogin;

// 登出 
router.get('/', checkLogin, function (req, res, next) {

	//清空session中的用户信息
	req.session.user = null;
	req.flash('success','登出成功');
	res.redirect('/');

})

module.exports = router;