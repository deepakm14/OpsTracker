package com.uds.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

@Component
public class MapperUtil<E, M> {

	public <E, M> E  toEntity(M model, Class<E> entityType) {
		E entity = null;
		if(model != null) {
			ModelMapper mapper = new ModelMapper();
			mapper.getConfiguration().setAmbiguityIgnored(true);
			entity = mapper.map(model, entityType);
		}	
		return entity;
	}
	
	public  void  toEntity(M model,E entity) {
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setAmbiguityIgnored(true);
		mapper.map(model, entity);
	}
	public <E, M> M  toModel(E entity, Class<M> modelType) {
		M model = null;
		if(entity != null) {
			ModelMapper mapper = new ModelMapper();
			//mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
			mapper.getConfiguration().setAmbiguityIgnored(true);
			model = mapper.map(entity, modelType);
		}	
		return model;
	}
	
	public <E, M> List<M> toModelList(List<E> entities, Class<M> modelType) {
		List<M> modelList = new ArrayList<M>();
		if(!CollectionUtils.isEmpty(entities)) {
			for(E entity : entities) {
				modelList.add(toModel(entity, modelType));
			}
		}
		return modelList;
	}
}
