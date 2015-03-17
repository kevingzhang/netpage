/**
 * Created by ystyle on 15-3-18.
 */
//绑定帖子标题
Template.layout.helpers({
    pageTitle: function () {
        return Session.get('pageTitle');
    }
});