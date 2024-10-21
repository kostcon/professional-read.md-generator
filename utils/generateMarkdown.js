function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-blue.svg)`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Questions](#Questions)
  
  ## Deployed Application URL
  ${data.link}

  ## Screenshot
  ![alt-text](${data.screenshot})

  ## Languages & Dependencies
  ${data.usage}

  ## How to Use This Application:
  ${data.install}

  ## Contributors
  ${data.credits}
  
  ## Questions
  Please send your questions [here](mailto:${
    data.email
  }?subject=[GitHub]%20Dev%20Connect) or visit [github/${
    data.creator
  }](https://github.com/${data.creator}).
  `;
}

export default generateMarkdown;
