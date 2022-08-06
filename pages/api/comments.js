

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = 'https://a1v/master'


const GraphToken = 'eyJhbGciOiJSUzI1jMsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsNmVyd2VhMjFwOXcwMXVrNThneGI1MXYvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjcxNzFkNjdhLTM3ZTItNDQ3MC1hMThmLWMzZTM5NGNmMDc2MiIsImp0aSI6ImNsNmh0OW1rczRiNGIwMXVxMjQ2cjNwYmgifQ.Hc1QIXeaH9sAly3eJDQbBcDEkq-_TM4PoWB-9J7uO6xHDKnJNtQ21Fn7btu72eRl5_LC4hPvdh6SqbBH4zhJ3-b4Cj8b6H3feWz-jgnmmO9gOuoBZ_2xtudWBvyWA_WGVO2ggjq7KfUljMl_Ph7BpKwMuzqHhwtdXpif4UZhoEPXgss6k2jx43n2N4m5kFGOlTgnLQ3YxHfCnR_6EYsHzlZJAH3HiaNYFMX89N_OpjQVnHegyV7497NsAe1FLaxqwR1gd_Rfhe4JAVBCgjVZoHjbxB2IFOCiVsg3LWqAx5ct4v8-F8_CUag2HeiHMwi67k80vIcVKwhQivitWfmB4lV4XGjlQAbzKugdtgvEBwrXa16_LnvQRqrle6154epPnxA6o1nR7PEixCwXPM3JrmQQM4oF8Z7_z8AoTzRMJZqpN5kWEH2Jhu7U3jHOw3EDRuvQ57tH8sajl37UCZeebz5DoPzxVque-JLk0bX3oxZstmTm-vvDwE265qLO8kOSnSPIQCR7ff8vyADcCcxFKPNkhkBWxjItBBtRlXKXt44zzxritqtIRSN1i9Ixn0CdQLjKaTDomzMDHgh9XYrvI89ynns_HhFtG2waOOB3RAime6KIjPp0OYa96hSpZVaVETf5w4OxPkXHa9bUpZUacgnCDCo3JNjNudtvbKsV_k0'

// export a default function for API route to work
export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${GraphToken}`,
    },
  });
  
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug,
    });
  
    return res.status(200).send(result);
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }

 
}
