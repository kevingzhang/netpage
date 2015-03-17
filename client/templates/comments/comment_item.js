/**
 * Created by ystyle on 15-3-18.
 */
Template.commentItem.helpers({
    submittedText: function () {
        new Date().toDateString()
        return this.submitted.toJSON().substring(0,19).replace('T',' ');
    }
})