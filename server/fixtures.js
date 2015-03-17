/**
 * Created by ystyle on 15-3-17.
 */
if (Posts.find().count() === 0) {
    Posts.insert({
        title: '百度',
        url: 'http://www.baidu.com'
    });
    Posts.insert({
        title: '谷戨',
        url: 'http://google.lxy520.net'
    });
    Posts.insert({
        title: 'Discover Meteor 中文版',
        url: 'http://zh.discovermeteor.com/chapters/templates/'
    });
}

