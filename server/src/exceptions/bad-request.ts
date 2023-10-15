import HttpException from './http-exception';

class BadRequestException extends HttpException {
    constructor() {
        super(400, 'Bad request.');
    }
}

export default BadRequestException;
