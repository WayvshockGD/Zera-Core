declare class Database {
    _init(link: string, options: {
        useNewUrlParser: boolean;
        autoIndex: boolean;
        useUnifiedTopology: boolean;
    }): void;
}
export default Database;
