// function to generate markdown for README
function generateMarkdown(data) {
  return `#  ${data.title} 
 Description ${data.description}
 Table of Contents ${data.tableofContents}
 Contributors ${data.Contributing}
 Usage ${data.Usage}
`;
}

module.exports = generateMarkdown;
