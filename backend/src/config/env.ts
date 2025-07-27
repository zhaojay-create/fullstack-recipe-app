import "dotenv/config"; // 导入 dotenv 配置后，才能使用 process.env 访问环境变量

// 可以在这里添加其他环境变量
export const ENV = {
  PORT: process.env.PORT || 9000,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || 'development',
};