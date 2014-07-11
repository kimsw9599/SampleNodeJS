var swagger = require("swagger-node-express");
var param = require("../lib/paramTypes.js");
var url = require("url");

exports.getUser={
	"spec": {
		"description": "사용자 정보를 리턴합니다.",
		"path": "/getUser/{user_id}",
		"notes": "사용자 정보를 리턴합니다. ",
		"summary": "get user information",
		"method": "GET", 
		"parameters": [
				swagger.pathParam("user_id", "조회할 사용id", "string")
			],
		"responseClass": "User",
		"errorResponses": [swagger.errors.invalid("user_id")],
		"nickname": "getuser"
	},
	"action": function(req,res) {
		if(!req.params.user_id) throw swagger.errors.invalid('user_id');

		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.getUserByNo={
	"spec": {
		"description": "사용자 정보를 리턴합니다.",
		"path": "/getUserByNo/{user_no}",
		"notes": "사용자 정보를 리턴합니다. ",
		"summary": "get user information by user no",
		"method": "GET", 
		"parameters": [
				swagger.pathParam("user_no", "조회할 사용자 no", "string")
			],
		"errorResponses": [swagger.errors.invalid("user_no")],
		"nickname": "getUserByNo"
	},
	"action": function(req,res) {
		if(!req.params.user_id) throw swagger.errors.invalid('user_no');

		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.getUserDetailInfo={
	"spec": {
		"description": "사용자 상세 정보를 리턴합니다.",
		"path": "/getUserDetailInfo/{user_no}",
		"notes": "사용자 정보를 리턴합니다. ",
		"summary": "get user detail information by user no",
		"method": "GET", 
		"parameters": [
				swagger.pathParam("user_no", "조회할 사용자 no", "string")
			],
		"errorResponses": [swagger.errors.invalid("user_no")],
		"nickname": "getUserDetailInfo"
	},
	"action": function(req,res) {
		if(!req.params.user_id) throw swagger.errors.invalid('user_no');

		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.joinMember={
	"spec": {
		"description": "사용자 등록.",
		"path": "/joinMember",
		"notes": "사용자 등록.",
		"summary": "join member",
		"method": "POST", 
		"parameters": [
				param.body("UserDetail", "등록할 reply", "UserDetail")
			],
		"nickname": "joinMember"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.withdrawMember={
	"spec": {
		"description": "사용자 탈퇴.",
		"path": "/withdrawMember/{user_no}",
		"notes": "사용자 탈퇴.",
		"summary": "withdraw member",
		"method": "POST", 
		"parameters": [
				swagger.pathParam("user_no", "조회할 사용자 no", "string")
			],
		"nickname": "withdrawMember"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};


