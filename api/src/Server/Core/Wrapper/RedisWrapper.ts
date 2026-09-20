import redis, { RedisClient, Callback, ClientOpts } from 'redis';
import { CacheConfig } from '../../../config/index';

export class Redis {
    private static singleton: Redis;
    private client: RedisClient;

    public static get Instance(): Redis {
        if (!this.singleton) {
            this.singleton = new Redis(CacheConfig);
        }
        return this.singleton;
    }

    // Expose the underlying client instance via getter
    public get Client(): RedisClient {
        return this.client;
    }

    public constructor(config: ClientOpts) {
        this.client = redis.createClient(config);
    }

    public Auth(password: string): void {
        throw new Error('Not implemented fully.');
    }

    public async Select(dbIndex: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.client.select(dbIndex, (err: Error | null, res: string) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async Set<TValue>(key: string, value: TValue): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.client.set(key, JSON.stringify(value), (err: Error | null, res: string) => {
                if (err) return reject(err);
                resolve(res === 'OK');
            });
        });
    }

    public async HSet<TValue>(key: string, value: TValue, regionName: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.hset(regionName, key, JSON.stringify(value), (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async Get<TValue>(key: string): Promise<TValue | null> {
        return new Promise<TValue | null>((resolve, reject) => {
            this.client.get(key, (err: Error | null, res: string | null) => {
                if (err) return reject(err);
                if (!res) return resolve(null);
                try {
                    resolve(JSON.parse(res));
                } catch (parseErr) {
                    reject(parseErr);
                }
            });
        });
    }

    public async TTL(key: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.ttl(key, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async HGet<TValue>(key: string, regionName: string): Promise<TValue | null> {
        return new Promise<TValue | null>((resolve, reject) => {
            this.client.hget(regionName, key, (err: Error | null, res: string | null) => {
                if (err) return reject(err);
                if (!res) return resolve(null);
                try {
                    resolve(JSON.parse(res));
                } catch (parseErr) {
                    reject(parseErr);
                }
            });
        });
    }

    public async Expire(key: string, expire: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.expire(key, expire, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async Del(key: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.del(key, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async HDel(key: string, regionName: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.hdel(regionName, key, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async Keys(regionName?: string): Promise<Array<string>> {
        return new Promise<Array<string>>((resolve, reject) => {
            const pattern = regionName || '*';
            this.client.keys(pattern, (err: Error | null, res: Array<string>) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async HKeys(regionName: string): Promise<Array<string>> {
        return new Promise<Array<string>>((resolve, reject) => {
            this.client.hkeys(regionName, (err: Error | null, res: Array<string>) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async FlushDb(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.client.flushdb((err: Error | null, res: string) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async Incr(key: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.incr(key, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async IncrBy(key: string, by: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.incrby(key, by, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async Decr(key: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.decr(key, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }

    public async DecrBy(key: string, by: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.client.decrby(key, by, (err: Error | null, res: number) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }
}