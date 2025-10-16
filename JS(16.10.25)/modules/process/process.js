// process.js

// Display process information
console.log('🔹 Process ID:', process.pid);
console.log('🔹 Node Version:', process.version);
console.log('🔹 Platform:', process.platform);
console.log('🔹 Current Directory:', process.cwd());
console.log('🔹 Memory Usage:', process.memoryUsage());

// Access environment variables
console.log('\n🌱 Environment Variables:');
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('USERNAME:', process.env.USERNAME || 'unknown');

// Command-line arguments
console.log('\n💬 Command Line Arguments:');
console.log(process.argv);

// Example: use CLI arguments
const args = process.argv.slice(2); // skip "node" and "file.js"
console.log('\n📦 Custom Arguments:', args);

if (args.length) {
  console.log(`You passed ${args.length} arguments.`);
} else {
  console.log('No extra arguments passed.');
}

// Handle exit event
process.on('exit', () => {
  console.log('\n👋 Exiting process...');
});
