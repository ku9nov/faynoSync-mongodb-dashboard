import mongoose from 'mongoose';

const ArtifactSchema = new mongoose.Schema({
    link: {
      type: String,
      required: true,
    },
    platform: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Platforms', 
      required: true,
    },
    arch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Archs', 
      required: true,
    },
    package: {
      type: String,
      required: true,
    },
  });

const ChangelogSchema = new mongoose.Schema({
    version: {
        type: String,
        required: true,
    },
    changes: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const AppSchema = new mongoose.Schema({
    app_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AppsNames',
    },
    version: {
      type: String,
      required: true,
    },
    channel_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channels',
    },
    published: {
      type: Boolean,
      default: false,
    },
    critical: {
      type: Boolean,
      default: false,
    },
    artifacts: [ArtifactSchema],
    changelog: [ChangelogSchema],
    updated_at: {
      type: Date,
      default: Date.now,
    },
  });

const App = mongoose.models.App || mongoose.model('App', AppSchema);

export default App;
