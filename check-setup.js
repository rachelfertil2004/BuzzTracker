import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎬 Trailer Tracker - Setup Checker\n');

// Check 1: .env file exists
const envPath = path.join(__dirname, 'server', '.env');
const envExists = fs.existsSync(envPath);

if (envExists) {
  console.log('✅ .env file found in server folder');
  
  // Check if it has an API key
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasApiKey = envContent.includes('TMDB_API_KEY=') && 
                    !envContent.includes('your_tmdb_api_key_here') &&
                    !envContent.includes('your_actual_api_key');
  
  if (hasApiKey) {
    console.log('✅ TMDb API key appears to be configured');
  } else {
    console.log('❌ TMDb API key not set or still using placeholder');
    console.log('   → Edit server/.env and add your actual TMDb API key');
  }
} else {
  console.log('❌ .env file NOT found in server folder');
  console.log('   → Copy server/.env.example to server/.env');
  console.log('   → Add your TMDb API key to the .env file');
}

// Check 2: Node modules installed
const checks = [
  { path: path.join(__dirname, 'node_modules'), name: 'Root' },
  { path: path.join(__dirname, 'server', 'node_modules'), name: 'Server' },
  { path: path.join(__dirname, 'client', 'node_modules'), name: 'Client' }
];

console.log('\n📦 Dependencies:');
checks.forEach(check => {
  if (fs.existsSync(check.path)) {
    console.log(`✅ ${check.name} dependencies installed`);
  } else {
    console.log(`❌ ${check.name} dependencies missing`);
    console.log(`   → Run: npm run install-all`);
  }
});

// Summary
console.log('\n📋 Next Steps:');
if (!envExists || !hasApiKey) {
  console.log('1. Get a free TMDb API key: https://www.themoviedb.org/settings/api');
  console.log('2. Create server/.env file with your API key');
  console.log('3. Run: npm run dev');
} else {
  console.log('✅ Setup looks good!');
  console.log('   Run: npm run dev');
  console.log('   Then open: http://localhost:5173');
}

console.log('\n💡 For detailed help, see START_HERE.md\n');
