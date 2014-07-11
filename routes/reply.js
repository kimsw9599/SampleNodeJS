var swagger = require("swagger-node-express");
var param = require("../lib/paramTypes.js");
var url = require("url");

exports.getReplyList={
	"spec": {
		"description": "댓글 정보를 리턴.",
		"path": "/getReplyList/{post_id}",
		"notes": "댓글 정보를 리턴합니다. ",
		"summary": "get reply list",
		"method": "GET", 
		"parameters": [
				param.path("post_id", "조회할 post id", "string")
			,	param.query("page_no", "조회할 page no", "string")
			,	param.query("page_size", "조회할 page size", "string")
			],
		"errorResponses": [swagger.errors.invalid("post_id")],
		"nickname": "getReplyList"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.writeReply={
	"spec": {
		"description": "댓글 작성.",
		"path": "/writeReply/{post_id}",
		"notes": "댓글 작성 ",
		"summary": "write reply",
		"method": "POST", 
		"parameters": [
				param.path("post_id", "조회할 post id", "string")
			,	param.body("Reply", "등록할 reply", "Reply")
			],
		"errorResponses": [swagger.errors.invalid("post_id")],
		"nickname": "writeReply"
	},
	"action": function(req,res) {
		

		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
}

exports.updateReply={
	"spec": {
		"description": "댓글 정보를 리턴.",
		"path": "/updateReply/{reply_id}",
		"notes": "댓글 정보를 리턴합니다. ",
		"summary": "update reply",
		"method": "PUT", 
		"parameters": [
				param.path("reply_id", "수정할 reply id", "string")
			,	param.body("Reply", "등록할 reply", "Reply")
			],
		"errorResponses": [swagger.errors.invalid("reply_id")],
		"nickname": "updateReply"
	},
	"action": function(req,res) {
		

		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
}

exports.deleteReply={
	"spec": {
		"description": "댓글 삭제.",
		"path": "/deleteReply/{reply_id}",
		"notes": "댓글 삭제. ",
		"summary": "delete reply",
		"method": "DELETE", 
		"parameters": [
				param.path("reply_id", "삭제할 reply id", "string")
			],
		"errorResponses": [swagger.errors.invalid("reply_id")],
		"nickname": "deleteReply"
	},
	"action": function(req,res) {
		

		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
}