import cron from 'cron';

export default class CronJob {

    constructor(pattern: string, data: any) {
        return new cron.CronJob(pattern, function() { data });
    }

    public start(cron: any) {
        cron.start();
    }
}