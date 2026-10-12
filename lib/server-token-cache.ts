import { createHash } from 'node:crypto';
/** Cache only service OAuth access tokens, never CRM users or permission decisions. */
export class ServiceTokenCache {
    private tokens = new Map<string, {
        token: string;
        expires: number;
    }>();
    private pending = new Map<string, Promise<string>>();
    async get(credentials: string[], fetchToken: () => Promise<{
        access_token: string;
        expires_in?: number;
    }>, now = Date.now()) {
        const key = createHash('sha256').update(JSON.stringify(credentials)).digest('hex');
        const existing = this.tokens.get(key);
        if (existing && existing.expires > now + 60000)
            return existing.token;
        if (this.pending.has(key))
            return this.pending.get(key)!;
        const request = fetchToken().then(result => {
            if (!result.access_token)
                throw new Error('Token Google non disponibile.');
            if (Number(result.expires_in) > 60) {
                if (this.tokens.size >= 8)
                    this.tokens.delete(this.tokens.keys().next().value!);
                this.tokens.set(key, { token: result.access_token, expires: now + Number(result.expires_in) * 1000 });
            }
            return result.access_token;
        }).finally(() => this.pending.delete(key));
        this.pending.set(key, request);
        return request;
    }
}
export const googleTokens = new ServiceTokenCache();
