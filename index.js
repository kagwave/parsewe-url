
module.exports = (() => {

  const parseUrl = () => {

    let url = window.location.href;
    let origin = window.location.origin;
    let path = window.location.pathname;
    
    let queries = {};
  
    let queryString = url.replace(`${origin}${path}?`, '');
    let subqueries;
    subqueries = queryString.split('&');
  
    for (let i = 0; i < subqueries.length; i++) {
      let subquery = subqueries[i].split('=');
      let key = subquery[0];
      let value = subquery[1] ? subquery[1] : '';
      queries[key] = value;
    }

    return queries;
  }

  return parseUrl;

})();