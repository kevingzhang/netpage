/**
 * Created by ystyle on 15-3-17.
 */
// 绑定帖子 查找所有帖子
Template.postsList.helpers({
    posts: function () {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});

Template.postsList.rendered = function () {
    this.find('.wrapper')._uihooks = {
        moveElement: function (node, next) {
            var $node = $(node),$next = $(next);
            var oldTop = $node.offset().top;
            var height = $node.outerHeight(true);

            //找出 next 与 node 之间所有的元素
            var $inBetween = $next.nextUntil(node);
            if($inBetween.length === 0){
                $inBetween = $node.nextUntil(node);

                //把 node 放在预订位置
                $node.insertBefore(next);

                // 测量新 top 偏移坐标
                var newTop = $node.offset().top;

                // 将 node *移回*至原始所在位置
                $inBetween
                    .removeClass('animate')
                    .css('top',oldTop<newTop?height:-1*height);

                $node.offset();

                // 动画，重置所有元素的 top 坐标为 0
                $node.addClass('animate').css('top', 0);
                $inBetween.addClass('animate').css('top', 0);
            }
        }
    }
};