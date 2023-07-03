import { Module } from '@nestjs/common';
import { ReportsService } from './reports/reports.service';
import { ReportsController } from './reports/reports.controller';
import { BullModule } from '@nestjs/bull';
import { ReportsJobService } from './reports-job/reports-job.service';

@Module({
  providers: [ReportsService, ReportsJobService],
  controllers: [ReportsController],
  imports: [BullModule.registerQueue({ name: 'reports' })],
})
export class ReportsModule {}
