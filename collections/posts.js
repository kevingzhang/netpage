/**
 * Created by ystyle on 15-3-17.
 */
// 初始化帖子
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function (userId,doc) {
        // 只允许登陆用户水贴
        return !!userId;
    }
});