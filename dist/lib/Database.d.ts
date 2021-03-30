import mongoose from 'mongoose';
declare class Database {
    _init(link: string, options: {
        useNewUrlParser: boolean;
        autoIndex: boolean;
        useUnifiedTopology: boolean;
    }): Promise<typeof mongoose>;
}
declare const _default: Database;
export default _default;
