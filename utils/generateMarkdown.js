// function to generate markdown for README
function generateMarkdown(data) {
  return `#  ${data.title} 
 Description ${data.description}
 Table of Contents ${data.tableofContents}
 Contributors ${data.Contributing}
 Usage ${data.Usage}
![GitHub license](https://img.shields.io/badge/license-${data.license}-${data.color}.svg)
`;
}

module.exports = generateMarkdown;
