/**
 * Created by ystyle on 15-3-17.
 */
//路由配置：布局模板，加载中，找不到页面
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('notifications');
    }
});

//帖子列表
Router.route('/:postsLimit?', {
    name: 'postsList'
});

//单个帖子
Router.route('/posts/:_id', {
    name: 'postPage',
    waitOn: function () {
        return [
            Meteor.subscribe('singlePost',this.params._id),
            Meteor.subscribe('comments', this.params._id)
        ];
    },
    data: function () {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    waitOn: function () {
        return Meteor.subscribe('singlePost',this.params._id)
    },
    data: function () {
        return Posts.findOne(this.params._id);
    }
});

// 水贴
Router.route('/submit/new', {name: 'postSubmit'});

var requireLogin = function () {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

// 404
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});

PostsListController = RouteController.extend({
    template: 'postsList',
    increment: 5,
    postsLimit: function () {
        return parseInt(this.params.postsLimit) || this.increment;
    },
    findOptions: function () {
        return {sort: {submitted: -1}, limit: this.postsLimit()};
    },
    subscriptions: function () {
        this.postsSub = Meteor.subscribe('posts',this.findOptions());
    },
    posts: function () {
        return Posts.find({}, this.findOptions());
    },
    data: function () {
        var hasMore = this.posts().count() === this.postsLimit();
        var netPath = this.route.path({postsLimit: this.postsLimit() + this.increment})
        return {
            posts: this.posts(),
            ready:this.postsSub.ready,
            nextPath: hasMore ? netPath : null
        };
    }
});