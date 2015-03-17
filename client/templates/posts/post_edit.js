/**
 * Created by ystyle on 15-3-18.
 */
Template.postEdit.events({
    'submit form': function (e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        }
        Posts.update(currentPostId,{$set:postProperties}, function (error) {
            if(error){
                alert(error.reason);
            }else{
                Router.go('postPage',{_id:currentPostId});
            }
        })
    },

    'click .delete': function (e) {
        e.preventDefault();

        if(confirm("真的要删除这帖子么::>_<::")){
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }
    }
})