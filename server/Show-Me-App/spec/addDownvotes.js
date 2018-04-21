var request = require("request");
var base_url = "http://54.201.123.246:8081/relations/downvote/add?";

describe(" SHowMe Relations", function() {
  describe("GET /", function() {
	  
	//test to check if invalid Relation Id is properly handled by the application.
    it("returns status code 200", function(done) {
	  var relation_url = base_url + "domain=0&source=399838&destination=404723&user=user0";
      request.get(relation_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
	
	//test to check if invalid user Id is properly handled by the application.
    it("returns status code 200", function(done) {
	  var user_url = base_url + "domain=0&source=399838&destination=404723&user=user965";
      request.get(user_url, function(error, response, body) {
        expect(response.statusCode).not.toBe(200);
        done();
      });
    });
	  
	//test to see if all downvote is properly updated.
    it("updates the downvote for a user for a particular relation", function(done) {
	  var rel_url = base_url + "domain=0&source=399838&destination=404723&user=user0";
      request.get(rel_url, function(error, response, body) {
		var body_res = JSON.parse(body);
		console.log(body_res.body_res);
		expect(body_res.updated).toBe(true);			
		done();
      });
    });
  });
});

