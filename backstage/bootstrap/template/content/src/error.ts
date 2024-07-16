export default class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
