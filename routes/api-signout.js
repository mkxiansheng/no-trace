/**
 * signOut.js
 * @authors mk
 * @date    2017-05-21
 * @version 1.0.0
 */

"use strict";

const express = require('express');
const router = express.Router();

const check = require('../middleware/check').check;

// 登出 
router.get('/', check, function (req, res, next) {

	//清空session中的用户信息
	req.session.user = null;
	let ret = {
		Code: 0
	}
	res.send(ret);

})

module.exports = router;