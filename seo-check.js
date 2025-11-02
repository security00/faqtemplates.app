// SEO Validation Script for FAQ Templates
// Checks keyword density, word count, and meta descriptions

const fs = require('fs');
const path = require('path');

// Function to extract text content from JSX/TSX files
function extractTextContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract text from JSX elements (simplified)
  const textMatches = content.match(/>[^<>{}]+</g);
  if (!textMatches) return '';

  return textMatches
    .map(match => match.slice(1, -1).trim())
    .filter(text => text.length > 0)
    .join(' ');
}

// Function to count words
function countWords(text) {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

// Function to calculate keyword density
function calculateKeywordDensity(text, keyword) {
  const words = text.toLowerCase().split(/\s+/);
  const keywordWords = keyword.toLowerCase().split(/\s+/);

  let count = 0;
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    let match = true;
    for (let j = 0; j < keywordWords.length; j++) {
      if (words[i + j] !== keywordWords[j]) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }

  return (count / words.length) * 100;
}

// Function to extract metadata
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);

  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descriptionMatch ? descriptionMatch[1] : null
  };
}

// Pages to check
const pages = [
  { path: 'app/page.tsx', keywords: ['faq templates', 'faq generator', 'ai faq'] },
  { path: 'app/templates/faq/page.tsx', keywords: ['faq templates', 'customizable faq'] },
  { path: 'app/templates/shopify/page.tsx', keywords: ['shopify faq', 'e-commerce faq'] },
  { path: 'app/guides/how-to-generate/page.tsx', keywords: ['generate faq', 'create faq'] },
  { path: 'app/guides/tips-tricks/page.tsx', keywords: ['faq tips', 'faq optimization'] },
];

console.log('FAQ Templates SEO Analysis Report');
console.log('=====================================\n');

pages.forEach(page => {
  const filePath = path.join(__dirname, page.path);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${page.path}`);
    return;
  }

  console.log(`📄 Page: ${page.path}`);

  // Extract metadata
  const metadata = extractMetadata(filePath);
  console.log(`   Title: ${metadata.title || 'Not found'}`);
  console.log(`   Title Length: ${metadata.title ? metadata.title.length : 0} chars`);
  console.log(`   Description: ${metadata.description || 'Not found'}`);
  console.log(`   Description Length: ${metadata.description ? metadata.description.length : 0} chars`);

  // Extract text content
  const textContent = extractTextContent(filePath);
  const wordCount = countWords(textContent);

  console.log(`   Word Count: ${wordCount}`);

  // Check keyword density
  page.keywords.forEach(keyword => {
    const density = calculateKeywordDensity(textContent, keyword);
    const status = density >= 3 && density <= 5 ? '✅' : density < 3 ? '⚠️ Low' : '❌ High';
    console.log(`   "${keyword}" density: ${density.toFixed(2)}% ${status}`);
  });

  // SEO checks
  const titleOk = metadata.title && metadata.title.length >= 40 && metadata.title.length <= 60;
  const descOk = metadata.description && metadata.description.length >= 140 && metadata.description.length <= 160;
  const wordCountOk = wordCount >= 800;

  console.log(`   Title Length OK: ${titleOk ? '✅' : '❌'}`);
  console.log(`   Description Length OK: ${descOk ? '✅' : '❌'}`);
  console.log(`   Word Count OK (800+): ${wordCountOk ? '✅' : '❌'}`);

  console.log('');
});

console.log('SEO Guidelines:');
console.log('- Title: 40-60 characters');
console.log('- Description: 140-160 characters');
console.log('- Word count: 800+ words per page');
console.log('- Keyword density: 3-5%');