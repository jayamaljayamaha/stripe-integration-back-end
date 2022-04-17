import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentRequestBody } from './types/PaymentRequestBody';
import { Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentsService) { }

  @Post()
  createPayments(
    @Res() response: Response,
    @Body() paymentRequestBody: PaymentRequestBody,
  ) {
    this.paymentService
      .createPayment(paymentRequestBody)
      .then((res) => {
        response.status(HttpStatus.CREATED).json(res);
      })
      .catch((err) => {
        response.status(HttpStatus.BAD_REQUEST).json(err);
      });
  }
}
