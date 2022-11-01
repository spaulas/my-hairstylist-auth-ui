export class AuthGenericError extends Error {
    constructor(message:any) {
        super(message);
        this.name = 'AuthGenericError';
    }
}

export class AuthEmailAlreadyExistsError extends Error {
    constructor(message:any) {
        super(message);
        this.name = 'AuthEmailAlreadyExistsError';
    }
}
