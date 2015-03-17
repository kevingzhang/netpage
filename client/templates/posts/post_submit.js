/**
 * Created by ystyle on 15-3-18.
 */
Template.postSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function (error, result) {
            // 显示错误信息并退出
            if (error) {
                return alert(error.reason);
            }

            if (result.postExists) {
                alert('该链接已经存在！');
            }
            Router.go('postPage', {_id: result._id});
        });

        /** 不建议用
         post._id = Posts.insert(post);

         Router.go('postPage',post);**/
    }
});