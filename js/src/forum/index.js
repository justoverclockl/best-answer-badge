import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('justoverclock/best-answer-badge', () => {
  extend(CommentPost.prototype, 'headerItems', function (items) {
    const post = this.attrs.post;
    const user = this.attrs.post.user();
    const baCount = user.data?.attributes?.bestAnswerCount
    const baCountSettings = app.forum.attribute('justoverclock-best-answer-badge.minimumBestAnswers') || 10

    if (user && !post.isHidden() && baCount !== undefined) {
      if(baCount >= baCountSettings) {
        items.add(
          'baBadge',
          <div className="ba-badge" title={baCount + ' ' + app.translator.trans('justoverclock-best-answer-badge.forum.bestAnswer')}>
            <i className="fas fa-graduation-cap"/>
          </div>);
      }
    }
  })
});
