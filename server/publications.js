/**
 * Created by ystyle on 15-3-17.
 */
/**
 * 发布帖子，使客户端能查看到
 */
Meteor.publish('posts', function () {
    return Posts.find({flagged:false},{fields:{
        flagged:false
    }});
});

/**
 * 发布评论，使客户端能查看到
 */
Meteor.publish('comments', function (postId) {
    check(postId,String);//要加校验， 不然页面会卡死
    return Comments.find({postId:postId});
});

Meteor.publish('notifications', function () {
    return Notifications.find({userId:this.userId,read:false});
})