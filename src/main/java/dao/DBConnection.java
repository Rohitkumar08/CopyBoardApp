package dao;


import redis.clients.jedis.Jedis;

public class DBConnection {

	public static Jedis getConnection() {
		
		Jedis jedis = new Jedis("localhost");
		
		return jedis;
	}
}
