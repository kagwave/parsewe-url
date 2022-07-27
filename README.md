# parsewe-url

Use this module to find a sun sign based on a date of birth.

## Installation

NPM:

```bash
npm install parwese-url
```

Yarn:

```bash
yarn add parwese-url
```

## Usage

Import the package.

```JavaScript
import parseUrl from 'parsewe-url';
```

The queries extracted after the ?, split at the &, and query values are extracted after the =.

Example:
```JavaScript
// url: 'https://localhost:9000/profile?fields=media,id,profile_photo&auth_token=35Df&8g_W4&redirect=/nextpage' 

queries = parseUrl(); 
console.log(queries); 
// {fields: 'media,id,profile_photo', auth_token: '35Df&8g_W4', redirect: '/nextpage'}
```