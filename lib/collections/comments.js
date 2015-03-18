/**
 * Created by ystyle on 15-3-18.
 */
Comments = new Mongo.Collection('comments');

Meteor.methods({
    commentInsert: function (commentAttributes) {
        check(this.userId, String);
        check(commentAttributes, {
            postId: String,
            body: String
        });

        var user = Meteor.user();
        var post = Posts.findOne(commentAttributes.postId);

        if (!post) {
            throw new Meteor.Error('invalid-comment', '你吐嘈的主题不存在哦！');
        }
        comment = _.extend(commentAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        //更新帖子评论数
        Posts.update(comment.postId, {$inc: {commentsCount: 1}});

        // 插入评论，保存ID
        comment._id = Comments.insert(comment);

        //创建提示
        createCommentNotification(comment);

        return comment._id;
    }
})