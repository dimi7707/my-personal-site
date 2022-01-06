const navigationSerializer = ( menuNavigation ) => {
  const navigationLinks = menuNavigation.optionsList.options.map((option, index) => (
    { name: option.name, href: option.slug, current: index === 0 }
  ));

  return navigationLinks;
};

export default navigationSerializer;
