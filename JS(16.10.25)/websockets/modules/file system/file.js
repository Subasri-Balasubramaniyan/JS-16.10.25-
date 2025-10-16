// Import the File System module
const fs = require('fs');
const path = require('path');

// Define file and folder paths
const folderPath = path.join(__dirname, 'files');
const filePath = path.join(folderPath, 'example.txt');

// ----------------------
// 1️⃣ Create Folder
// ----------------------
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log('📁 Folder created:', folderPath);
} else {
  console.log('📁 Folder already exists.');
}

// ----------------------
// 2️⃣ Create / Write File
// ----------------------
fs.writeFileSync(filePath, 'Hello Node.js File System!');
console.log('📝 File created and written successfully.');

// ----------------------
// 3️⃣ Read File
// ----------------------
const content = fs.readFileSync(filePath, 'utf-8');
console.log('\n📖 File content:\n', content);

// ----------------------
// 4️⃣ Append File
// ----------------------
fs.appendFileSync(filePath, '\nThis line was appended.');
console.log('\n➕ Text appended successfully.');

// Read again to confirm
const updatedContent = fs.readFileSync(filePath, 'utf-8');
console.log('\n📖 Updated file content:\n', updatedContent);

// ----------------------
// 5️⃣ Rename File
// ----------------------
const newFilePath = path.join(folderPath, 'renamed.txt');
fs.renameSync(filePath, newFilePath);
console.log('\n✏️ File renamed to:', newFilePath);

// ----------------------
// 6️⃣ Check if File Exists
// ----------------------
if (fs.existsSync(newFilePath)) {
  console.log('\n✅ File exists at path:', newFilePath);
} else {
  console.log('\n❌ File not found!');
}

// ----------------------
// 7️⃣ Read Folder Contents
// ----------------------
const files = fs.readdirSync(folderPath);
console.log('\n📂 Files inside folder:', files);

// ----------------------
// 8️⃣ Delete File
// ----------------------
// Uncomment below to delete the file after testing
fs.unlinkSync(newFilePath);
console.log('\n🗑️ File deleted.');

// ----------------------
// 9️⃣ Delete Folder (only if empty)
// ----------------------
// Uncomment below if you want to delete folder after file deletion
fs.rmdirSync(folderPath);
console.log('\n🗑️ Folder deleted.');
