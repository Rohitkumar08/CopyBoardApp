package dao;

import redis.clients.jedis.Jedis;

public class DBimplementation {
	DBConnection conn= new DBConnection();
	Jedis jd=null;
	public void saveData(String message, String custUrl, int time) {	
		jd =conn.getConnection();
		jd.hset("messageMapped", custUrl, message);
		System.out.println("saved data :  "+jd.hget("messageMapped", custUrl));
		System.out.println("data saved for :"+time);
		jd.expire("messageMapped", time);
	}
	
	public String getData(String key) {
		
		jd=conn.getConnection();	
		String message=jd.hget("messageMapped", key);
		return message;
	}
	
}
