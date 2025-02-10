import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Kích hoạt CORS nếu cần (cho frontend giao tiếp với backend)
  app.enableCors();

  // Dùng ValidationPipe để kiểm tra dữ liệu đầu vào DTO
  app.useGlobalPipes(new ValidationPipe());

  // Chạy server trên port 3000 (hoặc port từ biến môi trường)
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
}
bootstrap();
