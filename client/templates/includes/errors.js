/**
 * Created by ystyle on 15-3-18.
 */
Template.errors.helpers({
    errors: function () {
        return Errors.find();
    }
});

// 3 秒后把错误信息清理掉
Template.error.rendered = function () {
    var error = this.data;
    Meteor.setTimeout(function () {
        Errors.remove(error._id);
    },3000);
};