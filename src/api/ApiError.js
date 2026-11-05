/** Error thrown by every API adapter. `status` mirrors the HTTP status code. */
export default class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}
