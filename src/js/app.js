export default class Validator {
    static validateUsername(username) {
        const regex = /^[A-Za-z0-9_-]+$/;
        const regexDigits = /\d{4,}/;
        const regexStartEnd = /^[0-9_-]|[_-]$/;

        if (!regex.test(username)) {
            return false;
        }

        if (regexDigits.test(username)) {
            return false;
        }

        if (regexStartEnd.test(username)) {
            return false;
        }

        return true;
    }
}