package dao;

import redis.clients.jedis.Jedis;

public class DBimplementation {
	DBConnection conn= new DBConnection();
	Jedis jd=null;
	public void saveData(String message, String custUrl) {
		
		
		jd =conn.getConnection();
		System.out.println("inside Dao");
		System.out.println(custUrl+"     "+message);
		jd.hset("messageMapping", custUrl, message);
		System.out.println("saved data");
		jd.expire("messageMapping", 180);
	}
	
	public String getData(String key) {
		
		jd=conn.getConnection();
		String message=jd.hget("messageMapping", key);
	
		return message;
	}
	
}
