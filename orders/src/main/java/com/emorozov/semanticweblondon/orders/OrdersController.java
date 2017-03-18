package com.emorozov.semanticweblondon.orders;


import lombok.extern.slf4j.Slf4j;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.riot.Lang;
import org.apache.jena.riot.RDFDataMgr;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.io.ByteArrayOutputStream;

@Slf4j
@Controller
public class OrdersController {

    private Model model;

    public OrdersController() throws Exception {
        loadModel();
    }

    private void loadModel() throws Exception {

        log.info("Loading model...");

        model = ModelFactory.createDefaultModel();
        model.read("data/orders.ttl", Lang.TURTLE.getName());

        log.info("Done.");
    }

    @RequestMapping(path = "/", method = RequestMethod.GET, produces = "application/json")
    public String getTrades(HttpServletRequest request) throws Exception {
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            RDFDataMgr.write(baos, model, Lang.JSONLD);
            return baos.toString("UTF-8");
        }
    }

    @RequestMapping(path = "/{orderId}", method = RequestMethod.GET, produces = "application/json")
    public String getTrade(HttpServletRequest request, String orderId) {

        String requestUrl = request.getRequestURL().toString();

        log.info("Request URL: {}", requestUrl);

        Resource resourceModel = model.getResource(requestUrl);

        return resourceModel.toString();
    }
}
