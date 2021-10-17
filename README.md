```typescript
//
// デバッグ実行用関数
// yarn node--loader ts - node / esm./ src / index.ts
//
(async () => {
  const clientOptions: ClientOptions = {
    auth: {
      clientID: '',
      clientPassword: '',
    },
  };
  const client = new Client(clientOptions);

  // const response = await client.getCourses();
  const response = await client.getCourseReviews({ courseID: 3197760 });

  const { status, statusText, data } = response;
  console.log('-----------------');
  console.log('-----------------');
  console.log('status: ', status);
  console.log('statusText: ', statusText);
  console.log('data: ', data.results[0]);
})();
//
//
//
```
