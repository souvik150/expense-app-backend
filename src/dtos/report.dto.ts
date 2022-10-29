import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ReportType } from '../data';
import { Exclude } from 'class-transformer';

export class createReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}

export class ReportResponse {
  id: string;
  source: string;
  amount: number;
  created_at: Date;

  @Exclude()
  updated_at: Date;
  type: ReportType;
}
