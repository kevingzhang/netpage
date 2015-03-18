/**
 * Created by ystyle on 15-3-17.
 */
//路由配置：布局模板，加载中，找不到页面
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate:'notFound',
    waitOn: function () {
        return [Meteor.subscribe('posts'),Meteor.subscribe('notifications')];
    }
});

//帖子列表
Router.route('/', {name: 'postsList'});

//单个帖子
Router.route('/posts/:_id', {
    name: 'postPage',
    waitOn: function () {
        return Meteor.subscribe('comments',this.params._id);
    },
    data: function () {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/posts/:_id/edit',{
    name:'postEdit',
    data: function () {
        return Posts.findOne(this.params._id);
    }
});

// 水贴
Router.route('/submit',{name:'postSubmit'});

var requireLogin = function () {
    if(!Meteor.user()){
        if(Meteor.loggingIn()){
            this.render(this.loadingTemplate);
        }else{
            this.render('accessDenied');
        }
    }else{
        this.next();
    }
}

// 404
Router.onBeforeAction('dataNotFound',{only:'postPage'});
Router.onBeforeAction(requireLogin,{only:'postSubmit'});