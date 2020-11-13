const graphqlApiCall = (queryString) => {
  const url = 'https://api.github.com/graphql';
  const token = '29b142b97f3989db3b3c8863bcc0eb55127bec01';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + token,
  };
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: queryString,
      }),
    })
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const makeApiCall = () => {
  const gql = `query { 
        viewer { 
          name
               status{
            emojiHTML
          }
          login
          avatarUrl
          bio
          websiteUrl
               following{
            totalCount
          }
          followers{
            totalCount
          }
          repositories(first:20){
            totalCount
            nodes{
              name
              description
              forkCount
              primaryLanguage{
                name
                color
              }
            }
          }
        } 
      }`;
  try {
    return new Promise((resolve, reject) => {
      graphqlApiCall(gql)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  } catch (error) {
    console.log(error);
  }
};
