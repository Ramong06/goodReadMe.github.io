// function to generate markdown for README
function generateMarkdown(data) {
  return `# Hi my name is ${data.title} and i am
from ${data.location}
![GitHub license](https://img.shields.io/badge/license-${data.license}-${data.color}.svg)
`;
}

module.exports = generateMarkdown;
