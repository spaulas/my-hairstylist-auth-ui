export class ConnectionError extends Error {
  constructor(message: any) {
    super(message);
    this.name = "ConnectionError";
  }
}
