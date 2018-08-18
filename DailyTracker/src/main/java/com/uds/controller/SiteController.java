package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.domain.Site;
import com.uds.dto.SiteDTO;
import com.uds.service.SiteService;

@RestController
@RequestMapping("/uds")
public class SiteController {

	private final Logger log = LoggerFactory.getLogger(SiteController.class);
	
	@Autowired
	private SiteService siteService;
	
	@PostMapping("/site")
	public SiteDTO saveSite(@RequestBody SiteDTO siteDTO, HttpServletRequest request)
	{
		log.debug("****Inside SiteController*****");
		siteService.createSite(siteDTO);
		return siteDTO;
	}
	
	@PutMapping("/site/update")
	public Site updateSite(@RequestBody SiteDTO siteDTO, HttpServletRequest request)
	{
		log.debug("****Inside SiteController*****");
		Site site = siteService.updateSite(siteDTO);
		return site;
	}
	
	@DeleteMapping("/site/delete/{id}")
	public void deleteSite(@PathVariable long id)
	{
		log.debug("****Inside SiteController*****");
		siteService.deleteSite(id);
	}
	
	@GetMapping("/site/search")
	public List<SiteDTO> findAll()
	{
		log.debug("****Inside SiteController*****");
		return siteService.findAll();
	}
	
	@GetMapping("/site/search/{id}")
	public SiteDTO findOne(@PathVariable long id)
	{
		log.debug("****Inside SiteController*****");
		return siteService.findOne(id);
	}
	
	@GetMapping("/site/search/projectsite/{id}")
	public List<SiteDTO> findByProjectSite(@PathVariable long id)
	{
		log.debug("****Inside SiteController*****");
		return siteService.findByProjectSite(id);
	}
}
