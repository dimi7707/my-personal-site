const workExperiencesSerializer = ( workData ) => {

  return workData.map( ( work ) => (
    {
      name: work.companyName,
      role: work.position,
      time: work.period,
      technologies: work.techStack.techs,
      logo: work.companyLogo.url,
      description: work.shortDescription
    }
  ));
};

export default workExperiencesSerializer;
