const redis = require('redis');

class Redis {
  constructor() {
    try {
      if (this.client == null || this.client == undefined) {
        console.log('[Redis] create Redis');
        this.createClient();
      } else {
        console.log('[Redis] Redis already created');
      }
    } catch (error) {
      console.log('[Redis constructor] error = ', error); 
    }
  }

  async createClient() {
    try {
      this.client = redis.createClient({
        url : 'redis://175.45.200.17:6379'
      });
      await this.client.connect();
    } catch (error) {
      console.log('[Redis createClient] error = ', error);
    }
  }
}

module.exports = new Redis();
