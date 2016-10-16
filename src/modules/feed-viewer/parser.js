import { find, map, pathEq, pathOr, pipe } from 'ramda';

const getMeta = pathOr({}, ['metadata']);
const getUrl = pathOr([], ['url']);
const getId = pathOr('', ['id', 0]);
const getTitle = pathOr('', ['title', 0]);
const getHref = pathOr('', ['$', 'href']);
const getSelfUrl = pipe(find(pathEq(['$', 'rel'], 'self')), getHref);
const getAlternateUrl = pipe(find(pathEq(['$', 'rel'], 'alternate')), getHref);
const getItems = pathOr([], ['items']);

const getItemTitle = pathOr('', ['title', 0, '_']);
const getItemDesc = pathOr('', ['desc', 0, '_']);
const getItemLink = pathOr('', ['link']);

export default function feedParser(feed) {
  const meta = getMeta(feed);
  const url = getUrl(meta);
  return {
    meta: {
      id: getId(meta),
      title: getTitle(meta),
      selfUrl: getSelfUrl(url),
      alternateUrl: getAlternateUrl(url),
    },
    items: pipe(getItems, map(item => ({
      id: getId(item),
      title: getItemTitle(item),
      link: getItemLink(item),
      description: getItemDesc(item),
      date: item.date ? new Date(item.date) : null,
    })))(feed),
  };
}
