/**
 * Created by ystyle on 15-3-17.
 */
Meteor.publish('posts', function () {
    return Posts.find(/*{flagged:false},{fields:{
        flagged:false
    }}*/);
});
