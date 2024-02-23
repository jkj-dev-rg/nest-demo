import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsController } from "./products/products.controller";
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [AppController, ProductsController],
  providers: [AppService]
})
export class AppModule {}
