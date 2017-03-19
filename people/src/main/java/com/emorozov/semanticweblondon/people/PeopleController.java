package com.emorozov.semanticweblondon.people;


import lombok.extern.slf4j.Slf4j;
import org.apache.jena.rdf.model.*;
import org.apache.jena.riot.Lang;
import org.apache.jena.riot.RDFDataMgr;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;
import java.io.ByteArrayOutputStream;

@Slf4j
@Controller
public class PeopleController {

    private Model model;

    public PeopleController() throws Exception {
        loadModel();
    }

    private void loadModel() throws Exception {

        log.info("Loading model...");

        this.model = ModelFactory.createDefaultModel();
        this.model.read("data/people.ttl", Lang.TURTLE.getName());

        log.info("Done.");
    }

    @RequestMapping(path = "/", method = RequestMethod.GET, produces = "application/json")
    public void getTrades(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            RDFDataMgr.write(baos, model, Lang.JSONLD);
            response.getWriter().write(baos.toString("UTF-8"));
            response.setStatus(200);
        }
    }

    @RequestMapping(path = "/{personid}", method = RequestMethod.GET, produces = "application/json")
    public void getTrade(@PathVariable("personid") String personid, HttpServletRequest request, HttpServletResponse response) throws Exception {

        String url = String.format("http://localhost:50300/people/%s", personid);
        StmtIterator iterator = model.listStatements(model.getResource(url), null, (RDFNode)null);

        Model orderModel = ModelFactory.createDefaultModel();
        while (iterator.hasNext()) {
            orderModel.add(iterator.nextStatement());
        }

        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            RDFDataMgr.write(baos, orderModel, Lang.JSONLD);
            response.getWriter().write(baos.toString("UTF-8"));
            response.setStatus(200);
        }
    }
}
