/**
 * Created by ystyle on 15-3-18.
 */
Template.commentSubmit.createed = function () {
    Session.set('commentSubmitErrors', {});
};

Template.commentSubmit.helpers({
    errorMessage: function (field) {
        return Session.get('commentSubmitErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
    }
});

Template.commentSubmit.events({
    'submit form': function (e, template) {
        e.preventDefault();

        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            postId: template.data._id
        };

        var errors = {};
        if (!comment.body) {
            errors.body = "一定要把你的吐嘈写下来哦！";
            return Session.set('commentSubmitErrors', errors);
        }

        Meteor.call('commentInsert', comment, function (error, commentId) {
            if (error) {
                throwError(error.reason);
            } else {
                $body.val('');
            }
        });
    }
});