/**
 * Created by ystyle on 15-3-18.
 */
Template.postPage.helpers({
    comments: function () {
        return Comments.find({postId:this._id});
    }
});