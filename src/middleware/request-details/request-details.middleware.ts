import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';

export function RequestDetailsMiddleware(req: Request, res: Response, next: NextFunction) {

  const { method, url, headers, body } = req;
  const reqestData = {
    method: method,
    url: url,
    userAgent: headers['user-agent'],
    contentType: headers['content-type'],
    body: body
  }
  res.json(reqestData);

  next();
}

