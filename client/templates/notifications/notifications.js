/**
 * Created by ystyle on 15-3-18.
 */
Template.notifications.helpers({
    notifications: function () {
        return Notifications.find({userId:Meteor.userId(),read:false});//这一行是你应该加排序条件的地方, find()可以有多个参数, 第二个参数可以 sort: 然后是你的排序条件. 后端的排序和 UI 显示无关
        
    },
    notificationCount: function () {
        return Notifications.find({userId:Meteor.userId(),read:false}).count();
    }
});

Template.notificationItem.helpers({
    notificationPostPath: function () {
        return Router.routes.postPage.path({_id:this.postId});
    }
});

Template.notificationItem.events({
    'click a': function () {
        Notifications.update(this._id,{$set:{read:true}});
    }
});
