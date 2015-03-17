/**
 * Created by ystyle on 15-3-17.
 */
// 初始化帖子
Posts = new Mongo.Collection('posts');

//充许post集合插入，但要通过校验
Meteor.methods({
    postInsert: function (postAttributes) {
        // 校验器
        check(Meteor.userId(),String);
        check(postAttributes,{
            title:String,
            url:String
        });

        var postWithSameList = Posts.findOne({url:postAttributes.url});
        if(postWithSameList){
            return {
                postExists:true,
                _id:postWithSameList._id
            }
        }

        var user = Meteor.user();
        // 设置默认值
        var post = _.extend(postAttributes,{
            userId:user._id,
            author:user.username,
            submitted:new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id:postId
        };
    }
});