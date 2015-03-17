/**
 * Created by ystyle on 15-3-17.
 */
// 绑定帖子 查找所有帖子
Template.postsList.helpers({
    posts: function () {
        return Posts.find();
    }
})