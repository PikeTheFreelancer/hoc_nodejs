# hoc_nodejs

## khởi tạo project:
1. Tạo 1 folder, đặt tên dự án, cd vào folder đó:
- npm init --yes hoặc npm init
- lệnh này sẽ tạo ra 1 file package.json
2. Cài framework express:
- npm install express --save
3. Tạo file index.js
4. Terminal run: node index.js
5. Cài nodemon để lắng nghe những thay đổi của dự án:
- yarn add nodemon --dev
6. Sửa file package.json:
    "scripts": {
        "dev": "nodemon index.js"
    },
7. cài module mysql vào dự án:
- yarn add mysql --save
8. Ở file index.js chúng ta sẽ require module mysql vào

## Tài liệu tham khảo:
1. https://viblo.asia/p/crud-nodejs-voi-mysql-RnB5pbPGZPG