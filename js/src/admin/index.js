import app from 'flarum/admin/app';

app.initializers.add('justoverclock/best-answer-badge', () => {
  app.extensionData
    .for('justoverclock-best-answer-badge')
    .registerSetting({
      setting: 'justoverclock-best-answer-badge.minimumBestAnswers',
      name: 'justoverclock-best-answer-badge.minimumBestAnswers',
      type: 'number',
      label: app.translator.trans('justoverclock-best-answer-badge.admin.minimumBa'),
      help: app.translator.trans('justoverclock-best-answer-badge.admin.minimumBa-help'),
    })
});
