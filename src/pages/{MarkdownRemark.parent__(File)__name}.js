import React from 'react';
import { graphql } from 'gatsby';

const Page = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date, dateShort, dateLong }
    }
  }
}) => {
  return (
    <main>
      <h1>{title}</h1>
      <ul>
        <li>
          <time>{date}</time>
        </li>
        <li>
          <time>{dateShort}</time>
        </li>
        <li>
          <time>{dateLong}</time>
        </li>
      </ul>
    </main>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        dateShort: date(formatString: "MMM DD, YYYY")
        dateLong: date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default Page;
