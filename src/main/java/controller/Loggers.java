package controller;

import java.util.logging.Logger;

/**
 * @author rrawani
 */
public class Loggers {
    public static Logger getLogger(Class<?> clazz) {
        return Logger.getLogger(clazz.getName());
    }
}
