package dao;

import redis.clients.jedis.Jedis;

public class DBimplementation {

	public void saveData(String message, String custUrl) {
		
		DBConnection conn= new DBConnection();
		Jedis jd=conn.getConnection();
		
		jd.hset("messageMapping", custUrl, message);
	}
	
}
