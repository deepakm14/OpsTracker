package com.uds.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class DateUtil {

	public String convertStringToDate(String str)
	{
		Date date = new Date(str);  
	    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");  
	    String strDate= formatter.format(date);  
	    return strDate;
	}
	
//	public String convertDateToString(String str)
//	{
//		
//	}
}
