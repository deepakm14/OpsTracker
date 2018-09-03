package com.uds.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.sql.Date;

import org.springframework.stereotype.Component;

@Component
public class DateUtil {

	public String convertStringToDate(String str)
	{
	 return null;	
	}
	
	public Date currentDate()
	{
		Calendar currenttime = Calendar.getInstance();
		java.sql.Date createdDate = new Date((currenttime.getTime()).getTime());
		return createdDate;
	}
	
//	public String convertDateToString(String str)
//	{
//		
//	}
}
