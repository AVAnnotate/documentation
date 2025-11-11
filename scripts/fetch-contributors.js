const fetch = require('node-fetch');
const fs = require('fs-extra');

const repo = 'AVAnnotate/documentation'; 
const outputFile = '_data/contributors.json';

(async () => {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/contributors?per_page=100`);
    const contributors = await res.json();

    const data = {};

    for (const user of contributors) {
      data[user.login] = {
        avatar_url: user.avatar_url,
        contributions: user.contributions
      };
    }

    await fs.writeJson(outputFile, data, { spaces: 2 });
    console.log(`Updated ${outputFile} with ${contributors.length} contributors.`);
  } catch (err) {
    console.error('Failed to fetch contributors:', err);
    process.exit(1);
  }
})();
