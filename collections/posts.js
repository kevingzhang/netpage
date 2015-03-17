/**
 * Created by ystyle on 15-3-17.
 */
// 初始化帖子
Posts = new Mongo.Collection('posts');

//充许post集合插入，但要通过校验
Meteor.methods({
    postInsert: function (postAttributes) {
        // 校验器
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });

        var errors = validatePost(postAttributes);
        if(errors.title || errors.url){
            throw new Meteor.Error('invalid-post','一定要填写标题和网址哦！')
        }

        var postWithSameList = Posts.findOne({url: postAttributes.url});
        if (postWithSameList) {
            return {
                postExists: true,
                _id: postWithSameList._id
            }
        }

        var user = Meteor.user();
        // 设置默认值
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date(),
            flagged: false
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    }
});

Posts.allow({
    update: function (userId, post) {
        return ownsDocument(userId, post);
    },
    remove: function (userId, post) {
        return ownsDocument(userId, post);
    }
});

Posts.deny({
    update: function (userId, post, fieldNames) {
        // 只能修改如下两个字段
        return (_.without(fieldNames, 'url', 'title').length > 0);
    }
});

Posts.deny({
    update: function (userId,post,fieldNames,modifier) {
        var errors = validatePost(modifier.$set);
        return errors.title || errors.url;
    }
});

validatePost = function (post) {
    var errors = {};
    if (!post.title)
        errors.title = "一定要填写标题哦!";
    if (!post.url)
        errors.url =  "一定要填写网址哦!";
    return errors;
};