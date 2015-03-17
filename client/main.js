/**
 * Created by ystyle on 15-3-17.
 */
Meteor.startup(function() {
    Tracker.autorun(function() {
        console.log('There are ' + Posts.find().count() + ' posts');
    });
});