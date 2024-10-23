import fs from 'fs';
import path from 'path';

const inputDir = process.argv[2]; // 输入的目录
const outputFilePath = process.argv[3]; // 输出的文件路径

if (!inputDir || !outputFilePath) {
    console.error('使用方法: node ./extractor/scripts/merge-files.mjs <输入目录> <输出文件>');
    process.exit(1);
}

// 确保输出目录存在
const outputDir = path.dirname(outputFilePath);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const collectFiles = (directory) => {
    let filesList = [];

    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            filesList = filesList.concat(collectFiles(filePath)); // 递归遍历子目录
        } else if (file.endsWith('.d.ts') || file.endsWith('.ts')) {
            filesList.push(filePath);
        }
    });

    return filesList;
};

// 收集所有的 .d.ts 和 .ts 文件
const collectedFiles = collectFiles(inputDir);
let content = '';
// 读取所有的 .d.ts 和 .ts 文件内容
collectedFiles.forEach(file => {
    content += fs.readFileSync(file, 'utf-8') + '\n';
});

// 写入到指定的输出文件
fs.writeFileSync(outputFilePath, content);
console.log(`已将 ${collectedFiles.length} 个文件合并到 ${outputFilePath}`);
