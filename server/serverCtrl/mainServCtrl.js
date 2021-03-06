const app = require('../../server.js');
const db = app.get('db');


module.exports = {
    getVideoById: (req, res) => {
    	db.getVideoById([req.params.id], (err, response) => {
    		if (err) {
    			res.send(err);
    		} else {
    			res.status(200).send(response);
    		}
    	});
    },
    findUser: function(username, password, cb) {
        db.findUser( [ username, password], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                cb( response );
            }
        });
    },
    signUp: ( req, res ) => {
        db.signUp( [ req.body.fname, req.body.lname, req.body.email, req.body.username, req.body.password, req.body.birthday ], (err, response) => {
            if (err) {
                console.log(err);
                res.send( "FAILURE" );
            } else {
                res.status(200).send( "SUCCESS" );
            }
        } )
    },
    getSearchResults: (req, res) => {
        db.getSearchResults(['%' + req.params.searchterm.toUpperCase() + '%'], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getFavoritesById: (req, res) => {
        db.getFavoritesById([req.params.id], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    addFavorite: (req, res) => {
        db.addFavorite([req.body.userID, req.body.videoID], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    removeFavorite: (req, res) => {
        db.removeFavorite([req.query.userid, req.query.videoid], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getProfile: (req, res) => {
        db.getProfile([req.params.id], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    addProfileImg: (req, res) => {
        db.addProfileImg([req.body.id, req.body.url], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },
    getCategoriesVideos: ( req, res ) => {
        db.getCategoriesVideos( [ req.body.selectedCategory ], ( err, response ) => {
            if( err ) {
                res.send( err );
            } else {
                res.status( 200 ).send( response );
            }
        });
    },
    checkFavorite: (req, res) => {
        db.checkFavorite([req.query.videoid, req.query.userid], (err, response) => {

            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getUserVideos: (req, res) => {
        db.getUserVideos([req.params.id], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getRecentVideos: (req, res) => {
        db.getRecentVideos( (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    mostpopularvideos: (req, res) => {
        db.mostpopularvideos( [], ( err, response) => {
            if( err ) {
                res.send( err );
            } else {
                res.status(200).send(response);
            }
        });
    },
    addComment: (req, res) => {
        db.addComment([req.body.userID, req.body.commentText, req.body.videoID], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getComments: (req, res) => {
        db.getComments([req.params.id], (err, response) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    addVideo: (req, res) => {
        db.addVideo([req.body.title, req.body.url, req.body.thumbnail_url, req.body.description, req.body.uploader_id, req.body.cat1, req.body.cat2, req.body.cat3], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },
    deleteUserVideo: (req, res) => {
        db.deleteUserVideo([req.query.id, req.query.uploader_id], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    },
    getSubscriptions: ( req, res ) => {
        db.getSubscriptions( [ req.params.userid ], ( err, response ) => {
            if( err ) {
                res.send( err );
            } else {
                res.status(200).send(response);
            }
        });
    },
    subscribe: (req, res) => {
        db.subscribe([req.body.userID, req.body.uploaderID], (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        });
    }
};


