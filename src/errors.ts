class Exception extends Error {}

export class ConnectionError extends Exception {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ConnectionError.prototype);
    console.error(message);
  }
}

export class DatabaseError extends Exception {
  constructor(errors: string[]) {
    super();
    Object.setPrototypeOf(this, DatabaseError.prototype);
    for (const error in errors) {
      console.error(error);
    }
  }
}

export class InvalidTypeError extends Exception {}

export class InvalidArgumentError extends Exception {}
