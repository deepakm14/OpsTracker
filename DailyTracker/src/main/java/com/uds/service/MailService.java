package com.uds.service;

import java.io.File;
import java.security.Security;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.sun.net.ssl.internal.ssl.Provider;

@Service
public class MailService {

	private final static Logger log = LoggerFactory.getLogger(MailService.class);
	public static final SimpleDateFormat ddMMMyyyyDateFormat = new SimpleDateFormat("ddMMMyyyy");
	
	@Autowired
	static	Environment env;

	public static void SendMail(String toEmail, String fileRepo)
			    throws Exception
			  {
		  
		  		String smtpHost = env.getProperty("host");
		  		String smtpPort = env.getProperty("port");
		  		String userName = env.getProperty("username");
		  		String password = env.getProperty("password");
			    Security.addProvider(new Provider());
			    log.info("mail.smtp.host : {}", smtpHost);
			    log.info("mail.smtp.port : {}", smtpPort);
			    log.info("Username : {}", userName);
			    log.info("Password : {}", password);
			    
			    Properties props = new Properties();
			    props.put("mail.smtp.auth", "true");
			    props.put("mail.smtp.starttls.enable", "true");
			    props.put("mail.smtp.host", smtpHost);
			    props.put("mail.smtp.port", smtpPort);
			    Session session = Session.getInstance(props, new Authenticator()
			    {
			      protected PasswordAuthentication getPasswordAuthentication()
			      {
			        return new PasswordAuthentication(userName, password);
			      }
			    });
			    try
			    {
			      Message message = new MimeMessage(session);
			      message.setFrom(new InternetAddress(userName));
			      message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
			      
			      message.setSubject("Email Subject- " );
			      
			      //message.setText("Email Content");
			      
			      BodyPart messageBodyPart = new MimeBodyPart();
			      
			      messageBodyPart.setText("Email Content");
			      
			      Multipart multipart = new MimeMultipart();
			      
			      multipart.addBodyPart(messageBodyPart);
			      
			      messageBodyPart = new MimeBodyPart();
			      String todayFolder = ddMMMyyyyDateFormat.format(new Date());
			      String filename = fileRepo + todayFolder + File.separator + "" + "_signed.pdf";
			      FileDataSource source = new FileDataSource(filename);
			      messageBodyPart.setDataHandler(new DataHandler(source));
			      messageBodyPart.setFileName("" + "_signed.pdf");
			      log.info("File Name with path" + filename);
			      multipart.addBodyPart(messageBodyPart);
			      
			      message.setContent(multipart);
			      
			      Transport.send(message);
			    }
			    catch (MessagingException e)
			    {
			      log.error(e.getMessage());
			      throw new RuntimeException(e);
			    }
			    catch (Exception e)
			    {
			      log.error(e.getMessage());
			      throw new Exception(e);
			    }
			  }

	}
