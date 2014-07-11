var swagger = require("swagger-node-express");
var param = require("../lib/paramTypes.js");
var url = require("url");

exports.getPostListByUser={
	"spec": {
		"description": "포스트 리스트를 리턴.",
		"path": "/getPostListByUser/{user_no}",
		"notes": "포스트 리스트를 리턴합니다. ",
		"summary": "get post list by user_no",
		"method": "GET", 
		"parameters": [
				param.path("user_no", "조회할 사용자 id", "string")
			,	param.query("page_no", "조회할 page no", "string")
			,	param.query("page_size", "조회할 page size", "string")
		],
		"errorResponses": [swagger.errors.invalid("user_no")],
		"nickname": "getPostListByUser"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.getPostById={
	"spec": {
		"description": "포스트 내용 리턴.",
		"path": "/getPostById/{post_id}",
		"notes": "포스트 정보를 리턴합니다. ",
		"summary": "get post list by user_no",
		"method": "GET", 
		"parameters": [
				param.path("post_id", "조회할 post id", "string")
			],
		"responseClass": "List[Post]",
		"errorResponses": [swagger.errors.invalid("post_id")],
		"nickname": "getPostById"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.getLatestPostList={
	"spec": {
		"description": "최근 글 리스트 리턴.",
		"path": "/getLatestPostList",
		"notes": "최근 글 리스트를 리턴합니다. ",
		"summary": "get post list",
		"method": "GET", 
		"parameters": [
				param.query("page_no", "조회할 page no", "string")
			,	param.query("page_size", "조회할 page size", "string")
			],
		"errorResponses": [],
		"nickname": "getLatestPostList"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
};

exports.writePost={
	"spec": {
		"description": "포스트 작성.",
		"path": "/writePost",
		"notes": "댓글 정보를 리턴합니다. ",
		"summary": "write post",
		"method": "POST", 
		"parameters": [
				param.body("Post", "등록할 post", "Post")
			],
		"errorResponses": [],
		"nickname": "writePost"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
}

exports.updatePost={
	"spec": {
		"description": "포스트 수정.",
		"path": "/updatePost/{post_id}",
		"notes": "포스트 수정. ",
		"summary": "update post",
		"method": "PUT", 
		"parameters": [
				param.body("Post", "수정할 post", "Post")
			],		
		"errorResponses": [swagger.errors.invalid("post_id")],
		"nickname": "updatePost"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
}

exports.deletePost={
	"spec": {
		"description": "포스트 삭제.",
		"path": "/deletePost/{post_id}",
		"notes": "댓글 정보를 리턴합니다. ",
		"summary": "get reply list",
		"method": "DELETE", 
		"parameters": [
				param.path("post_id", "조회할 post id", "string")
			],
		"errorResponses": [swagger.errors.invalid("post_id")],
		"nickname": "deletePost"
	},
	"action": function(req,res) {
		res.send({ 'user_id': req.params.user_id, 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
		//res.send({ 'user_id': 'test_id', 'user_nickname' : 'testuser', 'user_no' : '1231415', 'datatype': 'User'});
	}
}