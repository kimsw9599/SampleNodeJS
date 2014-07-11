exports.models = {
	"User" : {
		"id" : "User",
		"properties": {
			"user_id" : {
				"type" : "string",
				"description" : "user id"
			}
			,"user_nickname" : {
				"type" : "string",
				"description" : "user Nickname"
			},"user_no" : {
				"type" : "string",
				"description" : "user Number"
			}, "user_profile" : {
				"type" : "string",
				"description" : "user profile"
			}
		}
	},
	"UserDetail" : {
		"id" : "UserDetail",
		"properties": {
			"user_id" : {
				"type" : "string",
				"description" : "user id"
			}
			,"user_nickname" : {
				"type" : "string",
				"description" : "user Nickname"
			}
			,"user_no" : {
				"type" : "string",
				"description" : "user Number"
			}
			, "user_profile" : {
				"type" : "string",
				"description" : "user profile"
			}
			, "join_date" : {
				"type" : "string",
				"description" : "join date"
			}
			, "email" : {
				"type" : "string",
				"description" : "email"
			}
			, "birth" : {
				"type" : "string",
				"description" : "birth"
			}
			, "sex" : {
				"type" : "string",
				"description" : "sex"
			}
		}
	},
	"Post" : {
		"id" : "Post",
		"properties" : {
			"post_id" : {
				"type" : "string",
				"description" : "post id"
			},
			"title" : {
				"type" : "string",
				"description" : "Post Title"
			},
			"user" : {
				"type" : "User",
				"description" : "Author"
			},
			"content" : {
				"type" : "string",
				"description" : "Post Content"				
			},
			"reg_date" : {
				"type" : "string",
				"description" : "등록일"
			}, 
			"last_date" : {
				"type" : "string",
				"description" : "마지막 처리일"
			}
		}
	},
	"Reply" : {
		"id" : "Reply",
		"properties" : {
			"reply_id" : {
				"type" : "string",
				"description" : "reply id"
			},
			"user" : {
				"type" : "User",
				"description" : "writer"
			},
			"post_id" : {
				"type" : "string",
				"description" : "post id for reply"
			},
			"content" : {
				"type" : "string", 
				"description" : ""
			},
			"reg_date" : {
				"type" : "string",
				"description" : "등록일"
			}, 
			"last_date" : {
				"type" : "string",
				"description" : "마지막 처리일"
			}
		}
	},
	"ResponseData" : {
		"id" : "ResponseData",
		"properties" : {
			"errorCode" : {
				"type" : "string",
				"description" : "error code"
			},
			"errorMessage" : {
				"type" : "string",
				"description" : "error message"	
			},
			"data" : {
				"type" : "array",
				"items" : {
					"$ref" : "Object"
				}, 
				"description" : "result string"	
			},
		}
	}

}