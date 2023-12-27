const parseUrl = (): Record<string, string> => {
  const url = window.location.href;
  const origin = window.location.origin;
  const path = window.location.pathname;

  const queries: Record<string, string> = {};

  const queryString = url.replace(`${origin}${path}?`, '');
  const subqueries = queryString.split('&');

  for (let i = 0; i < subqueries.length; i++) {
    const subquery = subqueries[i].split('=');
    const key = subquery[0];
    const value = subquery[1] ? subquery[1] : '';
    queries[key] = value;
  }

  return queries;
};

export default parseUrl;
