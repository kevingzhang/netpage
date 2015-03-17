/**
 * Created by ystyle on 15-3-17.
 */
// 绑定域名
Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    ownPost: function () {
        return this.userId === Meteor.userId();
    }
});