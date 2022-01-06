import * as React from "react";
import { graphql, Link } from 'gatsby';
import { MainApp } from '../components/core/MainApp';

const IndexPage = ({ data }) => {

  console.log('toy aca en el index...');
  console.log('el contenido de data es', data);

  return (
    <main>
      {
        console.log('aca en el render el contenido de data es', data)
      }
      <MainApp containerData={  data.graphCmsData }  />
    </main>
  )
};


export const query = graphql`
query {
  graphCmsData {
    mainMenus {
      menuLanguage
      optionsList
    }
    presentations {
      title
      subtitle
      avatar {
        url
      }
      shortPresentation
    }
    knowledgeAreas (orderBy: createdAt_ASC) {
        title
        description
        aditionalComment
        skillsList
    }
    skills (orderBy: levelKnowledge_DESC	)  {
      title
      levelKnowledge
    }
    workExperiences (orderBy: startDate_DESC ) {
       startDate
       position
       companyName
       companyLogo {
         id
         url
       }
       period
       shortDescription
       techStack
    }
    repositories {
      name
      linkRepo
      image {
        id
      }
    }
    contactSections {
      ttitle
      description
      contactAddressList
    }
    footers {
      primaryText
      secondaryText
    }
  }
}`;

export default IndexPage;
