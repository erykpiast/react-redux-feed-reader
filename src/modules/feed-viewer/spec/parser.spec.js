/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */

import { assert } from 'chai';

import feedParser from '../parser';
import fixture from './feed.fixture.json';

suite('feed parser', () => {
  let parsed;

  setup(() => {
    parsed = feedParser(fixture);
  });

  suite('meta', () => {
    test('id', () => {
      assert.equal(parsed.meta.id, 'unique_feed_id');
    });

    test('title', () => {
      assert.equal(parsed.meta.title, 'the feed');
    });

    test('selfUrl', () => {
      assert.equal(parsed.meta.selfUrl, 'http://example.com/feed');
    });

    test('alternateUrl', () => {
      assert.equal(parsed.meta.alternateUrl, 'http://example.com');
    });
  });

  suite('items', () => {
    let item;
    setup(() => {
      item = parsed.items[0];
    });

    test('collection', () => {
      assert.isArray(parsed.items);
      assert.lengthOf(parsed.items, 1);
    });

    test('id', () => {
      assert.equal(item.id, 'unique_id');
    });

    test('title', () => {
      assert.equal(item.title, 'the title');
    });

    test('link', () => {
      assert.equal(item.link, 'http://example.com/article/unique_id');
    });

    test('description', () => {
      assert.equal(item.description, '<div>some description</div>');
    });

    test('date', () => {
      assert.equal(item.date.getTime(), 1476533202000);
    });
  });
});
