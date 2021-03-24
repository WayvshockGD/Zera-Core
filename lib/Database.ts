import mongoose from 'mongoose';

class Database {

    public _init(link: string, options: { useNewUrlParser: boolean, autoIndex: boolean, useUnifiedTopology: boolean }) {
        mongoose.connect(link, {
            useNewUrlParser: options.useNewUrlParser,
            useUnifiedTopology: options.useUnifiedTopology,
            autoIndex: options.autoIndex,
        })
    }
}

export default new Database();